// Subscription CTA Buttons
document.querySelectorAll(".cta-btn").forEach((button) => {
    button.addEventListener("click", () => {
      alert("Thank you for your interest! Subscription details will be sent to your email.");
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
