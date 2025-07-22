const validPalindrome = (s) => {
      const res = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
      let l = 0,
            h = res.length - 1;
      while (l < h) {
            if (res[l] !== res[h]) return false;
            h--;
            l++;
      }
      return true;
};
let s = "A man, a plan, a canal: Panama";
console.log(validPalindrome(s));

// console.log(res.toLowerCase() === res.split("").reverse().join("").toLowerCase());
