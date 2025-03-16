function processOrder(orderobj) {
  const promisobj = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderobj != null) {
        resolve(`✅ ${orderobj.name} ${orderobj.quant}인분 주문 처리 완료!`);
      } else {
        resolve('🍽️ 모든 주문 처리 완료! 식사 시작!');
      }
    }, 1000);
  });

  return promisobj;
}

export { processOrder };
