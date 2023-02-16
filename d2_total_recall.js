// https://perscholas.instructure.com/courses/1297/pages/week-4-day-3-lecture-arrays-loops-and-conditional-reps?module_item_id=776630

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
// // With the following multi-dimensional array:

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// // Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.splice(1, 1)
// console.log(whereIsWaldo);

// // Change "Neff" to "No One"
// whereIsWaldo[1][2] = "No One"
// console.log(whereIsWaldo);

// // Access and console.log "Waldo"
// let waldo = whereIsWaldo[2][1][1];
// console.log(waldo);

// // The commit message should read: "Where is Waldo answered"

//& ------------------------------

//& Excited Kitten
// // Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// // For every even number in your loop, log "...human...why you
// // taking pictures of me?...", "...the catnip made me do it...",
// // or "...why does the red dot always get away..." at random.

// // My first attempt
// for (let i = 1; i <= 20; i++) {
//   console.log(i + "| Love me, pet me! HSSSSSS!");
//   if (i % 2 === 0) {
//     let message = Math.ceil(Math.random() * 3);
//     if (message === 1) {
//       console.log("...human...why you taking pictures of me?...");
//     } else if (message === 2) {
//       console.log("...the catnip made me do it...");
//     } else {
//       console.log("...why does the red dot always get away...");
//     }
//   }
// }

// // Second attempt after reading hints
// let kittyPhrase = [
//   "...human...why you taking pictures of me?...",
//   "...the catnip made me do it...",
//   "...why does the red dot always get away...",
// ];

// for (let i = 1; i <= 20; i++) {
//     console.log(i + "| Love me, pet me! HSSSSSS!");
//     if (i % 2 === 0) {
//         let randomIndex = Math.floor(Math.random()*3)
//         console.log(kittyPhrase[randomIndex]);
//     }
// }

// // The commit message should read: "Excited Kittens answered"

//& ------------------------------

//& Find the Median

// // Find the median number in the following nums array, then console.log that number.
// // Hint - if you check the length of the array / 2, you might get not get a whole 
// // number. In which case, look into Math.floor( // something )

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// // Expected output:
// // => 15

// // Sort the array so the numbers are in ascending order
// nums.sort(); // I believe all numbers must have same amount of digits for this to work 
//              // (this method works just fine for the above 2 digit num array)
// console.log(nums);

// // Find the index of the median
// // If the array length is odd
// if (nums.length % 2 !== 0) {
//     let medianIndex = Math.ceil(nums.length / 2);
//     let median = nums[medianIndex];
//     console.log(median);
// // If the array length is even (not needed for this problem, but fun to show)
// } else {
//     // we need to find the indexes of the two numbers in the middle of the array
//     let secondMidPointIndex = nums.length / 2 
//     let firstMidPointIndex = secondMidPointIndex - 1;
//     let median = (nums[firstMidPointIndex] + nums[secondMidPointIndex]) / 2;
//     console.log(median);
// }

// // The commit message should read: "Find the Median answered"

//& ------------------------------

//!----------------------------------------------------------------------------------------------
//! EXTRA QUESTIONS
//!----------------------------------------------------------------------------------------------

//& Return of the Closets
// // Below, we've given you examples of Kristyn and Thom's 
// // closets modeled as data in JavaScript. Use this data 
// // to answer the following questions.

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// //? Alien Attire
// // Kristyn's left shoe has traveled through time and space and turned up in 
// // Thom's accessories drawer! Remove Kristyn's shoe from the array and save 
// // it to the variable kristynsShoe. Use that variable to add Kristyn's lost 
// // shoe to Thom's accessories array.

// const kristynsShoe = kristynsCloset.shift();
// thomsCloset[2].push(kristynsShoe);

// console.log(kristynsCloset);
// console.log(thomsCloset);

// //? Dress Us Up
// // Modify your code to put together 3 separate outfits for Kristyn and Thom. 
// // Put the output in a sentence to tell us what we'll be wearing. Mix and match!

// function createOutfit(pants, shirt, accessory) {
//     this.pants = pants;
//     this.shirt = shirt;
//     this.accessory = accessory;
//     console.log(`Today you'll be wearing ${this.pants}, ${this.shirt}, and ${this.accessory}.`);
// }

// createOutfit(kristynsCloset[3], kristynsCloset[2], kristynsCloset[4]);
// createOutfit(thomsCloset[1][1], thomsCloset[0][1], thomsCloset[2][3])
// createOutfit(kristynsCloset[0], thomsCloset[1][2], thomsCloset[2][2])

// // The commit message should read: "Kristyn and Thom have their outfits ready for class - array practice"

// //? Dirty Laundry
// // Time to do laundry - loop through Kristyn's closet and log the 
// // sentence "WHIRR: Now washing (item)" for each item in the array.

// for (let i = 0; i < kristynsCloset.length; i++) {
//     console.log(`WHIRR: Now washing ${kristynsCloset[i]}.`);
// }

// //? Inventory
// // Thom wants to do inventory on his closet. Using bracket notation, 
// // log the arrays containing all of Thom's shirts, pants, and accessories.

// // Log each section of Thom's closet
// for (array of thomsCloset) {
//     console.log(array);
// }

// // Log every item Thom owns
// for (array of thomsCloset) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

// // The commit message should read: "Hungry for More: I tackled..."