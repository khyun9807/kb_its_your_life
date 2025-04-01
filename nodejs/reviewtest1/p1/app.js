import { orders } from './order.js';

console.log(orders);

let res = orders.find((order) => {
  return order.name === '삼겹살';
});

console.log(res);
