import { processOrder } from './orderProecessor.js';

(async () => {
  await processOrder({ menu: '삼겹살', quantity: 2 });
  await processOrder({ menu: '목살', quantity: 3 });
  await processOrder({ menu: '갈비', quantity: 1 });
  console.log('finish');
})();
