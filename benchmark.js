
const { performance } = require("perf_hooks");
const { method1, method2 } = require("./index");
const chillout = require("chillout");
const logUpdate = require("log-update");

(async () => {
  
  let durations1 = [];
  let durations2 = [];
  let tasks = Array(100).fill((cb) => {
    setTimeout(cb, 100);
  });
  await chillout.repeat(100, async (i) => {
    let start = performance.now();
    await method1([...tasks], 50);
    let end = performance.now() - start;
    durations1.push(end);
    logUpdate(`Durations1: ${(durations1.reduce((acc, cur) => acc + cur, 0) / durations1.length).toFixed(6)} AVG MS \nIndex: ${i}`)
  });
  logUpdate.done();
  console.log("Durations: 1", JSON.stringify(durations1));
  let method1Avg = durations1.reduce((acc, cur) => acc + cur, 0) / durations1.length;
  logUpdate.done();
  await chillout.repeat(100, async (i) => {
    let start = performance.now();
    await method2([...tasks], 50);
    let end = performance.now() - start;
    durations2.push(end);
    logUpdate(`Durations2: ${(durations2.reduce((acc, cur) => acc + cur, 0) / durations2.length).toFixed(6)} AVG MS \nIndex: ${i}`)
  });
  logUpdate.done();
  console.log("Durations: 2", JSON.stringify(durations2));
  let method2Avg = durations2.reduce((acc, cur) => acc + cur, 0) / durations2.length;

  console.log(`Method 2 is ${method2Avg - method1Avg}ms slower than method 1`);


})();
