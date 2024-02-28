// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// let a = 300

if (true) {
    let a = 10 //because a local variable then a is not define
    const b = 20 //because b local variable then b is not define
    // var c = 30   // c is globel variable because  var is a globel
    // console.log("INNER: ", a)
}

// console.log(a);  
// console.log(b); 
// console.log(c);

function one(){
    const username = "Sintoo"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one() 

if (true) {
    const username = "Sintoo"
    if (username === "Sintoo"){
        const website = " youtube"
        // console.log(username +  website);
    }
    // console.log(website);
 }

//  console.log(username);

//****************intresting***********

function addone(num) {
    return num + 1
}

addone (5)

const addtwo = function(num) {
    return num + 2
}

addtwo(5)
