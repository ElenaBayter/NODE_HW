function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
module.exports = { add, subtract };
const os = require("os");
// console.log(os.cpus());
console.log(os.totalmem());
