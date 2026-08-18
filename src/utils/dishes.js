import Lemonade from "../../images/lemon-mint.png";
import Juice from "../../images/juice.png";
import Dumplings from "../../images/dumplings.png";
import Texture from "../../images/texture-dishes.svg";
import { footerItem } from "./footer.js";

const products = [
  {
    name: 'Lemonade',
    image: `${Lemonade}`,
    description: `A lemonade drink made for fresh cravers`,
    priceCents: 1900
  },
  {
    name: 'Dumplings',
    image: `${Dumplings}`,
    description: `Handmade dumplings out of wheat and floor, machine baked`,
    priceCents: 1200
  },
  {
    name: 'Juice TO',
    image: `${Juice}`,
    description: `Juice brewied for mint lovers and cravers`,
    priceCents: 1900
  },
];

const content = document.querySelector('#content');

export function renderDishes() {
  const main = document.createElement('main');

  const divHero = document.createElement('div');
  divHero.classList.add('hero-section');
  const h1 = document.createElement('h1');
  h1.classList.add('hero-title');
  h1.textContent = 'Our Catalogue';
  divHero.appendChild(h1);

  //bg textture for the site
  const bgTexture = document.createElement('img');
  bgTexture.src = `${Texture}`;
  bgTexture.classList.add('dishes-bg');

  const list = document.createElement('ul');

  products.forEach(product => {

    const  {name, image, description, priceCents} = product;

    const item = document.createElement('li');
    item.classList.add('item');
    const img = document.createElement('img');
    img.classList.add('card-img')
    img.src = `${image}`;
    const h3 = document.createElement('h3');
    h3.textContent = `${name}`;
    const p = document.createElement('p');
    p.textContent = `${description}`;

    item.appendChild(img);
    img.insertAdjacentElement('afterend', h3);
    h3.insertAdjacentElement('afterend', p);

    list.appendChild(item);
  });

  list.appendChild(bgTexture);
  main.appendChild(divHero);
  main.appendChild(list);
  main.appendChild(footerItem('Talk to the team', 'footer_button_v2'));

  content.appendChild(main);
}