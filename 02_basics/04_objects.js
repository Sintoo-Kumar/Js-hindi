// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sintoo"
tinderUser.odLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"sintoo@gmail.com",
    fullname: {
        userfullname: {
            firstname:"sintoo",
            lastname:"kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} 
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email:"s@gmail.com"
    },
    {
        id: 1,
        email:"s@gmail.com"
    },
    {
        id: 1,
        email:"s@gmail.com"
    },
    {
        id: 1,
        email:"s@gmail.com"
    },
    {
        id: 1,
        email:"s@gmail.com"
    },
    {
        id: 1,
        email:"s@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggesIn'))

const cource = {
    coursename: "js in hindi",
    price: "999",
    courceInstructor: "Hitesh"
}

// cource.courceInstructor

// const {courceInstructor} = cource
// console.log(courceInstructor);

const {courceInstructor:instructor} = cource
console.log(instructor);

//json formet

// {          
//     "name": "Sintoo",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {},
]