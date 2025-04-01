let orderStatus = {
  삼겹살: '주문 대기',
  갈비: '주문 대기',
};

function updateStatus(_menu, _status) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`${_menu} is ${orderStatus[_menu]}->${_status}`);
      orderStatus[_menu] = _status;
      res();
    }, 1000);
  });
}

module.exports = { orderStatus, updateStatus };
