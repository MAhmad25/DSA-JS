const nums = [-4, -1, 0, 3, 10];
const square = nums.map((num) => Math.abs(num) ** 2);
console.log(square.sort((a, b) => a - b));