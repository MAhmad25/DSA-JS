// const str = "Ahmad";
// console.log(str.slice(-3));
// console.log("B".charCodeAt(0));
const plusOne = function (digits) {
      let str = digits.join("");
      let num = BigInt(str) + 1n;
      str = Array.from(num.toString());
      return str.map((num) => parseInt(num));
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
