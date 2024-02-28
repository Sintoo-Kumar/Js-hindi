// Immediately Invoked Function Expressions (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`);
// }

// chai()


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name)=> {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Sintoo")

