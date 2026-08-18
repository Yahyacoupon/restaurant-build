import "./styles.css"
import { homeRender } from "./utils/home.js";
import { renderDishes } from "./utils/dishes.js";
import { contactRender } from "./utils/contact.js";

const buttons = document.querySelectorAll('.nav_button');
const content = document.querySelector('#content');

homeRender();

buttons.forEach(button => {
  
  button.addEventListener('click', (e)=> {

    console.log(button.id);

    buttons.forEach(el => el.classList.remove('active'));

    button.classList.add('active');

    if(button.id === "home") {
      content.innerHTML = '';
      homeRender();
    } else if (button.id === "menu") {
      content.innerHTML = '';
      renderDishes();
    } else if (button.id === "contact") {
      content.innerHTML = '';
      contactRender();
    };
  });

});

