const reverse = (x) => {
      const MAX = 2 ** 31 - 1; //  2147483647
      const MIN = -(2 ** 31); // -2147483648

      const sign = Math.sign(x);
      const absStr = Math.abs(x).toString();
      const revStr = absStr.split("").reverse().join("");
      const revNum = sign * parseInt(revStr, 10);

      // return 0 if it overflows 32-bit signed int
      if (revNum > MAX || revNum < MIN) return 0;
      return revNum;
};

console.log(reverse(1534236469)); // → 0
console.log(reverse(123)); // → 321
console.log(reverse(-123)); // → -321
