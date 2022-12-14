import img from './img/eiliv-aceron-uBigm8w_MpA-unsplash.jpg';

function menu() {
  const menu = document.createElement('menu');
  menu.classList.add('menu');

  const div = document.createElement('div');
  div.textContent = 'Today\'s Menu';
  menu.appendChild(div)

  const burgers = document.createElement('div');

  const imgHolder = document.createElement('div');

  const myImage = new Image();
  myImage.src = img;
  
  menu.appendChild(imgHolder)


  burgers.appendChild(createMenu('Galaxy Beef Burger', 'Beef Patty, Onions, Tomatoes, pickles, Lettuce, Ketchup, Mayo, Mustard'));
  burgers.appendChild(createMenu('Chicken Burger', 'Crispy Chicken, Chedder Cheese, Grilled Onion & Tomatoes, Lettuce, Pickles, Garlic Sauce, Mayo, Chipotle Sauce'));
  burgers.appendChild(createMenu('Celestial Special Burger', 'Beef Patty. Cream of Mushroom, Mozza Cheeze, Grilled Onions, Mayo'));
  burgers.appendChild(createMenu('Hot Doritos Burger', 'Crispy Chicken, Mozza Cheeze, Doritos, Grilled Onion & Tomatoes, Lettuce, Garlic Sauce, Buffalo Sauce. Mayo'));

  menu.appendChild(burgers)
  
  return menu;
}

function createMenu(name, ingredients) {
  const menu = document.createElement('div');
  menu.classList.add('menulist');

  const menuName = document.createElement('div');
  menuName.textContent = name;

  const ing = document.createElement('div');
  ing.textContent = ingredients;

  menu.appendChild(menuName);
  menu.appendChild(ing);

  return menu;
}

export { menu };