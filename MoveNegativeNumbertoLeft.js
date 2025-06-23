const arr = [3, 4, 5, -1, 32, -5, 6, -11];
// Method 1:  By Sorting
const negativeMoveLeft = (arr) => {
      return arr.sort((a, b) => a - b);
};
console.log(negativeMoveLeft(arr));

// //  Method 2:  2 Pointer  Approach
let lowNumber = 0;
let highNumber = arr.length - 1;
while (lowNumber != highNumber) {
      if (arr[lowNumber] < 0) {
            lowNumber++;
      } else if (arr[highNumber] > 0) {
            highNumber--;
      } else {
            [arr[lowNumber], arr[highNumber]] = [arr[highNumber], arr[lowNumber]];
      }
}
console.log(arr);
