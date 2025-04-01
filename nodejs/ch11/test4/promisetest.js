let newprom = new Promise(function (res, rej) {
  let cnt = 0;

  let intervalTimer = setInterval(() => {
    console.log(cnt);
    cnt++;
  }, 1000);
  setTimeout(() => {
    clearInterval(intervalTimer);
    if (cnt >= 4) {
      res('작업 정상 처리');
    } else {
      rej('작업 처리 오류');
    }
  }, 5000);

  //   if (cnt >= 4) {
  //     res('작업 정상 처리');
  //   } else {
  //     rej('작업 처리 오류');
  //   }
});

newprom
  .then(function (success) {
    console.log(success);
    return success;
  })
  .then((success) => {
    console.log(success, 'again!');
    throw new Error('에러 던짐~');
  })
  .catch(function (err) {
    console.error(err);
    return err;
  })
  .then((cause) => {
    console.log(cause);
  })
  .then(() => {
    return newprom;
  })
  .then(function (success1) {
    console.log('here we go again', success1);
    return newprom;
  })
  .then((success2) => {
    console.log(success2);
  });
