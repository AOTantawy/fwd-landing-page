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

// the below helper funtions for building navigation (links)
const addLinkElement = (linkName, linkReference) => {
  const linkElement = document.createElement("a");
  linkElement.setAttribute("alt", linkName);
  linkElement.setAttribute("class", "menu__link");
  linkElement.textContent = linkName;
  linkElement.href = "#" + linkReference;
  return linkElement;
};

const addNavigationElement = (navData, navId) => {
  const navigationElement = document.createElement("li");
  const navigationLinkElement = addLinkElement(navData, navId);
  navigationElement.appendChild(navigationLinkElement);
  return navigationElement;
};

const getAllNavElements = () => {
  let allNavigationElements = [];
  sectionElements.forEach((element) => {
    const navigationElement = addNavigationElement(
      element.dataset.nav,
      element.id
    );
    allNavigationElements.push(navigationElement);
  });
  return allNavigationElements;
};

// the below helper function for getting active section
const whichSectionCurrentlyViewed = () => {
  currentSection = sectionElements[sectionElements.length - 1];
  for (const element of sectionElements) {
    elementBound = element.getBoundingClientRect();
    // get the first viewed element
    if (elementBound.y >= 0) {
      currentSection = element;
      break;
    }
  }
  return currentSection.id;
};

// the below helper function for scrolling to the targeted element
const getSectionPositionById = (sectionId) => {
  const sectionElement = document.querySelector(sectionId);
  return (
    sectionElement.offsetHeight + sectionElement.offsetTop - window.innerHeight // to get offset of the top when the section bottom touch window bottom
  );
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildNavigation = () => {
  allNavigationElements = getAllNavElements();
  allNavigationElements.forEach((element) => {
    navigationList.appendChild(element);
  });
};

// Add class 'active' to section when near top of viewport
const addCurrentActiveSectionById = (sectionId) => {
  sectionElements.forEach((element) => {
    if (element.id === sectionId) {
      element.classList.add("your-active-class");
    }
  });
};

const removeAllActiveSections = () => {
  sectionElements.forEach((element) => {
    element.classList.remove("your-active-class");
  });
};

// Scroll to anchor ID using scrollTO event
const scrollToSection = (positionY) => {
  window.scrollTo({
    top: positionY,
    behavior: "smooth",
  });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNavigation();

// Scroll to section on link click
document.querySelectorAll(".menu__link").forEach((link) => {
  link.onclick = (e) => {
    linkTextContent = e.target.textContent;
    linkTextContent = "#" + linkTextContent.split(" ").join("").toLowerCase();
    sectionPositionY = getSectionPositionById(linkTextContent);
    scrollToSection(sectionPositionY);
    e.preventDefault();
  };
});

// Set sections as active
document.onscroll = (e) => {
  const currentActiveId = whichSectionCurrentlyViewed();
  removeAllActiveSections();
  addCurrentActiveSectionById(currentActiveId);
};
