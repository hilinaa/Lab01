

const child = require("child_process");
console.log("1");
const newProcess = child.spawn("node", ["./computation/febonaci"], {
  stdio: "inherit",
});

console.log("2");
