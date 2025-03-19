function processOrder(order) {
  let str = '';
  if (order.quant < 3) {
    str = `❌ ${order.name} ${order.quant}인분은 주문 최소 수량 미달입니다.`;
  } else {
    str = `✅ ${order.name} ${order.quant}인분 주문 완료!`;
  }

  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(str);
      res();
    }, 1000);
  });
}

export { processOrder };
