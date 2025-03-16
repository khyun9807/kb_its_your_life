import { meatList, addOrder } from './orderManager.js';

addOrder('삼겹살', 3);
addOrder('목살', 2);

let showOrder = () => {
  let str = '❌ 주문 내역이 없습니다.';
  if (meatList.length > 0) {
    str = '';
    str += '✅ 현재 주문 내역:\n';
    for (let i = 0; i < meatList.length; i++) {
      let meat = meatList[i];
      str += meat.name + ': ' + meat.quant + '인분\n';
    }
  }

  return str;
};

let resultstr = showOrder();
console.log(resultstr);
