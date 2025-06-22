const nums = [1, 2, 3, 1, 1, 3];
const unique = [...new Set(nums)];
console.log(unique);
const repeated = unique.map((uL) => {
      return nums.filter((num) => num === uL).length;
});
console.log(repeated.length / 2);
