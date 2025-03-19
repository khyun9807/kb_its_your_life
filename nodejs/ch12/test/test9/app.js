import { filterMenuByPrice, menus } from './menuFilter.js';

async function showAffordableMenu() {
  let arr = await filterMenuByPrice(menus, 18000);

  console.log('✅ 선택 가능한 메뉴:');
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    console.log(`${obj.name} : ${obj.price}`);
  }
}
