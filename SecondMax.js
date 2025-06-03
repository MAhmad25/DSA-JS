const numbers = [23, 45, 32, 60, 54, 87];
let firstMax = Math.max(numbers[0], numbers[1]); //45
let secondMax = Math.min(numbers[0], numbers[1]); //23
for (let i = 2; i < numbers.length; i++) {
      if (numbers[i] > firstMax) {
            secondMax = firstMax;
            firstMax = numbers[i];
      } else if (numbers[i] > secondMax && firstMax != numbers[i]) secondMax = numbers[i];
}
console.log(secondMax);
