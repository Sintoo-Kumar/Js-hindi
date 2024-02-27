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
console.log(loginUserMessage())
console.log(loginUserMessage("Rahul"))