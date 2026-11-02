// =====================================
// 1. ACCORDION FUNCTIONALITY
// =====================================

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(function(button) {

button.addEventListener("click", function() {

    const detailsId = button.getAttribute("aria-controls");

    const details = document.getElementById(detailsId);

    if (!details) {
        console.error("Accordion content not found:", detailsId);
        return;
    }

    const detailsAreHidden = details.hidden;

    details.hidden = !detailsAreHidden;

    button.setAttribute("aria-expanded", String(detailsAreHidden));

    if (detailsAreHidden) {

        button.textContent = "Hide device details";

    } else {

        button.textContent = "Show device details";

    }

});


});

// =====================================
// 2. INTERACTIVE TABS
// =====================================

const tabButtons = document.querySelectorAll(".tab-button");

const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(function(button) {


button.addEventListener("click", function() {

    tabButtons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    tabPanels.forEach(function(panel) {
        panel.hidden = true;
    });

    button.classList.add("active");

    const selectedTab = button.getAttribute("data-tab");

    const selectedPanel = document.getElementById(selectedTab);

    if (selectedPanel) {
        selectedPanel.hidden = false;
    }

});


});

// =====================================
// 3. IMAGE GALLERY / LIGHTBOX
// =====================================

// Create the lightbox
const lightbox = document.createElement("dialog");

lightbox.className = "image-lightbox";
lightbox.id = "image-lightbox";

// Create the close button
const closeButton = document.createElement("button");

closeButton.textContent = "Close";
closeButton.className = "lightbox-close";

closeButton.addEventListener("click", function() {
    lightbox.close();
});

// Create the enlarged image
const enlargedImage = document.createElement("img");

enlargedImage.alt = "Enlarged product image";

// Add elements to the lightbox
lightbox.appendChild(closeButton);
lightbox.appendChild(enlargedImage);

// Add lightbox to the page
document.body.appendChild(lightbox);


// Find all product images
const productImages = document.querySelectorAll(
    ".product img, .products img"
);


// Open image when clicked
productImages.forEach(function(image) {

    image.addEventListener("click", function() {

        enlargedImage.src = image.src;
        enlargedImage.alt = image.alt;

        lightbox.showModal();

    });

});

// =====================================
// 4. DYNAMIC CONTENT
// =====================================

const welcomeButton = document.getElementById("welcome-button");

const welcomeMessage = document.getElementById("welcome-message");

if (welcomeButton && welcomeMessage) {

    welcomeButton.addEventListener("click", function() {

        welcomeMessage.textContent =
            "Welcome to REDMAGIC! Explore our powerful gaming devices and discover the technology behind them.";

    });

}

// =====================================
// 5. PRODUCT SEARCH AND FILTER
// =====================================

const searchInput = document.getElementById("product-search");

const searchButton = document.getElementById("search-button");

const searchMessage = document.getElementById("search-message");

if (searchInput && searchButton && searchMessage) {

    const products = document.querySelectorAll(".services-card");

    function searchProducts() {

        const searchValue = searchInput.value.toLowerCase();

        let productsFound = 0;

        products.forEach(function(product) {

            const productName = product.textContent.toLowerCase();

            if (productName.includes(searchValue)) {

                product.style.display = "";

                productsFound++;

            } else {

                product.style.display = "none";

            }

        });

        if (productsFound === 0) {

            searchMessage.textContent = "No matching products found.";

        } else {

            searchMessage.textContent =
                productsFound + " product(s) found.";

        }

    }

    searchButton.addEventListener("click", searchProducts);

    searchInput.addEventListener("input", searchProducts);

}

// =====================================
// 6. GOOGLE MAP INTEGRATION
// =====================================

// GOOGLE MAP INTEGRATION

const showMapButton = document.getElementById("show-map");

const mapContainer = document.getElementById("map-container");

if (showMapButton && mapContainer) {

    showMapButton.addEventListener("click", function() {

        mapContainer.hidden = !mapContainer.hidden;

        if (mapContainer.hidden) {

            showMapButton.textContent = "Show Location";

        } else {

            showMapButton.textContent = "Hide Location";

        }

    });

} else {

    console.error("Map button or map container not found!");

}