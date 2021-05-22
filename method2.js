const chillout = require("chillout");

/**
 * Method 2 AVG 16.78ms slower than Method 1 but CPU Usage AVG 0,3%
 * @param {((cb:()=>any)=>any)[]} tasks
 * @param {number} limit
 */
module.exports = function sameTimeLimit(tasks, limit) {
  return new Promise(resolve => {

    chillout.repeat(limit, () => { _tryToDo() });

    let runningCount = 0;
    async function _tryToDo() {
      if (tasks.length != 0) {
        if (runningCount < limit) {
          let task = tasks.shift();
          runningCount++;
          task(() => {
            runningCount--;
            _tryToDo();
          })
        }
      } else {
        return resolve();
      }
    }
  })
}