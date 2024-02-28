const user = {
    username: "Sintoo",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Sintoo"
//     console.log(this);
// }
// chai()

// const chai = function () {
//     let username = "Sintoo"
//     console.log(this.username);
// }

const chai =()=> {
    let username = "Sintoo"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2)

const addTwo = (num1, num2) => ({username: "Sintoo"})


console.log(addTwo(3, 4));

// const myArray = [2, 3, 4, 6, 7 ]

// myArray.forEach()