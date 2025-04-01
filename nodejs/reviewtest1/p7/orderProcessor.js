function processOrder(order) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let ret = '';
      if (order.quantity < 3) {
        ret = `${order.menu} less than 3`;
      } else {
        ret = `${order.menu} success`;
      }
      res(ret);
    }, 1000);
  });
}

module.exports = { processOrder };
