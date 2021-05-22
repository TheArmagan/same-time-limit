const { method1, method2 } = require("./index");

let count = 0;
let tasks = Array(100).fill((cb) => {
  count++;
  // console.log(count)
  setTimeout(cb, 100);
});

let start = Date.now();
method2(tasks, 50).then(() => {
  console.log(Date.now() - start, count);
})