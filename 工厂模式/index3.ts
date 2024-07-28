/**
 * jQuery 工厂模式
 */

// 扩展window属性
declare interface window {
  $: (selector: string) => jQuery;
}

class jQuery {
  selector: string;
  length: number;
  constructor(selector: string) {
    this.selector = selector;
    const el = Array.prototype.slice.call(document.querySelectorAll(selector));
    this.length = el.length;
    for (let i = 0; i < el.length; i++) {
      this[i] = el[i];
    }
  }
}

function $(selector: string) {
  return new jQuery(selector); // 逻辑封装
}

window.$ = $;
