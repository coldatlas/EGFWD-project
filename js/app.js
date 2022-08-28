// linking the section elements

const sections = document.querySelectorAll("section");

// linking the navbar
let ul = document.querySelector("ul");

// adding li items automatically to navbar
sections.forEach(section => {
    var li = document.createElement("li");            //create li
    var anchor = document.createElement("a");         //create a
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


// function that hides navbar
function hideNav() {
    document.querySelector("header").style.opacity = 0;
}

// adding and removing active classes to/from sections when scrolling
window.onscroll = () => {
    document.querySelector("header").style.opacity = 1;  // the navbar reappears
    sections.forEach((section) => {
      var location = section.getBoundingClientRect();
      if (location.top >= 0 && location.left >= 0 && location.bottom <= window.innerHeight && location.right <= window.innerWidth) {
        section.classList.add("your-active-section");    
    } else {
      section.classList.remove("your-active-section")
    }
    });  

    // remove navbar when not scrolling for 2 seconds
    const timer = setTimeout(hideNav, 2000);
    
};

// remove navbar when not moving cursor for 2 seconds
onmousemove = (event) => { document.querySelector("header").style.opacity = 1;
const timer = setTimeout(hideNav, 2000);
};