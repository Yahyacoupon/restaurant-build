import heroImg from "../../images/hero-img.png";
import bgSvg  from "../../images/bg-svg.svg";
import { footerItem } from "./footer.js";

const content = document.querySelector('#content');
const footerContent = footerItem('Talk to us');

export const homeRender = () => {
  const main = document.createElement('main');

  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero-section');

  //Hero section elements
  const h1 = document.createElement('h1');
  h1.classList.add('hero-title');
  const img = document.createElement('img');
  img.classList.add('hero-img');
  const span = document.createElement('span');
  span.classList.add('caption');
  const p1 = document.createElement('p');
  p1.classList.add('hero-title');

  //about section
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about-section');

  //about seciton items
  const svgImage = document.createElement('img');
  svgImage.classList.add('svg-bg');
  svgImage.src = `${bgSvg}`;

  h1.textContent = "Dishes you crave, brought closer to your door step.";
  img.src = `${heroImg}`;
  img.alt = "Dish with tomatoes";

  span.textContent = "About us";
  p1.textContent = "We are a fruits and veggies restaurant offering fresh foods, juice and fruits.";

  //inserting elements in dom
  heroDiv.insertAdjacentElement('afterbegin', h1);
  h1.insertAdjacentElement('afterend', img);

  aboutDiv.insertAdjacentElement('afterbegin', svgImage);
  svgImage.insertAdjacentElement('afterend', p1)

  main.appendChild(heroDiv);
  heroDiv.insertAdjacentElement('afterend', aboutDiv);
  aboutDiv.insertAdjacentElement('afterend', footerItem());

  content.appendChild(main);
};