import { orders } from './orderList.js';
import {
  calculateTotal as calc,
  isTopMenu as isTop,
} from './orderProcessor.js';

// let retClosureFunc = calc(orders);
// let retObj = retClosureFunc();
let retObj = calc(orders);

console.log(`✅ 총 주문 수량: ${JSON.stringify(retObj)}`);
let retBool = isTop(retObj, '삼겹살');
console.log(`🥩 삼겹살이 가장 인기 메뉴인가요? ${retBool ? '예' : '아니오'}!`);
