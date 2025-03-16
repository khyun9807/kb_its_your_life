let meatList = [];
let addOrder = (menustr, quantity) => {
  meatList.push({ name: menustr, quant: quantity });
};

export { meatList, addOrder };
