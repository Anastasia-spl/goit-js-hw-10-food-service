const menuListRef = document.querySelector('.js-menu');
import menuTemplate from '../templates/menu-list.hbs';
import menuListArray from '../menu.json';

const menuMarkUp = menuTemplate(menuListArray);
menuListRef.insertAdjacentHTML('beforeend', menuMarkUp);
