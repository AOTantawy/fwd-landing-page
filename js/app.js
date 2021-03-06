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
  linkElement.href = "#" + linkReference;
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

function whichSectionCurrentlyViewed() {
  currentSection = sectionElements[sectionElements.length - 1];
  for (const element of sectionElements) {
    elementBound = element.getBoundingClientRect();
    if (elementBound.y >= 0) {
      currentSection = element;
      break;
    }
  }
  return currentSection.id;
}

function removeAllActiveSections() {
  for (const element of sectionElements) {
    element.classList.remove("your-active-class");
  }
}

function addCurrentActiveSectionById(sectionId) {
  for (const element of sectionElements) {
    if (element.id == sectionId) {
      element.classList.add("your-active-class");
    }
  }
}

function addViewedSectionListner() {
  document.onscroll = function (e) {
    const currentActiveId = whichSectionCurrentlyViewed();
    removeAllActiveSections();
    addCurrentActiveSectionById(currentActiveId);
  };
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
buildNavigation();

// Add class 'active' to section when near top of viewport
addViewedSectionListner();

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
