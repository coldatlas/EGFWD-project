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

// build the nav
const sections = document.querySelectorAll('section');
const ul = document.getElementById('navbar__list');
const fragments = document.createDocumentFragment();
sections.forEach(function (section) {
    const sectionId = section.id;
    const sectionTitle = section.dataset.nav;
    //li & a creation
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#'+sectionId; // "#"+ section Id;
    link.textContent = sectionTitle;
    link.classList.add('menu__link');
    // Scroll to section on link click
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Scroll to anchor ID using scrollTO event
        section.scrollIntoView({
            behavior: 'smooth',
        });
        
    });
    li.appendChild(link);
    fragments.appendChild(li);
});
ul.appendChild(fragments);

const callbackObserverFunction = entries =>{
    // Add class 'active' to section when near top of viewport
    const activeLink = document.querySelector('a[href="#${entries[0].target.id}"]');
    // Set sections as active
    if(entries[0].isIntersecting){
        entries[0].target.classList.add("your-active-section");
    }else{
        entries[0].target.classList.remove("your-active-section");
        activeLink.classList.remove('active');
    }
}
const options = {
    root: null,
    rootMargin: '1px',
    threshold: 0.40
}
const observer = new IntersectionObserver(callbackObserverFunction, options);
window.addEventListener('scroll', function(){
    sections.forEach(section =>{
        observer.observe(section);
    });
});