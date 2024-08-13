// 闭包方式现实单例
// function getSingleTon() {
//   let sing;

//   class Single {}
//   return () => {
//     if (sing === null) {
//       sing = new Single();
//     }
//     return sing;
//   };
// }

// const singleTon = getSingleTon();
// const p1 = singleTon();
// const p2 = singleTon();
// console.log(p1 === p2);
