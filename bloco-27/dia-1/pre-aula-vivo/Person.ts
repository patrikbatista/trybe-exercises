export default class Person {
  name: string;
  height: number;
  weight: number;

  constructor(name: string, height: number, weight: number) {
    console.log(`Creating person ${name}`);
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

// const p1 = new Person('Maria', 171, 58);
// const p2 = new Person('João', 175, 66);
// console.log(p1.name, p1.height, p1.weight);
// console.log(p2.name, p2.height, p2.weight);
// p1.sleep();
// p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/