import { orderList, addOrder } from './orderManager.js';

addOrder('삼겹살', 3);
addOrder('목살', 2);

console.log('current orders');
orderList.forEach((arg) => {
  console.log(`${arg.menu}: ${arg.quantity}s`);
});
