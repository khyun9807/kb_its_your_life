import { menus } from './menu.js';
import { filterMenuByPrice } from './menuFilter.js';

async function showAffordableMenu() {
  let result = await filterMenuByPrice(menus, 16000);
  console.log(result);
}

showAffordableMenu();
