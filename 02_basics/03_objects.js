// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Sintoo",
    "full name": "Sintoo kumar",
    [mySym]:"mykey1",
    age:18,
    location: "Hariyana",
    email: "sintoo@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Sintoo2003@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "Sintoo2022@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(jsUser.greeting()); 
console.log(jsUser.greetingTwo()); 