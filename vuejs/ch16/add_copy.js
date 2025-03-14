import _ from 'lodash';

const teacher = {
  age: 20,
  arr: [1, 2],
  obj: { gender, addr },
};

const copyTeacher1 = teacher;
const copyTeacher2 = { ...teacher }; //얕은 복사

console.log(teacher);

copyTeacher2.age = 21;
copyTeacher2.arr.push(3);
copyTeacher2.obj.gender = 'hey';

console.log(teacher);

copyTeacher1.age = 21;
copyTeacher1.arr.push(3);
copyTeacher1.obj.gender = 'hey';

console.log(teacher);
