function filterMenuByPrice(menu, maxPrice) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let arr = menu.filter((val) => {
        return val.price <= maxPrice;
      });
      res(arr);
    }, 1000);
  });
}
export { filterMenuByPrice };
