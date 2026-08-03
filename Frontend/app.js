/* ==========================================================================
   Dilan's Creative Studio - Premium Handcrafted Studio Client Script
   ========================================================================== */

// 1. Static Products Database
// --------------------------------------------------------------------------
// HOW TO ADD YOUR OWN PRODUCTS AND IMAGES:
// 1. Save your new image file inside the "assets" folder.
// 2. Add a new product block inside the PRODUCTS array below.
// 3. Make sure the properties are correctly formatted:
//    - id: A unique number (e.g. 5, 6, 7...)
//    - name: The title of the product
//    - category: Choose one of: "rakhi", "candle", "crochet", "stationery"
//    - price: Price in Rupees (number)
//    - rating: Rating out of 5 (e.g. 4.8)
//    - reviewsCount: Number of reviews (number)
//    - image: The path to your image (e.g. "assets/lavender_candle.png")
//    - badge: Optional badge like "Bestseller", "New Launch" (leave empty string "" if none)
//    - description: Full product description
//    - materials: Array of bullet points for materials list
//    - size: Size descriptor string
//    - shipping: Shipping timeframe string
// --------------------------------------------------------------------------
let PRODUCTS = [];
// 2. State variables
let cart = [];
const SHIPPING_THRESHOLD = 499;
const SHIPPING_CHARGE = 50;
const COD_CHARGE = 40;

// 3. Elements Selectors
const productsGrid = document.getElementById("products-grid");
const filterTabs = document.getElementById("filter-tabs");
const productSearchInput = document.getElementById("product-search");
const searchDropdown = document.getElementById("search-dropdown");
const searchToggle = document.getElementById("search-toggle");
const clearSearchBtn = document.getElementById("clear-search-btn");

// Cart Elements
const cartTriggerBtn = document.getElementById("cart-trigger-btn");
const cartDrawerPanel = document.getElementById("cart-drawer-panel");
const cartDrawerClose = document.getElementById("cart-drawer-close");
const cartBackdropOverlay = document.getElementById("cart-backdrop-overlay");
const cartBadgeCount = document.getElementById("cart-badge-count");
const cartTotalCountSpan = document.getElementById("cart-total-count");
const cartItemsListContainer = document.getElementById("cart-drawer-items-list");
const cartTotalPriceVal = document.getElementById("cart-total-price-val");
const cartDrawerFooterActions = document.getElementById("cart-drawer-footer-actions");

// Mobile Drawer Elements
const mobileMenuToggleBtn = document.getElementById("mobile-menu-toggle-btn");
const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
const mobileDrawerClose = document.getElementById("mobile-drawer-close");
const drawerBackdrop = document.getElementById("drawer-backdrop");

// Modals
const quickviewModalOverlay = document.getElementById("quickview-modal-overlay");
const quickviewModalClose = document.getElementById("quickview-modal-close");
const quickviewContentWrapper = document.getElementById("quickview-content-wrapper");

const checkoutModalOverlay = document.getElementById("checkout-modal-overlay");
const checkoutModalClose = document.getElementById("checkout-modal-close");
const checkoutCartBtn = document.getElementById("cart-checkout-btn");

// Checkout Steps & Forms
const shippingForm = document.getElementById("shipping-details-form");
const giftCheckbox = document.getElementById("gift-checkbox");
const giftNotesGroup = document.getElementById("gift-notes-group");
const cancelCheckoutBtn = document.getElementById("cancel-checkout-btn");

const backToShippingBtn = document.getElementById("back-to-shipping-btn");
const placeOrderBtn = document.getElementById("place-order-btn");
const successCloseBtn = document.getElementById("success-close-btn");

const checkStep1 = document.getElementById("checkout-step-1-form");
const checkStep2 = document.getElementById("checkout-step-2-payment");
const checkStep3 = document.getElementById("checkout-step-3-success");

const stepInd1 = document.getElementById("step-ind-1");
const stepInd2 = document.getElementById("step-ind-2");
const stepInd3 = document.getElementById("step-ind-3");
const connector1 = document.getElementById("connector-1");
const connector2 = document.getElementById("connector-2");

