async function init() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }

  try {
    const res1 = await fetch('https://jsonplaceholder.typicode.com/users');
    const data1 = res1.json();
    console.log(data1);
    const data2 = await data1;
    console.log('--------', data2);
  } catch (e1) {
    console.error(e1);
  }
}

init();
