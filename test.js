const sameTimeLimit = require("./index");

let count = 0;
let tasks = Array(1000).fill((cb) => {
  count++;
  console.log(count)
  setTimeout(cb, 1000);
});

let start = Date.now();
sameTimeLimit(tasks, 50).then(() => {
  console.log(Date.now() - start, count);
})