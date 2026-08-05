const BASE_API = 'https://dilan-s-creative-studio.onrender.com/api';
const API_URL = `${BASE_API}/products`;
const API_BULK_URL = `${BASE_API}/products/bulk`;
const API_IMAGES_URL = `${BASE_API}/images`;
const API_UPLOAD_URL = `${BASE_API}/upload`;

let products = [];
let availableImages = [];

// DOM Elements
const tbody = document.getElementById('admin-product-list');
const btnAdd = document.getElementById('btn-add-product');
const modal = document.getElementById('product-modal');
const btnCancel = document.getElementById('btn-cancel-modal');
const form = document.getElementById('product-form');
const modalTitle = document.getElementById('modal-title');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const adminContainer = document.getElementById('admin-container');
    const loginError = document.getElementById('login-error');
    const togglePassword = document.getElementById('toggle-password');
    const adminPassword = document.getElementById('admin-password');
    const eyeIcon = document.getElementById('eye-icon');

    if (togglePassword && adminPassword && eyeIcon) {
        togglePassword.addEventListener('click', () => {
            if (adminPassword.type === 'password') {
                adminPassword.type = 'text';
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            } else {
                adminPassword.type = 'password';
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            }
        });
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pwd = document.getElementById('admin-password').value;
        // Simple frontend password check for local admin panel
        if (pwd === 'admin123' || pwd === 'dilan2026') {
            loginScreen.classList.add('hidden');
            adminContainer.classList.remove('hidden');
            fetchProducts();
        } else {
            loginError.classList.remove('hidden');
        }
    });
});

async function fetchProducts() {
    try {
        const res = await fetch(API_URL);
        let fetchedProducts = await res.json();
        
        fetchedProducts.sort((a, b) => {
            const orderA = a.sortOrder !== undefined ? Number(a.sortOrder) : 999;
            const orderB = b.sortOrder !== undefined ? Number(b.sortOrder) : 999;
            return orderA - orderB;
        });
        
        products = fetchedProducts;
        renderTable();
    } catch (e) {
        console.error("Failed to fetch products", e);
        alert("Could not connect to backend server. Make sure it's running.");
    }
}

function renderTable() {
    tbody.innerHTML = '';
    products.forEach(p => {
        const tr = document.createElement('tr');
        tr.draggable = true;
        tr.dataset.id = p.id;
        tr.style.cursor = 'grab';
        tr.innerHTML = `
            <td><i class="fa-solid fa-grip-vertical" style="color: #ccc; margin-right: 8px;"></i>${p.id}</td>
            <td>${p.sortOrder !== undefined ? p.sortOrder : 999}</td>
            <td><img src="${p.image}" alt="${p.name}"></td>
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td>₹${p.price}</td>
            <td class="action-btns">
                <button class="btn btn-secondary" onclick="editProduct(${p.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteProduct(${p.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    setupDragAndDrop();
}

let draggedRow = null;
function setupDragAndDrop() {
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
        row.addEventListener('dragstart', function(e) {
            draggedRow = this;
            e.dataTransfer.effectAllowed = 'move';
            this.style.opacity = '0.5';
        });

        row.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            this.style.borderTop = '2px solid var(--primary)';
            return false;
        });

        row.addEventListener('dragleave', function(e) {
            this.style.borderTop = '';
        });

        row.addEventListener('drop', function(e) {
            e.stopPropagation();
            this.style.borderTop = '';
            if (draggedRow !== this) {
                const allRows = Array.from(tbody.querySelectorAll('tr'));
                const draggedIndex = allRows.indexOf(draggedRow);
                const targetIndex = allRows.indexOf(this);
                
                if (draggedIndex < targetIndex) {
                    this.parentNode.insertBefore(draggedRow, this.nextSibling);
                } else {
                    this.parentNode.insertBefore(draggedRow, this);
                }
                
                document.getElementById('btn-save-order').style.display = 'inline-block';
            }
            return false;
        });

        row.addEventListener('dragend', function(e) {
            this.style.opacity = '1';
            rows.forEach(r => r.style.borderTop = '');
        });
    });
}

// Variant Logic
const variantsContainer = document.getElementById('variants-container');
const btnAddVariant = document.getElementById('btn-add-variant');

function createVariantRow(name = '', url = '', containerId = 'variants-container') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const rowId = `var_${Date.now()}_${Math.floor(Math.random()*1000)}`;
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '10px';
    row.className = 'variant-row';
    
    row.innerHTML = `
        <input type="text" placeholder="Variant Name (e.g. Red)" value="${name}" class="var-name" required style="flex: 1; padding: 8px; border: 1px solid var(--border); border-radius: 4px;">
        <input type="hidden" class="var-url" id="${rowId}_url" value="${url}" required>
        <button type="button" class="btn btn-secondary" style="flex: 1;" onclick="openImagePicker('${rowId}_url', '${rowId}_preview')">Pick Image</button>
        <img id="${rowId}_preview" src="${url}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; display: ${url ? 'block' : 'none'};">
        <button type="button" class="btn btn-danger" onclick="this.parentElement.remove()" style="padding: 8px 12px;">X</button>
    `;
    container.appendChild(row);
}

btnAddVariant.addEventListener('click', () => createVariantRow());

// Save Order
const btnSaveOrder = document.getElementById('btn-save-order');
btnSaveOrder.addEventListener('click', async () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    btnSaveOrder.disabled = true;
    btnSaveOrder.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
    
    try {
        const updatePromises = rows.map((row, index) => {
            const id = Number(row.dataset.id);
            const newOrder = index + 1;
            
            const prod = products.find(p => p.id === id);
            if (prod && prod.sortOrder !== newOrder) {
                prod.sortOrder = newOrder;
                return fetch(`${API_URL}/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(prod)
                });
            }
            return Promise.resolve();
        });
        
        await Promise.all(updatePromises);
        
        btnSaveOrder.style.display = 'none';
        btnSaveOrder.disabled = false;
        btnSaveOrder.innerHTML = '<i class="fa-solid fa-save"></i> Save Order';
        
        fetchProducts(); // Refresh
    } catch (e) {
        console.error(e);
        alert("Failed to save order.");
        btnSaveOrder.disabled = false;
        btnSaveOrder.innerHTML = '<i class="fa-solid fa-save"></i> Save Order';
    }
});

