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
console.log(sections);
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
//






//
const callbackObserverFunction = i =>{
    if(i[0].isIntersecting){
        i[0].target.classList.add("your-active-section");
    }else{
        i[0].target.classList.remove("your-active-section");
    }
}
//


//
const options = {
    root: null,
    rootMargin: '1px',
    threshold: 0.40
}
//


//
window.addEventListener('scroll', function(){
    sections.forEach(i =>{
        new IntersectionObserver(callbackObserverFunction, options).observe(i);
    });
});
//
