// Generator + yield 遍历 DOM 树

function* traverse(elemList: Element[]): any {
  for (let elem of elemList) {
    yield elem;
    const children = Array.from(elem.children);
    if (children.length) {
      yield* traverse(children);
    }
  }
}

const el = document.getElementById('#a');

if (el) {
  for (let node of traverse([el])) {
    console.log(node);
  }
}
