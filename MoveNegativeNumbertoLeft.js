const randomArr = [3, 4, 5, -1, 32, -5, 6, -11];
const negativeMoveLeft = (arr) => {
      return arr.sort((a, b) => a - b);
};
console.log(negativeMoveLeft(randomArr));