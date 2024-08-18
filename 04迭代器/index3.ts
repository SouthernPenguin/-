// 生成器
// function* genNums() {
// yield 10;
// yield 20;
// yield 30;
// yield* [1, 2, 3]; // 另外的写法
// }

// const numsIterator = genNums();
// console.log(numsIterator.next());
// console.log(numsIterator.next());
// console.log(numsIterator.next());
// console.log(numsIterator.next());

// 使用 yield重构 CustomIterator
class CustomIterator {
  private data: number[];
  constructor() {
    this.data = [1, 2, 3];
  }

  *[Symbol.iterator]() {
    yield* this.data;
  }
}

const iterator = new CustomIterator();
for (let n of iterator) {
  console.log(n);
}
