function disa() {
  console.log('A');
}

function disc() {
  console.log('C');
}

function disb(callback) {
  console.log('B');
  callback();
}

disa();
disb(disc);
