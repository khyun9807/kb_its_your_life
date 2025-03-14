class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
//nodejs가 핫해지면서 class문법에 필요성이 생겨 ES6부터는 해당 문법 가능
//그렇다면 더 이상 prototype객체에 접근을 하는가?