// Modal Handlers
btnAdd.addEventListener('click', () => {
    form.reset();
    document.getElementById('prod-id').value = '';
    document.getElementById('prod-price-unit').value = '';
    document.getElementById('prod-sort-order').value = '';
    document.getElementById('prod-image').value = '';
    const preview = document.getElementById('prod-image-preview');
    if (preview) preview.style.display = 'none';
    variantsContainer.innerHTML = ''; // Clear variants
    modalTitle.textContent = "Add Product";
    modal.classList.add('active');
});

btnCancel.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Form Submit
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('prod-id').value;

    const productData = {
        name: document.getElementById('prod-name').value,
        category: document.getElementById('prod-category').value,
        price: Number(document.getElementById('prod-price').value),
        priceUnit: document.getElementById('prod-price-unit').value,
        image: document.getElementById('prod-image').value,
        description: document.getElementById('prod-desc').value,
        sortOrder: document.getElementById('prod-sort-order').value ? Number(document.getElementById('prod-sort-order').value) : 999,
        rating: 5.0,
        reviewsCount: 1,
        badge: "New Arrival",
        variantType: document.getElementById('prod-variant-type').value
    };

    // Parse variants
    const varRows = variantsContainer.querySelectorAll('.variant-row');
    if (varRows.length > 0) {
        productData.colors = [];
        productData.images = {};
        varRows.forEach(row => {
            const name = row.querySelector('.var-name').value.trim();
            const url = row.querySelector('.var-url').value.trim();
            if (name && url) {
                productData.colors.push(name);
                productData.images[name] = url;
            }
        });
    }

    try {
        if (id) {
            // Update
            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData)
            });
        } else {
            // Create
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData)
            });
        }

        modal.classList.remove('active');
        fetchProducts(); // Refresh list
    } catch (err) {
        console.error(err);
        alert("Failed to save product.");
    }
});

// Delete
async function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this product?")) {
        try {
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            fetchProducts(); // Refresh list
        } catch (e) {
            console.error(e);
            alert("Failed to delete.");
        }
    }
}

