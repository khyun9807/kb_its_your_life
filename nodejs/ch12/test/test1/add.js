import { meatList } from './order.js';

let str = '❌ 삼겹살 주문 내역이 없습니다.';
for (let i = 0; i < meatList.length; i++) {
  let meat = meatList[i];
  if (meat.name == '삼겹살') {
    str = '✅ ' + meat.name + ' 주문 수량 : ' + meat.quant + '인분';
    break;
  }
}

console.log(str);
