var numJewelsInStones = function (jewels, stones) {
      const arr = Array.from(stones);
      return arr.filter((stone) => {
            return jewels.includes(stone);
      }).length;
};
console.log(numJewelsInStones("z", "ZZ"));
