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
        products = await res.json();
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
        tr.innerHTML = `
            <td>${p.id}</td>
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

// Modal Handlers
btnAdd.addEventListener('click', () => {
    form.reset();
    document.getElementById('prod-id').value = '';
    document.getElementById('prod-price-unit').value = '';
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

    // Base product template
    const productData = {
        name: document.getElementById('prod-name').value,
        category: document.getElementById('prod-category').value,
        price: Number(document.getElementById('prod-price').value),
        priceUnit: document.getElementById('prod-price-unit').value,
        image: document.getElementById('prod-image').value,
        description: document.getElementById('prod-desc').value,
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
