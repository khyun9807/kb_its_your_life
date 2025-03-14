function runStretching() {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('스트레칭 완료');
    }, 1000);
  });

  return prom;
}

function runTreadmil() {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('러닝 완료');
    }, 500);
  });

  return prom;
}

function runProtein() {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('프로틴 완료');
    }, 0);
  });

  return prom;
}

async function func() {
  console.log('운동 기록 처리 시작');

  try {
    let stretchingEnd = await runStretching();
    console.log(stretchingEnd);

    let treadmilEnd = await runTreadmil();
    console.log(treadmilEnd);

    let proteinEnd = await runProtein();
    console.log(proteinEnd);

    console.log('운동 기록 처리 종료');
  } catch (e) {
    console.error(e);
  }
}

func();
