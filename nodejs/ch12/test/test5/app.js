import { orderStatus, updateStatus } from './status.js';

async function trackStatus() {
  await updateStatus('samgyeopsal', '굽는 중');
  await updateStatus('samgyeopsal', '완료');
  await updateStatus('galbi', '굽는 중');
  await updateStatus('galbi', '완료');
  console.log(`최종 주문 상태: ${orderStatus}`);
}

trackStatus();
