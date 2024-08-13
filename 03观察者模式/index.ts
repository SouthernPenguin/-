/**
 * 观察者模式
 */

// 主题
class Subject {
  private state: number = 0;
  private observes: Observer[] = [];

  getState(): number {
    return this.state;
  }

  setState(newState: number) {
    this.state = newState;
    this.notify();
  }

  // 添加观察者
  attach(observer: Observer) {
    this.observes.push(observer);
  }

  // 通知
  private notify() {
    this.observes.forEach((item) => {
      item.update(this.state);
    });
  }
}

// 观察者
class Observer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(state: number) {
    console.log(`${this.name} update, sate is ${state}`);
  }
}

const sub = new Subject();

const observer1 = new Observer('A');
sub.attach(observer1);
sub.setState(1);

const observer2 = new Observer('B');
sub.setState(2);
sub.attach(observer2);
