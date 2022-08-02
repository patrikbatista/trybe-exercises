import Person from './Person';
import Tv from './Tv';

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);

tv1.turnOn();