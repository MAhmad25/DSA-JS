/*const isAnagram = (s, t) => {
      if (s.length !== t.length) return false;
      return s.split("").sort().join("") === t.split("").sort().join("");
};
console.log(isAnagram("anagram", "nagaram"));
*/
const isAnagram = (s, t) => {
      if (s.length !== t.length) return false;
      const sObject = {};
      const tObject = {};
      for (let i = 0; i < s.length; i++) {
            sObject[s[i]] = (sObject[s[i]] || 0) + 1;
            tObject[t[i]] = (tObject[t[i]] || 0) + 1;
      }
      for (const key in sObject) {
            if (sObject[key] !== tObject[key]) return false;
      }
      return true;
};
console.log(isAnagram("anagram", "nagarm"));
