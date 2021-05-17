// console.log("1");
// require("./computation/febonaci");
// console.log("2");

const child = require("child_process");
console.log("1");
const newProcess = child.spawn("node", ["./computation/febonaci"], {
  stdio: "inherit",
});
const newProcess2 = child.spawn("node", ["./computation/febonaci"], {
  stdio: "inherit",
});
const newProcess3 = child.spawn("node", ["./computation/febonaci"], {
  stdio: "inherit",
});
const newProcess4 = child.spawn("node", ["./computation/febonaci"], {
  stdio: "inherit",
});
console.log("2");
