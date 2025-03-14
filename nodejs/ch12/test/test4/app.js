import { processOrder } from './orderProccesor.js';

async function processOrders() {
  let first = await processOrder({ name: '삼겹살', quant: 2 });
  console.log(first);
  let second = await processOrder({ name: '목살', quant: 3 });
  console.log(second);
  let third = await processOrder({ name: '갈비', quant: 1 });
  console.log(third);
  let fourth = await processOrder(null);
  console.log(fourth);
}

processOrders();
