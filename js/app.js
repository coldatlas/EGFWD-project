// linking the section elements

const sections = document.querySelectorAll("section");

// linking the navbar
let ul = document.querySelector("ul");

// adding li items automatically to navbar
sections.forEach(section => {
    let li = document.createElement("li");            //create li
    let anchor = document.createElement("a");         //create a
    anchor.setAttribute("href", "#" + section.id);    //add href attribute to a
    anchor.innerText = "Section " + section.id[7];    //add text to a
    anchor.classList.add("menu__link");               //add css class to a
    anchor.addEventListener('click', (event) => {

        //clears address id link
        event.preventDefault();
        
        //scroll to the specific section smoothly
        section.scrollIntoView({
            behavior: 'smooth',
        });
    });

    ul.appendChild(li).appendChild(anchor);           //add li and a to the ul
});

const links = document.querySelectorAll("a");

// function that hides navbar
function hideNav() {
    document.querySelector("header").style.opacity = 0;
}

// adding and removing active classes to/from sections when scrolling
window.onscroll = () => {
    document.querySelector("header").style.opacity = 1;  // the navbar reappears
    sections.forEach((section) => {
      let location = section.getBoundingClientRect();
      if (location.top >= -200 && location.bottom <= window.innerHeight + (window.innerHeight/2) ) {
        section.classList.add("your-active-section");
        links.forEach((link) => {
            link.innerText[8] == section.id[7] ? link.classList.add("active__link") : link.classList.remove("active__link"); //add/remove active class to nav links
        })   
    } else {
      section.classList.remove("your-active-section")
    }
    });  

    // remove navbar when not scrolling for 2 seconds
    setTimeout(hideNav, 2000);
    
};

// remove navbar when not moving cursor for 2 seconds
onmousemove = () => { document.querySelector("header").style.opacity = 1;
setTimeout(hideNav, 2000);
};