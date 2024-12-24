const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const sliderControls = document.querySelector(".slider-controls");
const sliderTabs = sliderControls.querySelectorAll(".slider-tab");
const sliderIndicator = sliderControls.querySelector(".slider-indicator");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

/* Initializing Swiper */
let Swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Event 

// Update the indicator
const updateIndicator = (tab, index) => {
  document.querySelector(".slider-tab.current")?.classList.remove("current");
  tab.classList.add("current");

  sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
  sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;

  // Calculate the scroll position and scroll smoothly
  const scrollLeft = sliderTabs[index].offsetLeft - sliderControls.offsetWidth / 2 + sliderTabs[index].offsetWidth / 2;
  sliderControls.scrollTo({ left: scrollLeft, behavior: "smooth" });
}

// Initialize swiper instance
const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 1300,
  autoplay: { delay: 4000 },
  navigation: {
    prevEl: "#slide-prev",
    nextEl: "#slide-next",
  },
  on: {
    // Update indicator on slide change
    slideChange: () => {
      const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex]);
      updateIndicator(sliderTabs[swiper.activeIndex], currentTabIndex);
    },
    reachEnd: () => swiper.autoplay.stop(),
  },
});

// Update the slide on tab click
sliderTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    swiper.slideTo(index);
    updateIndicator(tab, index);
  });
});

updateIndicator(sliderTabs[0], 0);
window.addEventListener("resize", () => updateIndicator(sliderTabs[swiper.activeIndex], 0));



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
  
