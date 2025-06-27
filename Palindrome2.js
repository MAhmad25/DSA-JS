let s = "OP";
const res = s.replace(/[^0-9a-zA-Z]/g, "");
console.log(res.toLowerCase() === res.split("").reverse().join("").toLowerCase());
