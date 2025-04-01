function processOrder(order) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`${order.menu} ${order.quantity} finish`);
      res();
    }, 1000);
  });
}

module.exports = { processOrder };