// Payment variables
const paymentRadioButtons = document.getElementsByName("payment-method");
const upiPanel = document.getElementById("upi-method-panel");
const cardPanel = document.getElementById("card-method-panel");
const codPanel = document.getElementById("cod-method-panel");

// 4. Initial Launch Actions
document.addEventListener("DOMContentLoaded", async () => {
    loadCartFromStorage();

    try {
        const res = await fetch("https://dilan-s-creative-studio.onrender.com/api/products");
        let fetchedProducts = await res.json();
        
        // Sort by sortOrder (ascending). Missing sortOrder goes to bottom.
        fetchedProducts.sort((a, b) => {
            const orderA = a.sortOrder !== undefined ? Number(a.sortOrder) : 999;
            const orderB = b.sortOrder !== undefined ? Number(b.sortOrder) : 999;
            return orderA - orderB;
        });
        
        PRODUCTS = fetchedProducts;
    } catch (err) {
        console.error("Failed to fetch products", err);
    }

    renderProducts(PRODUCTS);
    setupEventListeners();
    updateCartUI();
    initHeroParticles();
    initScrollReveal();
});

// 5. Setup Listeners
function setupEventListeners() {
    // Sticky Header Scroll state
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (window.scrollY > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }

        // Highlight active nav links on scroll
        highlightNavLinks();
    });

    // Mobile Navigation toggles
    mobileMenuToggleBtn.addEventListener("click", openMobileDrawer);
    mobileDrawerClose.addEventListener("click", closeMobileDrawer);
    drawerBackdrop.addEventListener("click", closeMobileDrawer);
    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", closeMobileDrawer);
    });

    // Cart Drawer toggles
    cartTriggerBtn.addEventListener("click", openCartDrawer);
    cartDrawerClose.addEventListener("click", closeCartDrawer);
    cartBackdropOverlay.addEventListener("click", closeCartDrawer);
    document.querySelectorAll(".close-drawer-action").forEach(btn => {
        btn.addEventListener("click", closeCartDrawer);
    });

    // Lightbox toggles
    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener("click", (e) => {
            if (e.target === lightboxOverlay) closeLightbox();
        });
    }

    // Search Box Dropdown Toggle
    searchToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        searchDropdown.classList.toggle("active");
        if (searchDropdown.classList.contains("active")) {
            productSearchInput.focus();
        }
    });

    // Close search dropdown on click outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-box-wrapper")) {
            searchDropdown.classList.remove("active");
        }
    });

    // Product Search Input Filter
    productSearchInput.addEventListener("keyup", (e) => {
        const query = e.target.value.toLowerCase().trim();
        filterProducts(query, getActiveCategory());

        if (query.length > 0) {
            clearSearchBtn.classList.remove("hidden");
        } else {
            clearSearchBtn.classList.add("hidden");
        }
    });

    // Clear Search Action
    clearSearchBtn.addEventListener("click", () => {
        productSearchInput.value = "";
        clearSearchBtn.classList.add("hidden");
        filterProducts("", getActiveCategory());
        productSearchInput.focus();
    });

    // Category Tabs Filter
    filterTabs.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-tab")) {
            document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
            e.target.classList.add("active");

            const category = e.target.getAttribute("data-filter");
            filterProducts(productSearchInput.value.toLowerCase().trim(), category);
        }
    });

    // Accordion FAQs toggle
    document.querySelectorAll(".faq-trigger").forEach(trigger => {
        trigger.addEventListener("click", () => {
            const faqItem = trigger.closest(".faq-item");
            const isOpen = faqItem.classList.contains("active");

            document.querySelectorAll(".faq-item").forEach(item => item.classList.remove("active"));

            if (!isOpen) {
                faqItem.classList.add("active");
                trigger.setAttribute("aria-expanded", "true");
            } else {
                trigger.setAttribute("aria-expanded", "false");
            }
        });
    });

    // Quick View Modal Close
    quickviewModalClose.addEventListener("click", closeQuickviewModal);
    quickviewModalOverlay.addEventListener("click", (e) => {
        if (e.target === quickviewModalOverlay) closeQuickviewModal();
    });

    // Checkout Modals open/close
    checkoutCartBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("Your cart is empty. Please add items to checkout.", "error");
            return;
        }

        let message = "Hi Dilan's Creative Studio! I would like to place an order:\n\n";
        let subtotal = 0;

        cart.forEach((item, index) => {
            subtotal += item.price * item.quantity;
            message += `${index + 1}. *${item.name}*\n`;
            message += `   Quantity: ${item.quantity}\n`;
            if (item.color) {
                message += `   Variant: ${item.color}\n`;
            }
            message += `   Price: ₹${item.price * item.quantity}\n`;
            const imgUrl = window.location.origin + '/' + item.image.replace(/\\\\/g, '/');
            message += `   Image: ${imgUrl}\n\n`;
        });

        message += `*Total Order Value: ₹${subtotal}*\n\n`;
        message += `Please confirm my order and let me know the payment/shipping details. Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/918237927007?text=${encodedMessage}`;

        closeCartDrawer();
        window.open(whatsappUrl, '_blank');
    });
    checkoutModalClose.addEventListener("click", closeCheckoutModal);
    checkoutModalOverlay.addEventListener("click", (e) => {
        if (e.target === checkoutModalOverlay && !checkStep3.classList.contains("active")) {
            closeCheckoutModal();
        }
    });

    // Shipping gift toggle
    giftCheckbox.addEventListener("change", (e) => {
        if (e.target.checked) {
            giftNotesGroup.classList.remove("hidden");
        } else {
            giftNotesGroup.classList.add("hidden");
            document.getElementById("gift-notes").value = "";
        }
    });

    // Checkout Flow Buttons Navigation
    cancelCheckoutBtn.addEventListener("click", () => {
        closeCheckoutModal();
        openCartDrawer();
    });

    // Shipping Submit: Step 1 -> Step 2
    shippingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        goToCheckoutStep2();
    });

    // Payment Radio button changes
    paymentRadioButtons.forEach(radio => {
        radio.addEventListener("change", (e) => {
            document.querySelectorAll(".payment-option-card").forEach(c => c.classList.remove("active"));
            e.target.closest(".payment-option-card").classList.add("active");

            const method = e.target.value;
            togglePaymentPanels(method);
            updateCheckoutTotalsSummary();
        });
    });

    // Back to Shipping: Step 2 -> Step 1
    backToShippingBtn.addEventListener("click", () => {
        goToCheckoutStep1();
    });

    // Pay & Place Order: Step 2 -> Step 3 (Success)
    placeOrderBtn.addEventListener("click", () => {
        completeOrderPlacement();
    });

    // Success Close Button
    successCloseBtn.addEventListener("click", () => {
        closeCheckoutModal();
    });

    // Newsletter Signup Form
    const newsletterForm = document.getElementById("newsletter-signup-form");
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("newsletter-email");
        const statusMsg = document.getElementById("newsletter-status");

        statusMsg.textContent = "Subscribing...";
        statusMsg.className = "newsletter-status-message";

        setTimeout(() => {
            statusMsg.textContent = `Success! Thank you for joining our circle. Check ${emailInput.value} for details.`;
            statusMsg.classList.add("success");
            emailInput.value = "";
            showToast("Successfully joined our festive newsletter circle!", "success");
        }, 1000);
    });
}

