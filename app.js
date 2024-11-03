// Object to map buttons to their content
const aboutUsSections = {
  storyBtn: "storyContent",
  missionBtn: "missionContent",
  vissionBtn: "vissionContent",
};

// Function to hide all content and remove active class from buttons
function resetAboutUsSections() {
  for (let btnId in aboutUsSections) {
    if (aboutUsSections.hasOwnProperty(btnId)) {
      document.getElementById(aboutUsSections[btnId]).style.display = "none";
      document.getElementById(btnId).classList.remove("activeBtn");
    }
  }
}

// Function to show selected content and add active class to the selected button
function showAboutUsSection(selectedBtnId) {
  resetAboutUsSections(); //reset all sections
  const selectedContentId = aboutUsSections[selectedBtnId];
  document.getElementById(selectedContentId).style.display = "block";
  document.getElementById(selectedBtnId).classList.add("activeBtn");
}

// Event listeners for each button
for (let btnId in aboutUsSections) {
  if (aboutUsSections.hasOwnProperty(btnId)) {
    document.getElementById(btnId).addEventListener("click", function () {
      showAboutUsSection(btnId);
    });
  }
}

// mob versiis nav menu
document.addEventListener("DOMContentLoaded", function () {
  const mobUlBtn = document.querySelector(".mobUlBtn");
  const navUl = document.querySelector("nav ul");
  const body = document.body; // Get the body element
  const allA = document.querySelectorAll("nav ul li a");
  const dropdownMobile = this.querySelector(".pagesDropdownMobile");

  // Toggle nav menu on mobUlBtn click
  mobUlBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    navUl.classList.toggle("active");
    dropdownMobile.style.display = "none";
    // Check if the menu is active and disable scrolling on the body
    if (this.classList.contains("active")) {
      body.style.overflow = "hidden"; // Disable scrolling
    } else {
      body.style.overflow = ""; // Re-enable scrolling
    }
  });

  // Add click event listener to each link in the navigation menu
  allA.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Use a simple check to see if the click is within the 'Pages' item or its dropdown
      let isPagesLinkOrDropdown = event.target.closest(".pagesLi") != null;

      // If the click is not on the 'Pages' link or within its dropdown, close the nav
      if (!isPagesLinkOrDropdown) {
        mobUlBtn.classList.remove("active");
        navUl.classList.remove("active");
        body.style.overflow = ""; // Re-enable scrolling
      }
      // If the click is on the 'Pages' link or within its dropdown, do nothing
    });
  });

  // Add click event specifically for links inside .pagesDropdownMobile
  document.querySelectorAll(".pagesDropdownMobile a").forEach(function (link) {
    link.addEventListener("click", function () {
      // Close the navigation menu
      mobUlBtn.classList.remove("active");
      navUl.classList.remove("active");
      body.style.overflow = ""; // Re-enable scrolling
    });
  });
});

document.querySelector(".pagesLi").addEventListener("click", function () {
  let dropdownMobile = this.querySelector(".pagesDropdownMobile");

  // Check if the display property is not set or is 'none'
  if (
    (!dropdownMobile.style.display ||
      dropdownMobile.style.display === "none") &&
    window.innerWidth < 768
  ) {
    dropdownMobile.style.display = "flex"; // Show the dropdownMobile
  } else {
    if (window.innerWidth < 768) {
      dropdownMobile.style.display = "none"; // Hide the dropdown
    }
  }
});

