function filterMenuByPrice(menus, maxPrice) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let fm = menus.filter((menu) => {
        return menu.price <= maxPrice;
      });
      res(fm);
    }, 1000);
  });
}

module.exports = { filterMenuByPrice };