// 6. Navigation Helpers
function openMobileDrawer() {
    mobileNavDrawer.classList.add("active");
    drawerBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMobileDrawer() {
    mobileNavDrawer.classList.remove("active");
    drawerBackdrop.classList.remove("active");
    document.body.style.overflow = "";
}

function openCartDrawer() {
    cartDrawerPanel.classList.add("active");
    cartBackdropOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
    cartDrawerPanel.classList.remove("active");
    cartBackdropOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

function openQuickviewModal() {
    quickviewModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeQuickviewModal() {
    quickviewModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

function openCheckoutModal() {
    // Reset to step 1
    goToCheckoutStep1();
    checkoutModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
    checkoutModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox-overlay");
    const lightboxImg = document.getElementById("lightbox-main-img");
    if (lightbox && lightboxImg) {
        lightboxImg.src = imageSrc;
        lightbox.classList.add("active");
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox-overlay");
    if (lightbox) {
        lightbox.classList.remove("active");
    }
}

// Active Nav highlight scroll spy helper
function highlightNavLinks() {
    const sections = document.querySelectorAll("section[id], footer[id]");
    const scrollPos = window.scrollY + 100;

    sections.forEach(currSection => {
        const top = currSection.offsetTop;
        const height = currSection.offsetHeight;
        const id = currSection.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll(".nav-link").forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// Filter category helper
function getActiveCategory() {
    const activeTab = document.querySelector(".filter-tab.active");
    return activeTab ? activeTab.getAttribute("data-filter") : "all";
}

// 7. Product Catalog Rendering & Filtering
function renderProducts(productsList) {
    productsGrid.innerHTML = "";

    if (productsList.length === 0) {
        productsGrid.innerHTML = `
            <div class="grid-loading">
                <i class="fa-solid fa-wand-magic-sparkles" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 16px; opacity: 0.8;"></i>
                <p>New handmade creations are coming soon! Please stay tuned.</p>
            </div>
        `;
        return;
    }

    productsList.forEach((product, index) => {
        const card = document.createElement("div");
        card.className = "product-card reveal-element";
        card.style.transitionDelay = `${(index % 4) * 0.1}s`;

        card.innerHTML = `
            <div class="product-image-box" onclick="showProductDetails(${product.id})">
                ${product.badge ? `<span class="product-badge" data-badge="${product.badge}">${product.badge}</span>` : ''}
                <img src="${product.image.replace(/\\\\/g, '/')}" alt="${product.name}" onclick="event.stopPropagation(); openLightbox(this.src)">
                <div class="product-actions-overlay">
                    <button class="btn-quickview" onclick="event.stopPropagation(); showProductDetails(${product.id})" aria-label="Quick View"><i class="fa-solid fa-eye"></i></button>
                </div>
            </div>
            <div class="product-info-box">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title" onclick="showProductDetails(${product.id})">${product.name}</h3>
                <div class="product-price-row">
                    <span class="product-price">₹${product.price}${product.priceUnit ? ` ${product.priceUnit}` : ''}</span>
                    <button class="btn-add-cart-card" onclick="addToCart(${product.id}, 1)" aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    // Re-bind intersection observer to newly rendered dynamic product cards
    if (typeof initScrollReveal === "function") {
        initScrollReveal();
    }
}

function filterProducts(searchQuery, category) {
    let filtered = PRODUCTS;

    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    if (searchQuery !== "") {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchQuery) ||
            p.description.toLowerCase().includes(searchQuery)
        );
    }

    renderProducts(filtered);
}

// 8. Shopping Cart Operations
function loadCartFromStorage() {
    const saved = localStorage.getItem("dilans_studio_cart");
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
}

function saveCartToStorage() {
    localStorage.setItem("dilans_studio_cart", JSON.stringify(cart));
}

function addToCart(productId, quantity, color) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const selectedColor = color || (product.colors ? product.colors[0] : null);
    const selectedImage = selectedColor ? product.images[selectedColor] : product.image;

    const existingItem = cart.find(item => item.id === productId && item.color === selectedColor);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            color: selectedColor,
            name: product.name + (selectedColor ? ` (${selectedColor})` : ''),
            price: product.price,
            priceUnit: product.priceUnit,
            image: selectedImage,
            quantity: quantity
        });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`Added ${quantity} x "${product.name} (${selectedColor})" to cart!`, "success");
}

function removeFromCart(productId, color) {
    const item = cart.find(i => i.id === productId && i.color === color);
    cart = cart.filter(i => !(i.id === productId && i.color === color));
    saveCartToStorage();
    updateCartUI();
    if (item) {
        showToast(`Removed "${item.name}" from cart.`, "info");
    }
}

function updateQuantity(productId, color, delta) {
    const item = cart.find(i => i.id === productId && i.color === color);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId, color);
    } else {
        saveCartToStorage();
        updateCartUI();
    }
}

function updateCartUI() {
    // Totals count badge
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadgeCount.textContent = totalCount;
    cartTotalCountSpan.textContent = totalCount;

    if (cart.length === 0) {
        cartItemsListContainer.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your cart is empty.</p>
                <a href="#collection" class="btn btn-primary close-drawer-action" id="empty-cart-shop-btn">Shop Collection</a>
            </div>
        `;
        // Setup listener again on newly generated empty shop button
        document.getElementById("empty-cart-shop-btn").addEventListener("click", closeCartDrawer);
        cartTotalPriceVal.textContent = "₹0";
        cartDrawerFooterActions.classList.add("hidden");
    } else {
        cartDrawerFooterActions.classList.remove("hidden");
        cartItemsListContainer.innerHTML = "";

        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.price * item.quantity;

            const card = document.createElement("div");
            card.className = "cart-item";
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">₹${item.price}${item.priceUnit ? ` ${item.priceUnit}` : ''}</span>
                    <div class="cart-item-quantity-row">
                        <div class="qty-selector">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.color ? `'${item.color}'` : 'null'}, -1)"><i class="fa-solid fa-minus"></i></button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.color ? `'${item.color}'` : 'null'}, 1)"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <button class="cart-item-remove-btn" onclick="removeFromCart(${item.id}, ${item.color ? `'${item.color}'` : 'null'})">Remove</button>
                    </div>
                </div>
            `;
            cartItemsListContainer.appendChild(card);
        });

        cartTotalPriceVal.textContent = `₹${subtotal}`;
    }
}

// 9. Product Details Modal Generation
function showProductDetails(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let materialsHTML = "";
    if (product.materials && Array.isArray(product.materials)) {
        product.materials.forEach(mat => {
            materialsHTML += `<li><i class="fa-solid fa-circle-check"></i> ${mat}</li>`;
        });
    }

    let selectedColor = product.colors ? product.colors[0] : null;

    // Generate thumbnails HTML if there are multiple colors/images
    let thumbnailsHTML = "";
    if (product.colors) {
        thumbnailsHTML = `
            <div class="quickview-thumbnails">
                ${product.colors.map(col => `
                    <div class="thumbnail-item ${col === selectedColor ? 'active' : ''}" data-color="${col}">
                        <img src="${product.images[col].replace(/\\\\/g, '/')}" alt="${col}">
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Generate color buttons HTML (if not just a gallery)
    let colorSelectorHTML = "";
    if (product.colors && product.variantType !== 'gallery') {
        colorSelectorHTML = `
            <div class="color-selector-wrapper">
                <span class="color-selector-label">Select Color Option:</span>
                <div class="color-options-row">
                    ${product.colors.map(col => `
                        <button class="color-option-btn ${col === selectedColor ? 'active' : ''}" data-color="${col}">
                            ${col}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    quickviewContentWrapper.innerHTML = `
        <div class="quickview-image-panel">
            <div class="quickview-main-image-container">
                <img id="modal-main-img" src="${product.image.replace(/\\\\/g, '/')}" alt="${product.name}" onclick="openLightbox(this.src)">
            </div>
            ${thumbnailsHTML}
        </div>
        <div class="quickview-info-panel">
            <span class="product-category">${product.category}</span>
            <h2 class="quickview-title">${product.name}</h2>
            <div class="quickview-meta-row">
                <span class="quickview-price">₹${product.price}${product.priceUnit ? ` ${product.priceUnit}` : ''}</span>
            </div>
            <p class="quickview-description">${product.description}</p>
            
            ${colorSelectorHTML}

            <ul class="details-list">
                ${materialsHTML}
            </ul>
            <div class="quickview-actions">
                <div class="qty-control-wrapper">
                    <label for="modal-qty-select">Quantity</label>
                    <div class="qty-selector">
                        <button class="qty-btn" id="modal-qty-dec"><i class="fa-solid fa-minus"></i></button>
                        <span class="qty-val" id="modal-qty-val">1</span>
                        <button class="qty-btn" id="modal-qty-inc"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <button class="btn btn-primary" style="margin-top: 24px; flex-grow: 1;" id="modal-add-to-cart-btn">Add to Shopping Bag</button>
            </div>
        </div>
    `;

    // Function to switch selected color/image
    function selectColor(colorName) {
        selectedColor = colorName;

        // Update main image
        const mainImg = document.getElementById("modal-main-img");
        mainImg.src = product.images[colorName];

        // Update thumbnails active state
        document.querySelectorAll(".thumbnail-item").forEach(item => {
            if (item.getAttribute("data-color") === colorName) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        // Update color buttons active state (if they exist)
        document.querySelectorAll(".color-option-btn").forEach(btn => {
            if (btn.getAttribute("data-color") === colorName) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    // Add listeners to thumbnails and buttons
    if (product.colors) {
        document.querySelectorAll(".thumbnail-item").forEach(item => {
            item.addEventListener("click", () => {
                selectColor(item.getAttribute("data-color"));
            });
        });

        document.querySelectorAll(".color-option-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                selectColor(btn.getAttribute("data-color"));
            });
        });
    }

    // Modal Qty bindings
    let quantitySelected = 1;
    const qVal = document.getElementById("modal-qty-val");
    document.getElementById("modal-qty-dec").addEventListener("click", () => {
        if (quantitySelected > 1) {
            quantitySelected--;
            qVal.textContent = quantitySelected;
        }
    });
    document.getElementById("modal-qty-inc").addEventListener("click", () => {
        quantitySelected++;
        qVal.textContent = quantitySelected;
    });

    document.getElementById("modal-add-to-cart-btn").addEventListener("click", () => {
        addToCart(product.id, quantitySelected, selectedColor);
        closeQuickviewModal();
        openCartDrawer();
    });

    openQuickviewModal();
}

// 10. Multi-step Checkout Flow Logic
function goToCheckoutStep1() {
    checkStep1.classList.add("active");
    checkStep2.classList.remove("active");
    checkStep3.classList.remove("active");

    stepInd1.classList.add("active");
    stepInd2.classList.remove("active");
    stepInd3.classList.remove("active");
    connector1.style.backgroundColor = "var(--border-color)";
    connector2.style.backgroundColor = "var(--border-color)";
}

function goToCheckoutStep2() {
    checkStep1.classList.remove("active");
    checkStep2.classList.add("active");
    checkStep3.classList.remove("active");

    stepInd1.classList.add("active");
    stepInd2.classList.add("active");
    stepInd3.classList.remove("active");
    connector1.style.backgroundColor = "var(--primary)";
    connector2.style.backgroundColor = "var(--border-color)";

    updateCheckoutTotalsSummary();
}

function togglePaymentPanels(method) {
    upiPanel.classList.add("hidden");
    cardPanel.classList.add("hidden");
    codPanel.classList.add("hidden");

    if (method === "upi") {
        upiPanel.classList.remove("hidden");
    } else if (method === "card") {
        cardPanel.classList.remove("hidden");
    } else if (method === "cod") {
        codPanel.classList.remove("hidden");
    }
}

function updateCheckoutTotalsSummary() {
    const summaryContainer = document.getElementById("summary-items-container");
    summaryContainer.innerHTML = "";

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const row = document.createElement("div");
        row.className = "summary-item-row";
        row.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>₹${item.price * item.quantity}</span>
        `;
        summaryContainer.appendChild(row);
    });

    // Check shipping charges
    let shipping = SHIPPING_CHARGE;
    if (subtotal >= SHIPPING_THRESHOLD) {
        shipping = 0;
    }

    // Check COD charges
    let codFee = 0;
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
    if (selectedMethod === "cod") {
        codFee = COD_CHARGE;
    }

    const grandTotal = subtotal + shipping + codFee;

    document.getElementById("summary-subtotal").textContent = `₹${subtotal}`;

    if (shipping === 0) {
        document.getElementById("summary-shipping").textContent = "FREE";
    } else {
        document.getElementById("summary-shipping").textContent = `₹${shipping}`;
    }

    // Update Grand total
    document.getElementById("summary-grandtotal").textContent = `₹${grandTotal}`;

    // If COD fee applies, append to rows or show in shipping line
    if (codFee > 0) {
        const codRow = document.createElement("div");
        codRow.className = "summary-item-row";
        codRow.style.color = "var(--primary)";
        codRow.innerHTML = `
            <span>COD Convenience Fee</span>
            <span>₹${codFee}</span>
        `;
        summaryContainer.appendChild(codRow);
    }
}

function completeOrderPlacement() {
    // Validate card inputs if card method selected
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
    if (selectedMethod === "card") {
        const cardNum = document.getElementById("card-num").value.trim();
        const cardExpiry = document.getElementById("card-expiry").value.trim();
        const cardCvv = document.getElementById("card-cvv").value.trim();

        if (cardNum === "" || cardExpiry === "" || cardCvv === "") {
            showToast("Please enter credit card billing details.", "error");
            return;
        }
    }

    // Transition to Step 3
    checkStep1.classList.remove("active");
    checkStep2.classList.remove("active");
    checkStep3.classList.add("active");

    stepInd1.classList.add("active");
    stepInd2.classList.add("active");
    stepInd3.classList.add("active");
    connector1.style.backgroundColor = "var(--primary)";
    connector2.style.backgroundColor = "var(--primary)";

    // Update confirmation text fields
    const orderId = "DLST-" + Math.floor(100000 + Math.random() * 900000);
    document.getElementById("success-order-id").textContent = `#${orderId}`;

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 4); // 4 days estimate
    document.getElementById("success-delivery-date").textContent = deliveryDate.toLocaleDateString("en-US", dateOptions);

    const name = document.getElementById("cust-name").value;
    document.getElementById("success-cust-name").textContent = name;

    // Reset shopping cart state
    cart = [];
    saveCartToStorage();
    updateCartUI();
    showToast(`Order successfully placed! ID: #${orderId}`, "success");
}

// 11. Custom Notification Toasts System
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let icon = '<i class="fa-solid fa-circle-check"></i>';
    if (type === "error") {
        icon = '<i class="fa-solid fa-circle-exclamation"></i>';
    } else if (type === "info") {
        icon = '<i class="fa-solid fa-circle-info"></i>';
    }

    toast.innerHTML = `
        ${icon}
        <span>${message}</span>
    `;
    container.appendChild(toast);

    // Fade out and remove toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px) scale(0.9)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// 12. Interactive Gold Sparkles Particle System in Hero Section
function initHeroParticles() {
    const canvas = document.getElementById("hero-particles-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const maxParticles = 60;

    // Handle resize
    window.addEventListener("resize", () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    });

    class GoldParticle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 50;
            this.size = Math.random() * 2 + 1;
            this.speedY = -(Math.random() * 0.7 + 0.3);
            this.speedX = Math.random() * 0.4 - 0.2;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.fadeSpeed = Math.random() * 0.005 + 0.002;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.opacity -= this.fadeSpeed;

            if (this.opacity <= 0 || this.y < 0 || this.x < 0 || this.x > width) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
            ctx.shadowBlur = this.size * 2;
            ctx.shadowColor = "rgba(212, 175, 55, 0.8)";
            ctx.fill();
        }
    }

    for (let i = 0; i < maxParticles; i++) {
        particles.push(new GoldParticle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.shadowBlur = 0; // reset for performance
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}

// 13. Intersection Observer Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal-element");

    const observerOptions = {
        root: null, // viewport
        threshold: 0.05, // trigger when 5% visible
        rootMargin: "0px 0px -40px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target); // trigger animation only once
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });
}

// 14. Lightbox Zoom Functionality
document.addEventListener("DOMContentLoaded", () => {
    const lightboxImg = document.getElementById("lightbox-main-img");
    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
    const lightboxOverlay = document.getElementById("lightbox-overlay");

    let isZoomed = false;

    if (lightboxImg) {
        lightboxImg.style.transition = "transform 0.3s ease";
        lightboxImg.style.cursor = "zoom-in";

        lightboxImg.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent closing lightbox on click
            if (!isZoomed) {
                // Calculate click position for transform origin
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;

                lightboxImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                lightboxImg.style.transform = "scale(2.5)";
                lightboxImg.style.cursor = "zoom-out";
                isZoomed = true;
            } else {
                resetZoom();
            }
        });

        // Add pan effect when zoomed in
        lightboxImg.addEventListener("mousemove", (e) => {
            if (isZoomed) {
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;
                lightboxImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
            }
        });
    }

    function resetZoom() {
        if (lightboxImg) {
            lightboxImg.style.transform = "scale(1)";
            lightboxImg.style.cursor = "zoom-in";
            isZoomed = false;
        }
    }

    if (lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            resetZoom();
            closeLightbox();
        });
    }

    if (lightboxOverlay) {
        lightboxOverlay.addEventListener("click", (e) => {
            if (e.target === lightboxOverlay) {
                resetZoom();
                closeLightbox();
            }
        });
    }
});
