// Cart functionality
const cart = [];

// Add to Cart Function
document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.name;
    const productPrice = parseFloat(button.dataset.price);

    // Check if item already exists in the cart
    const existingItem = cart.find((item) => item.name === productName);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    alert(`${productName} added to cart!`);
    console.log(cart); // Debugging: View cart in console
  });
});


// Add to Cart Function
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.name === name);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  }
  
  // Attach to Add to Cart Buttons
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      addToCart(name, price);
    });
  });
  

  // Select the search box
const searchBox = document.getElementById("search-box");

// Search function
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase(); // Get the query in lowercase

  // Select all product names in the coffee and brewing sections
  const items = document.querySelectorAll(".box h3");

  items.forEach((item) => {
    const itemName = item.textContent.toLowerCase(); // Convert item name to lowercase
    const parentBox = item.closest(".box"); // Find the parent box element

    // Show or hide items based on the query
    if (itemName.includes(query)) {
      parentBox.style.display = "block"; // Show the item
    } else {
      parentBox.style.display = "none"; // Hide the item
    }
  });
});


// Elements
const searchIcon = document.getElementById("search-icon");
const searchPopup = document.getElementById("search-popup");
const closeSearch = document.getElementById("close-search");

// Show the search popup
searchIcon.addEventListener("click", () => {
  searchPopup.style.display = "flex"; // Show the popup
});

// Close the search popup
closeSearch.addEventListener("click", () => {
  searchPopup.style.display = "none"; // Hide the popup
});

// Close the popup if clicking outside the form
searchPopup.addEventListener("click", (e) => {
  if (e.target === searchPopup) {
    searchPopup.style.display = "none";
  }
});
