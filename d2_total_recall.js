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
// // This is a classic problem that you should get really comfortable solving.
// // If you've solved it before, try to make it more elegant and short.
// // Write a javascript application that logs all numbers from 1 - 100.
// // If a number is divisible by 3 log "Fizz" instead of the number.
// // If a number is divisible by 5 log "Buzz" instead of the number.
// // If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// // The commit message should read: "Fizz Buzz answered"

// for (let i = 1; i <= 100; i++) {
//     // a number divisible by 3 and 5
//     // will always be divisible by 15
//     if (i % 15 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

//& ------------------------------

//& Wild Wild Life
// // Use the following arrays to answer the questions below (name, species, age, hometown): You
// // should be modifying the elements by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// // Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2]++
// console.log(plantee);

// // Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City";
// console.log(wolfy);

// // Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins");
// console.log(dart);

// // Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy
// // array and replace it with "Gameboy".
// wolfy[0] = "Gameboy";
// console.log(wolfy);

// // The commit message should read: "Wild Wild Life answered"

//& ------------------------------

//& Yell at the Ninja Turtles
// // Create an array with the members of the ninja turtles
// // (Donatello, Leonardo, Raphael, Michaelangelo)

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// // Use a for of loop(not a typo - try it out! Try a for of loop) to
// // call toUpperCase() on each of them and print out the result.

// for (let element of ninjaTurtles) {
//     let index = ninjaTurtles.indexOf(element);
//     element = element.toUpperCase();
//     ninjaTurtles[index] = element;
// }

// console.log(ninjaTurtles);

// // As a developer, you'll be a lifelong learner and constantly encountering
// // new things. We'll give you little stretches like this to get you used to
// //looking at documentation and figuring some things out on your own. You've got this!

// // The commit message should read: "Yell at the Ninja Turtles answered"

//& ------------------------------

//& Methods, Revisited
// // Here is a list of favMovies:

// const favMovies = [
//   "Jaws",
//   "The Fellowship of the Ring",
//   "Howl's Moving Castle",
//   "Django Unchained",
//   "Cloud Atlas",
//   "The Usual Suspects",
//   "Toy Story",
//   "Conan the Barbarian",
//   "Titanic",
//   "Harry Potter",
//   "Fried Green Tomatoes",
//   "Volver",
//   "Oculus",
//   "Seven",
//   "Black Panther",
//   "Harry Potter",
//   "Imitation of Life",
//   "Snatch",
//   "Fast and Furious",
// ];

// // Console log the index of Titanic
// console.log(favMovies.indexOf("Titanic"));

// // Do the following and console.log the final results -->

// //? 1. use the .sort method Thought question: what did this 
// //? do to the array? Did it permanently alter it?
// favMovies.sort();
// console.log(favMovies);
// // This rearranged the movies in alphabetical order
// // This action permanently altered the array

// //? 2. Use the method pop
// favMovies.pop();
// console.log(favMovies);

// //? 3. push "Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies);

// //? 4. Reverse the array
// favMovies.reverse();
// console.log(favMovies);

// //? 5. Use the shift method
// favMovies.shift();
// console.log(favMovies);

// //? 6. unshift - what does it return?
// console.log(favMovies.unshift("JoJo Rabbit"));
// // by using console log we see that unshift returns the length 
// // of the changed array now that we have added a new movie
// console.log(favMovies);

// //? 7. splice "Django Unchained" and add "Avatar" (try finding 
// //? the index of "Django Unchained", instead of counting it yourself) 
// //? Thought question: did this permanently alter our array?
// let index = favMovies.indexOf("Django Unchained");
// favMovies.splice(index, 1, "Avatar")
// // This permanently altered the original array
// console.log(favMovies);

// //? 8. slice the last half of the array (challenge yourself and try to 
// //? programmatically determine the middle of the array rather than counting 
// //? it and hard coding it) - Thought question: did this permanently alter our array?
// middleIndex = Math.ceil(favMovies.length / 2);

// halvedFavMovies = favMovies.slice(0, middleIndex)

// // We have created a new array, halvedMovies
// console.log(halvedFavMovies);
// // The original array was not modified
// console.log(favMovies);

// //? 9. store the value of your slice in a variable, console.log 
// //? it - Thought question: what is going on here?
// // I have already done this - created the variable halvedFavMovies
// // We have created a new, separate, array

// //? 10. console.log your final results
// // I have done this, above.

// //? 11. After running the above tasks, console.log the index of "Fast and 
// //? Furious" - We removed it from the array, what value do we get when we look 
// //? for the index of something that is not in the array?
// console.log(halvedFavMovies.indexOf("Fast and Furious"));
// // We get -1 as the result, because that element wasn't found in the array

// //? 12. Thought question: that we declared the variable favMovies with const, and 
// //? yet, we were allowed to change the array. Weird? Should we have used let?
// // This is because we did not change the ARRAY - we changed 
// // the elements INSIDE the array. If a constant is an object 
// // or array its properties or items can be updated or removed.

// // -------- The commit message should read: "Methods Revisited answered" -------------

//& ------------------------------

//& Where is Waldo
// With the following multi-dimensional array:

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo);

// Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo);

// Access and console.log "Waldo"
let waldo = whereIsWaldo[2][1][1];
console.log(waldo);

// The commit message should read: "Where is Waldo answered"

//& ------------------------------

//& Excited Kitten
//& ------------------------------

//& Find the Median
//& ------------------------------
