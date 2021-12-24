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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const navItems = document.getElementById("navbar__list");
const [...sections] = document.getElementsByTagName("section");



/**
* @description build the nav
*/


function createList() {
  for (const section of sections) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`
    navItems.appendChild(listItem);
  }
}

createList();



/**
* @description Scroll to section on link click
*/

navItems.addEventListener("click",
  (toSection) => {
    toSection.preventDefault();
    if (toSection.target.dataset.nav) {
      document.getElementById(`${toSection.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });
      setTimeout(
        () => {
          location.hash = `${toSection.target.dataset.nav}`;
        }, 200);
    }
  });


/**
* @description Add class 'active' to section when near top of viewport
*/

window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
    }
    else {
      active.classList.remove("your-active-class");
    }
  });
};
