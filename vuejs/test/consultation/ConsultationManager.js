class ConsultationManager {
  customers = [];
  checkNumberFormat(numberstr) {
    if (
      numberstr.length == 13 &&
      numberstr[0] == '0' &&
      numberstr[1] == '1' &&
      numberstr[2] == '0' &&
      numberstr[3] == '-'
    ) {
      return true;
    } else false;
  }

  checkDup(cusobj) {
    for (let i = 0; i < this.customers.length; i++) {
      let customer = this.customers[i];
      if (customer.name == cusobj.name) return false;
    }
    return true;
  }

  _registerConsultation(cusobj) {
    let prom = new Promise((res, rej) => {
      let timerID = setTimeout(() => {
        console.log(`[저장 완료] ${cusobj.name} 상담 기록 저장 완료!`);
      }, 1000);

      if (!this.checkNumberFormat(cusobj.number)) {
        clearTimeout(timerID);
        console.log(`[상담 등록 오류] ${cusobj.name}: 잘못된 전화번호 형식`);
      } else if (!this.checkDup(cusobj)) {
        clearTimeout(timerID);
        console.log(`[상담 등록 오류] ${cusobj.name}: 이미 등록된 상담 기록`);
      } else {
        this.customers.push(cusobj);
        console.log(`[상담 등록] ${cusobj.name} - 선호 펫: ${cusobj.type}`);
      }
    });

    return prom;
  }

  async registerConsultation(cusobj) {
    await this._registerConsultation(cusobj);
  }

  _autoEndConsultation() {
    let prom = new Promise((res, rej) => {
      setTimeout(() => {
        console.log('[상담 기록 저장 종료]');
      }, 5000);
    });

    return prom;
  }

  async autoEndConsultation() {
    await this._autoEndConsultation();
  }
}

export { ConsultationManager };
