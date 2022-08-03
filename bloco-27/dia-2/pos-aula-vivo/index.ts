import IEmployee from './IEmployee';

import Subject from './Subject';
import Teacher from './Teacher';

const testInterfaceEmployee: IEmployee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() 
    * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);
const stringTest = testInterfaceEmployee.generateRegistration();
console.log(stringTest);

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher(
  'João Antônio da Costa', 
  new Date('1982/04/21'),

  2000,

  history,
);
const lucio = new Teacher(
  'Lucio Teixeira', 
  new Date('1986/01/29'),

  2000,

  philosophy,
);

console.log(math.name);
console.log(history);
console.log(philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);
