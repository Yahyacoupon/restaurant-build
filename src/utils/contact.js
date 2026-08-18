import { footerItem } from "./footer.js";

const content = document.querySelector('#content');

export const contactRender = () => {
  
  const main = document.createElement('main');
  //create the contact page details
  const divHero = document.createElement('div');
  divHero.classList.add('hero-section');
  const h1 = document.createElement('h1');
  h1.classList.add('hero-title');
  h1.textContent = 'Contact us';
  divHero.appendChild(h1);

  const contactSection = document.createElement('div');
  contactSection.classList.add('section-contact');

  const card = document.createElement('div');
  card.classList.add('contact-card')
  const h3 = document.createElement('h3');
  h3.textContent = "Dare-el-salam";
  const span = document.createElement('span');
  const span2 = document.createElement('span');
  span.textContent = "3:00 - 4:00";
  span2.textContent = "5:00 - 6:00";

  card.appendChild(h3);
  card.appendChild(span);
  card.appendChild(span2);

  contactSection.appendChild(card);
  main.appendChild(divHero);
  main.appendChild(contactSection);
  main.appendChild(footerItem('Talk to us', 'footer_button_v2'));

  content.appendChild(main)
}