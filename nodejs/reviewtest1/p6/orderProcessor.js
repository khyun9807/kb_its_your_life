function calculateTotal(orders) {
  let result = {};

  orders.forEach((order) => {
    result[order.menu] = 0;
  });

  orders.forEach((order) => {
    result[order.menu] = result[order.menu] + order.quantity;
  });

  return result;
}

function isTopMenu(whole, target) {
  let max = { menu: '', quantity: 0 };
  for (let name in whole) {
    if (max.quantity < whole[name]) {
      max.quantity = whole[name];
      max.menu = name;
    }
  }

  return max.menu === target;
}

module.exports = { calculateTotal, isTopMenu };
