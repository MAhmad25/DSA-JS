/*const twoSum = (nums, target) => {
      for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++)
                  if (nums[i] + nums[j] === target) {
                        return [i, j];
                  }
      }
};
console.log(twoSum([2, 7, 5, 11, 15], 26));*/
const twoSum = (nums, target) => {
      const obj = {};
      for (let i = 0; i < nums.length; i++) {
            let n = nums[i];
            if (obj[target - n] >= 0) {
                  return [obj[target - n], i];
            } else obj[n] = i;
      }
};
console.time("twoSum");
console.log(twoSum([2, 7, 11, 15], 9));
console.timeEnd("twoSum");
