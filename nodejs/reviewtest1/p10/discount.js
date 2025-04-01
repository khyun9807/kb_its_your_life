function calculateDiscount(price, quantity) {
  if (quantity >= 5) {
    return price * quantity * 0.9;
  } else {
    return price * quantity;
  }
}

module.exports = { calculateDiscount };