// Edit
window.editProduct = (id) => {
    const p = products.find(prod => prod.id === id);
    if (p) {
        document.getElementById('prod-id').value = p.id;
        document.getElementById('prod-name').value = p.name;
        document.getElementById('prod-category').value = p.category;
        document.getElementById('prod-price').value = p.price;
        document.getElementById('prod-price-unit').value = p.priceUnit || "";
        document.getElementById('prod-image').value = p.image || "";
        
        const preview = document.getElementById('prod-image-preview');
        if (p.image) {
            preview.src = p.image;
            preview.style.display = 'block';
        } else {
            preview.style.display = 'none';
        }

        document.getElementById('prod-desc').value = p.description || "";
        document.getElementById('prod-sort-order').value = p.sortOrder !== undefined ? p.sortOrder : "";
        document.getElementById('prod-variant-type').value = p.variantType || "colors";

        // Populate variants
        variantsContainer.innerHTML = '';
        if (p.colors && p.images) {
            p.colors.forEach(col => {
                createVariantRow(col, p.images[col], 'variants-container');
            });
        }

        modalTitle.textContent = "Edit Product";
        modal.classList.add('active');
    }
};

// Image Picker Logic
const imagePickerModal = document.getElementById('image-picker-modal');
const btnCloseImagePicker = document.getElementById('btn-close-image-picker');
const imagePickerGrid = document.getElementById('image-picker-grid');
const imageUploadInput = document.getElementById('image-upload-input');
const btnUploadImage = document.getElementById('btn-upload-image');
const uploadStatus = document.getElementById('upload-status');

let currentImageTargetInputId = null;
let currentImageTargetPreviewId = null;

async function fetchImages() {
    try {
        const res = await fetch(API_IMAGES_URL);
        availableImages = await res.json();
        renderImageGrid();
    } catch (e) {
        console.error("Failed to fetch images", e);
    }
}

function renderImageGrid() {
    imagePickerGrid.innerHTML = '';
    availableImages.forEach(img => {
        const item = document.createElement('div');
        item.className = 'image-picker-item';
        item.innerHTML = `<img src="${img.publicUrl}" alt="${img.name}" title="${img.name}">`;
        item.addEventListener('click', () => {
            selectImage(img.publicUrl);
        });
        imagePickerGrid.appendChild(item);
    });
}

window.openImagePicker = (targetInputId, targetPreviewId) => {
    currentImageTargetInputId = targetInputId;
    currentImageTargetPreviewId = targetPreviewId;
    imagePickerModal.classList.add('active');
    fetchImages();
};

if (btnCloseImagePicker) {
    btnCloseImagePicker.addEventListener('click', () => {
        imagePickerModal.classList.remove('active');
    });
}

function selectImage(url) {
    if (currentImageTargetInputId) {
        const input = document.getElementById(currentImageTargetInputId);
        if (input) input.value = url;
    }
    if (currentImageTargetPreviewId) {
        const preview = document.getElementById(currentImageTargetPreviewId);
        if (preview) {
            preview.src = url;
            preview.style.display = 'block';
        }
    }
    imagePickerModal.classList.remove('active');
}

