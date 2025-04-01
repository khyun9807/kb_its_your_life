import { processOrder } from './orderProcessor.js';

let orders = [
  { menu: '삼겹살', quantity: 3 },
  { menu: '목살', quantity: 2 },
  { menu: '갈비', quantity: 4 },
  { menu: '삼겹살', quantity: 2 },
  { menu: '목살', quantity: 5 },
];

async function processAllOrders1(_orders) {
  for (let _order of _orders) {
    let mes = await processOrder(_order);
    console.log(mes);
  }
}

async function processAllOrders2(_orders) {
  let results = [];
  for (let _order of _orders) {
    results.push(processOrder(_order));
  }

  for (let result of results) {
    let mes = await result;
    console.log(mes);
  }
}

//processAllOrders1(orders);
//processAllOrders2(orders);
