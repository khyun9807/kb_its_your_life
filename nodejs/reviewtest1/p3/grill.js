function grillMeat(meat) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(meat, 'is done');
      res();
    }, 2000);
  });
}

module.exports = { grillMeat };
