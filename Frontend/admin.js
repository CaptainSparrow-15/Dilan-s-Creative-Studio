const API_URL = `https://dilan-s-creative-studio.onrender.com/api/products`;
let products = [];

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

function createVariantRow(name = '', url = '') {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '10px';
    row.className = 'variant-row';
    row.innerHTML = `
        <input type="text" placeholder="Variant Name (e.g. Red)" value="${name}" class="var-name" required style="flex: 1; padding: 8px; border: 1px solid var(--border); border-radius: 4px;">
        <input type="text" placeholder="Image URL" value="${url}" class="var-url" required style="flex: 2; padding: 8px; border: 1px solid var(--border); border-radius: 4px;">
        <button type="button" class="btn btn-danger" onclick="this.parentElement.remove()" style="padding: 8px 12px;">X</button>
    `;
    variantsContainer.appendChild(row);
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
        document.getElementById('prod-image').value = p.image;
        document.getElementById('prod-desc').value = p.description || "";
        document.getElementById('prod-sort-order').value = p.sortOrder !== undefined ? p.sortOrder : "";
        document.getElementById('prod-variant-type').value = p.variantType || "colors";

        // Populate variants
        variantsContainer.innerHTML = '';
        if (p.colors && p.images) {
            p.colors.forEach(col => {
                createVariantRow(col, p.images[col]);
            });
        }

        modalTitle.textContent = "Edit Product";
        modal.classList.add('active');
    }
};
