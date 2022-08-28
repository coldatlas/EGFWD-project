// linking the section elements

const sections = document.querySelectorAll("section");

// linking the navbar
let ul = document.querySelector("ul");

// adding li items automatically to navbar
sections.forEach(section => {
    var li = document.createElement("li");            //create li
    var anchor = document.createElement("a");         //create a
    anchor.setAttribute("href", "#" + section.id);    //add href attribute to ad
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

// adding and removing active classes to/from sections when scrolling
window.onscroll = () => {
    sections.forEach((section) => {
      var location = section.getBoundingClientRect();
      if (location.top >= 0 && location.left >= 0 && location.bottom <= window.innerHeight && location.right <= window.innerWidth) {
        section.classList.add("your-active-section");    
    } else {
      section.classList.remove("your-active-section")
    }
    });  
    
};