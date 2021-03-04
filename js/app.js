/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const sectionElements = document.querySelectorAll("section");
const navigationList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function addLinkElement(linkName, linkReference) {
  const linkElement = document.createElement("a");
  linkElement.setAttribute("alt", linkName);
  linkElement.setAttribute("class", "menu__link");
  linkElement.textContent = linkName;
  linkElement.href = "#"+linkReference;
  return linkElement;
}

function addNavigationElement(navData, navId) {
  const navigationElement = document.createElement("li");
  const navigationLinkElement = addLinkElement(navData, navId);
  navigationElement.appendChild(navigationLinkElement);
  return navigationElement;
}

function getAllNavElements() {
  let allNavigationElements = [];
  sectionElements.forEach((element) => {
    const navigationElement = addNavigationElement(
      element.dataset.nav,
      element.id
    );
    allNavigationElements.push(navigationElement);
  });
  return allNavigationElements;
}

function buildNavigation() {
  allNavigationElements = getAllNavElements();
  allNavigationElements.forEach((element) => {
    navigationList.appendChild(element);
  });
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
buildNavigation();

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
