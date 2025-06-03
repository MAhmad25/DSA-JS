const numbers = [45, 32, 23, 60, 54, 87];
let firstMin = Math.min(numbers[0], numbers[1]); //32
let secondMin = Math.max(numbers[0], numbers[1]); //45
for (let i = 2; i < numbers.length; i++) {
      if (numbers[i] < firstMin) {
            secondMin = firstMin;
            firstMin = numbers[i];
      } else if (numbers[i] < secondMin && firstMin != numbers[i]) secondMin = numbers[i];
}
console.log(secondMin);
