(async () => {
  console.log('start');
  await runStretching();
  await runTreadmil();
  await runProtein();
  console.log('end');
})();

function runStretching() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('finish stetch');
      res();
    }, 1000);
  });
}
function runTreadmil() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('finish running');
      res();
    }, 1500);
  });
}
function runProtein() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('finish drink');
      res();
    }, 0);
  });
}
