import { grillMeat } from './grill.js';
(async () => {
  let result = grillMeat('삼겹살');
  console.log('start', result);
  await result;
  console.log('eat now');
})();
