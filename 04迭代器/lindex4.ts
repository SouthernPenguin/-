// Generator + yield 遍历 DOM 树

function* traverse(elemList: Element[]): any {
  for (let elem of elemList) {
    yield elem; // 使用 `yield` 关键字返回当前遍历到的元素。这使得生成器函数在每次调用 `next()` 方法时返回一个值。
    const children = Array.from(elem.children);
    if (children.length) {
      yield* traverse(children); // yield* 语句用于委托生成器
    }
  }
}

const el = document.getElementById('#a');

if (el) {
  for (let node of traverse([el])) {
    console.log(node);
  }
}
