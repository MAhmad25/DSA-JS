const isPalindrome = (x) => {
      const string = x.toString();
      return string.split("").reverse().join("") === string ? true : false;
};
console.log(isPalindrome(121));
