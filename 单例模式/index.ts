class SingleTon {
  // 无法在外部获取
  private static singleTon: SingleTon | null;

  // 无法被外部实例化
  private constructor() {}

  // 获取单例
  static getSingleTon(): SingleTon {
    if (SingleTon.singleTon === null) {
      SingleTon.singleTon = new SingleTon();
    }
    return SingleTon.singleTon;
  }
}
const s1 = SingleTon.getSingleTon();
const s2 = SingleTon.getSingleTon();
console.log(s1 === s2);
