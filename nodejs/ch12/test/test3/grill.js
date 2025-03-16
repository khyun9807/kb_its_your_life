function grillMeat(menu) {
  const grillPromis = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('🔥 [' + menu + ']가 다 구워졌습니다!');
      resolve('🍽️  식사 시작!');
    }, 2000);
  });

  return grillPromis;
}

export { grillMeat };
