const yura = {
  firstName: 'yura',
  lastName: 'choi',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

//생성자 함수
function User(first, last) {
  //변수 넣어주는 초기화 함수
  this.firstName = first;
  this.lastName = last;
}

//함수 추가는?

user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const yura2 = new user('yura', 'choi');
const jungwoo = new user('jungwoo', 'moon');

console.log(yura2.getFullName());
console.log(jungwoo.getFullName());
