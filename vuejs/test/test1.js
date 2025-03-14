class Pet {
  constructor(
    _name,
    _species,
    _vaccinations,
    _healthCheckeDate,
    _alreadyWarned = false
  ) {
    this.name = _name;
    this.species = _species;
    this.vaccinations = [..._vaccinations];

    let datestr = `${_healthCheckeDate.getFullYear()}-${
      _healthCheckeDate.getMonth() + 1
    }-${_healthCheckeDate.getDay() + 1}`;

    this.healthCheckeDate = datestr;

    this.alreadyWarned = _alreadyWarned;
  }

  addVaccination(vname) {
    for (let i = 0; i < this.vaccinations.length; i++) {
      let vacc = this.vaccinations[i];

      if (vname == vacc) {
        console.log(
          `[예방접종 중복] ${this.name}: ${vname}은 이미 등록되어 있습니다.`
        );
        return;
      }
    }
    console.log(`[예방접종 추가] ${this.name}: ${vname}`);
    this.vaccinations.push(vname);
  }

  updateHealthCheckDate(newdate) {
    this.healthCheckeDate = newdate;
    let datestr = `${this.healthCheckeDate.getFullYear()}-${
      this.healthCheckeDate.getMonth() + 1
    }-${this.healthCheckeDate.getDay() + 1}`;

    console.log(`[건강검진 업데이트] ${this.name}: ${datestr}`);
  }
}

let pets = [];

const getDateDiff = (d1, d2) => {
  const date1 = d1;
  const date2 = new Date(d2);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
};

class PetHealthManager {
  registerPet(petobj) {
    pets.push(petobj);

    let str1 = `[등록] ${petobj.species} - ${petobj.name} (예방접종: [`;

    for (let i = 0; i < petobj.vaccinations.length; i++) {
      str1 += ` ${petobj.vaccinations[i]}`;
    }

    let str2 = ` ], 건강검진: ${petobj.healthCheckeDate})`;
    console.log(str1 + str2);
  }
  async checkHealthStatus() {
    function healthCheck() {
      let prom = new Promise((resolve, reject) => {
        let timerId = setInterval(() => {
          for (let i = 0; i < pets.length; i++) {
            let p = pets[i];

            let daydiff = getDateDiff(new Date(), p.healthCheckeDate);
            if (daydiff > 364 && !p.alreadyWarned) {
              p.alreadyWarned = true;
              console.log(
                `[건강검진 경고] ${p.name}: 1년 이상 건강검진을 받지 않았습니다!`
              );
            }
          }
        }, 3000);

        setTimeout(() => {
          clearInterval(timerId);
          console.log('[검사 종료]');
        }, 10000);
      });

      return prom;
    }
    let a = await healthCheck();
  }
}

const manager = new PetHealthManager();

const pet1 = new Pet('나비', '고양이', ['종합백신'], new Date('2023-03-10'));
manager.registerPet(pet1);

pet1.addVaccination('광견병');
pet1.addVaccination('광견병');

manager.checkHealthStatus();

setTimeout(() => {
  pet1.updateHealthCheckDate(new Date());
}, 5000);
