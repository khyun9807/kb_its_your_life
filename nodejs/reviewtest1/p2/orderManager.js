let orderList = [];

function addOrder(_menu, _quantity) {
  orderList.push({
    menu: _menu,
    quantity: _quantity,
  });
}

module.exports = { orderList, addOrder };
