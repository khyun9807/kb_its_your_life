import { grillMeat } from './grill.js';

async function startGrilling() {
  const res = await grillMeat('삼겹살');
  console.log(res);
}

startGrilling();
