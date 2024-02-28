function sayMyName(){
    console.log("S");
    console.log("I");
    console.log("N");
    console.log("T");
    console.log("O");
    console.log("O");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//    console.log( number1 + number2);
// }

function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//    return result

    return number1 + number2
}

const result = addTwoNumbers(3,4)

// console.log("Result :-",result);

function loginUserMessage(username = "Sintoo"){
    // if(username ===undefined){
    if(!username){
        console.log("Please enter your name")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sintoo"))
// console.log(loginUserMessage())
// console.log(loginUserMessage("Rahul"))

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2))

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 300,2000))

function calculateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 300,2000))

const user = {
    username: "Sintoo",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "Rahul",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 300, 600]));