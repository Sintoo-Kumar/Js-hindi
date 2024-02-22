// Array

const myArr = [1,2,3,4,5,6]
const myHeros = ["iron man","thor","hulk","Dr.strange"]

const myArr2 =new Array(1,2,3,4,5,6)
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);

// Array Methood

// myArr.push(7)
// myArr.push(8)
// myArr.pop(8)

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("c ", myArr);
console.log(myn2);