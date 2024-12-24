// Fetch cart from local storage or initialize
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Select elements
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Update Cart Display
function updateCart() {
  cartItemsContainer.innerHTML = ""; // Clear existing items
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = (item.price * item.quantity).toFixed(2);
    total += parseFloat(itemTotal);

    const row = `
      <tr>
        <td>${item.name}</td>
        <td>AED${item.price.toFixed(2)}</td>
        <td>
          <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">-</button>
          ${item.quantity}
          <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
        </td>
        <td>AED${itemTotal}</td>
        <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
      </tr>
    `;
    cartItemsContainer.insertAdjacentHTML("beforeend", row);
  });

  cartTotal.innerText = `AED${total.toFixed(2)}`;
  saveCart();
}

// Change Quantity
function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) cart[index].quantity = 1; // Prevent quantity < 1
  updateCart();
}

// Remove Item
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Save Cart to Local Storage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Initial Cart Update
updateCart();


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
  