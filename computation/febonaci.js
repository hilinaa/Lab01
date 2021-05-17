// const fibonacci = function (num) {
//   if (num <= 2) {
//     return 1;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// };
// console.log("Fibonacci of 10 is " + fibonacci(10));

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
console.log("Fibonacci of 40 is " + fibonacci(40));
