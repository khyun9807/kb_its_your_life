import { processOrder } from './orderProcessor.js';

let orders = [
  { name: '삼겹살', quant: 2 },
  { name: '목살', quant: 3 },
  { name: '갈비', quant: 1 },
  { name: '항정살', quant: 4 },
];

async function processAllOrders() {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];

    await processOrder(order);
  }
}

processAllOrders();
