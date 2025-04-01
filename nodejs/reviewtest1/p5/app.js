import { orderStatus, updateStatus } from './status.js';

(async () => {
  await updateStatus('삼겹살', '굽는 중');
  await updateStatus('삼겹살', '완료');
  await updateStatus('갈비', '굽는 중');
  await updateStatus('갈비', '완료');
  console.log(orderStatus);
})();
