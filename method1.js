const chillout = require("chillout");

/**
 * Method 1 AVG 16.78ms faster than Method 2 CPU Usage AVG 11,6%
 * @param {((cb:()=>any)=>any)[]} tasks
 * @param {number} limit 
 */
module.exports = function sameTimeLimit(tasks, limit) {
  return new Promise((resolve) => {
    let runningCount = 0;
    chillout.until(() => {
      if (tasks.length != 0 || runningCount != 0) {
        if (runningCount < limit && tasks.length) {
          let task = tasks.shift();
          runningCount += 1;
          task(() => {
            runningCount -= 1;
          })
        }
      } else {
        return chillout.StopIteration;
      }
    }).then(resolve);
  })
}