const nums = [1, 3, 4, 2, 2];
// Approach 1
const duplicate = (nums) => {
      for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                  if (nums[i] === nums[j]) {
                        return nums[i];
                  }
            }
      }
};
console.log(duplicate(nums));
// Appraoch 2
const duplicate2 = (nums) => {
      const newArr = [...nums];
      newArr.sort((a, b) => a - b);
      for (let i = 0; i < newArr.length - 1; i++) {
            if (newArr[i] === newArr[i + 1]) return newArr[i];
      }
};
console.log(duplicate2(nums));
