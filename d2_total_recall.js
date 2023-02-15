//& Easy Going
// // Write a for loop that will log the numbers 1 through 20.
// // The commit message should read: "Easy Going answered"

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

//& ------------------------------

//& Get Even
// // Write a for loop that will log only the even numbers in 0 through 200.
// // Hint: Think about the increment expression.
// // The commit message should read: "Get Even answered"

// for (let i = 0; i <= 200; i += 2) {
//     console.log(i);
// }

//& ------------------------------

//& Fizz Buzz
// This is a classic problem that you should get really comfortable solving. 
// If you've solved it before, try to make it more elegant and short.
// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// The commit message should read: "Fizz Buzz answered"

for (let i = 1; i <= 100; i++) {
    // a number divisible by 3 and 5 
    // will always be divisible by 15
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//& ------------------------------

//& Wild Wild Life
//& ------------------------------

//& Yell at the Ninja Turtles
//& ------------------------------

//& Methods, Revisited
//& ------------------------------

//& Where is Waldo
//& ------------------------------

//& Excited Kitten
//& ------------------------------

//& Find the Median
//& ------------------------------