console.log("Test");
  
  const aries = "♈";
  const taurus = "♉";
  const gemini = "♊";
  const cancer = "♋";
  const leo = "♌";
  const virgo = "♍";
  const libra = "♎";
  const scorpio = "♏"; 
  const sagittarius = "♐";
  const capricorn = "♑";
  const aquarius = "♒";
  const pisces = "♓︎";

const fireSigns = ["♈", "♌", "♐"];

console.log(
  fireSigns[fireSigns.length - 1] === "♐"
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);
const earthSigns = ["♉", "♍", "♑"];

console.log(
  earthSigns[earthSigns.length - 1] !== "♐"
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);
const airSigns = ["♊", "♎", "♒"];

console.log(airSigns[0] !== "♓︎" ? "Good Answer ✅" : "Wrong Answer ❌");

const waterSigns = ["♋", "♏", "♓︎"];

console.log(waterSigns[0] === "♋" ? "Good Answer ✅" : "Wrong Answer ❌");