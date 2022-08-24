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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//const sections = document.querySelectorAll('section');

const sections = document.querySelectorAll('section');
const ul = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();
sections.forEach(function (section) {
    const sectionId = section.id;
    const sectionTitle = section.dataset.nav;
    //li & a creation
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#'+sectionId; // "#"+ section Id;
    link.textContent = sectionTitle;
    link.classList.add('menu__link');
    link.addEventListener('click', (e) => {
        e.preventDefault();
        section.scrollIntoView({
            behavior: 'smooth',
        });
    });
    li.appendChild(link);
    fragment.appendChild(li);
});
ul.appendChild(fragment);

// build the nav


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
