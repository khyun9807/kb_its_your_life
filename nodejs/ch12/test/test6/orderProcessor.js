function calculateTotal(ordersArr) {
  let retObj = {};

  for (let i of ordersArr) {
    retObj[i['menu']] = 0;
  }

  for (let i = 0; i < ordersArr.length; i++) {
    let order = ordersArr[i];

    retObj[order['menu']] += order['quantity'];
  }

  //return function () {
  return retObj;
  //};
}

function isTopMenu(sumObj, menu) {
  let maxMenu = '';
  let maxQuant = 0;
  for (let i in sumObj) {
    if (maxQuant < sumObj[i]) {
      maxQuant = sumObj[i];
      maxMenu = i;
    }
  }

  if (maxMenu == menu) {
    return true;
  } else {
    return false;
  }
}

export { calculateTotal, isTopMenu };
