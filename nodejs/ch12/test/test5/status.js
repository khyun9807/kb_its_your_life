let orderStatus = {
  samgyeopsal: '주문 대기',
  galbi: '주문 대기',
};

function updateStatus(menu, status) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //update
      orderStatus[menu] = status;
      //notice
      console.log(`🔄 [${menu}] 상태가 '[${status}]'로 변경되었습니다.`);
      res();
    }, 1000);
  });
}

export { orderStatus, updateStatus };
