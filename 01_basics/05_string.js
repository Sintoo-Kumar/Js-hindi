const name = "sintoo"
const repoCount = "30"

// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`Sintoo-h-com`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("n"));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "    Sintoo    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://sintoo.com/sintoo%20raj"

console.log(url.replace('%20','_'));

console.log(gameName.split("-"));