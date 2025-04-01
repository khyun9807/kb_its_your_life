import {
  calculateTotal as calc,
  isTopMenu as isTop,
} from './orderProcessor.js';

import { orders } from './orderList.js';

let res = calc(orders);
console.log(res);

console.log(isTop(res, '목살'));