if (btnUploadImage) {
    btnUploadImage.addEventListener('click', async () => {
        const file = imageUploadInput.files[0];
        if (!file) {
            alert("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        uploadStatus.textContent = "Uploading...";
        uploadStatus.style.color = "var(--text-muted)";
        btnUploadImage.disabled = true;

        try {
            const res = await fetch(API_UPLOAD_URL, {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (res.ok) {
                uploadStatus.textContent = "Upload successful!";
                uploadStatus.style.color = "green";
                imageUploadInput.value = '';
                
                availableImages.unshift(data); // Put new image at beginning
                renderImageGrid();
                
                selectImage(data.publicUrl); // Auto-select
            } else {
                uploadStatus.textContent = `Upload failed: ${data.error}`;
                uploadStatus.style.color = "var(--danger)";
            }
        } catch (e) {
            console.error(e);
            uploadStatus.textContent = "Upload failed.";
            uploadStatus.style.color = "var(--danger)";
        } finally {
            btnUploadImage.disabled = false;
        }
    });
}

// Bulk Add Logic
const btnBulkAddProduct = document.getElementById('btn-bulk-add-product');
const bulkModal = document.getElementById('bulk-modal');
const btnCloseBulk = document.getElementById('btn-cancel-bulk');
const btnSaveBulk = document.getElementById('btn-save-bulk');
const bulkRowsContainer = document.getElementById('bulk-rows-container');
const btnAddBulkRow = document.getElementById('btn-add-bulk-row');
const bulkError = document.getElementById('bulk-error');

function openBulkAdd() {
    bulkRowsContainer.innerHTML = '';
    bulkError.classList.add('hidden');
    addBulkRow(); // Start with one row
    bulkModal.classList.add('active');
}

if (btnBulkAddProduct) {
    btnBulkAddProduct.addEventListener('click', openBulkAdd);
}

if (btnCloseBulk) {
    btnCloseBulk.addEventListener('click', () => {
        bulkModal.classList.remove('active');
    });
}

window.addBulkRow = () => {
    const rowId = `bulk_${Date.now()}_${Math.floor(Math.random()*1000)}`;
    const row = document.createElement('div');
    row.className = 'bulk-row';
    row.id = rowId;
    
    row.innerHTML = `
        <div class="bulk-row-header">
            <span>New Product</span>
            <button type="button" class="btn btn-danger" onclick="this.closest('.bulk-row').remove()" style="padding: 5px 10px; font-size: 0.8rem;">Remove</button>
        </div>
        <div class="bulk-row-fields">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="bulk-name" required>
            </div>
            <div class="form-group">
                <label>Category</label>
                <select class="bulk-category" required>
                    <option value="rakhi">Rakhi</option>
                    <option value="ganpati">Ganpati Collection</option>
                    <option value="diwali">Diwali Collection</option>
                    <option value="christmas">Christmas Collection</option>
                </select>
            </div>
            <div class="form-group">
                <label>Price (₹)</label>
                <input type="number" class="bulk-price" required>
            </div>
            <div class="form-group">
                <label>Image</label>
                <div style="display: flex; gap: 10px; align-items: center;">
                    <input type="hidden" class="bulk-image" id="${rowId}_image">
                    <button type="button" class="btn btn-secondary" onclick="openImagePicker('${rowId}_image', '${rowId}_image_preview')">Select Image</button>
                    <img id="${rowId}_image_preview" src="" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; display: none;">
                </div>
            </div>
            <div class="form-group" style="grid-column: 1 / -1;">
                <label>Description</label>
                <textarea class="bulk-desc" rows="2"></textarea>
            </div>
            <div class="form-group" style="grid-column: 1 / -1;">
                <label>Variants</label>
                <div id="${rowId}_variants" style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 5px;"></div>
                <button type="button" class="btn btn-secondary" style="padding: 5px 10px; font-size: 0.8rem;" onclick="createVariantRow('', '', '${rowId}_variants')">+ Add Variant</button>
            </div>
        </div>
    `;
    bulkRowsContainer.appendChild(row);
};

if (btnAddBulkRow) {
    btnAddBulkRow.addEventListener('click', addBulkRow);
}

if (btnSaveBulk) {
    btnSaveBulk.addEventListener('click', async () => {
        bulkError.classList.add('hidden');
        const rows = bulkRowsContainer.querySelectorAll('.bulk-row');
        if (rows.length === 0) return;
        
        const newProducts = [];
        let isValid = true;
        
        rows.forEach((row) => {
            const name = row.querySelector('.bulk-name').value.trim();
            const category = row.querySelector('.bulk-category').value;
            const price = Number(row.querySelector('.bulk-price').value);
            const image = row.querySelector('.bulk-image').value.trim();
            const description = row.querySelector('.bulk-desc').value.trim();
            
            if (!name || !category || !price || !image) {
                isValid = false;
            }
            
            const p = {
                name, category, price, image, description,
                sortOrder: 999, rating: 5.0, reviewsCount: 1, badge: "New Arrival", variantType: "colors"
            };
            
            const varRows = row.querySelectorAll('.variant-row');
            if (varRows.length > 0) {
                p.colors = [];
                p.images = {};
                varRows.forEach(vr => {
                    const vName = vr.querySelector('.var-name').value.trim();
                    const vUrl = vr.querySelector('.var-url').value.trim();
                    if (vName && vUrl) {
                        p.colors.push(vName);
                        p.images[vName] = vUrl;
                    }
                });
            }
            newProducts.push(p);
        });
        
        if (!isValid) {
            bulkError.classList.remove('hidden');
            return;
        }
        
        btnSaveBulk.disabled = true;
        btnSaveBulk.innerHTML = 'Saving...';
        
        try {
            const res = await fetch(API_BULK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProducts)
            });
            
            if (!res.ok) throw new Error("Bulk save failed");
            
            bulkModal.classList.remove('active');
            fetchProducts();
        } catch (e) {
            console.error(e);
            alert("Failed to save bulk products.");
        } finally {
            btnSaveBulk.disabled = false;
            btnSaveBulk.innerHTML = 'Save All';
        }
    });
}
