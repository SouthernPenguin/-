/**
 * 简易工厂模式
 */

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  fn1() {
    console.log('fn1');
  }
  fn2() {
    console.log('fn2');
  }
}

// 工厂模式
class Creator {
  create(name: string): Person {
    return new Person(name);
  }
}

const creator = new Creator();
const p1 = creator.create('p1');
const p2 = creator.create('p2');

p1.fn1();
p2.fn1();
