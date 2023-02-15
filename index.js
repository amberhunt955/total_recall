//  https://perscholas.instructure.com/courses/1297/pages/week-4-day-2-lecture-slash-lab-slash-hw-js-total-recall?module_item_id=776628

//& I. Variables & Data Types

//* A. Q + A
/* 
1. How do we assign a value to a variable?
    Answer -->
      We assign a value to a variable using =, with the variable name 
      to the left of the =, and the value assigned to the right of the =

2. How do we change the value of a variable?
    Answer -->
      We change the value of a variable by setting it = to a new value.

3. How do we assign an existing variable to a new variable?
    Answer -->
      const newVariable;
      existingVariable = newVariable;

4. Remind me, what are declare, assign, and define?
    Answer -->
      Declare: create a variable (you can use var, const, let, or nothing)
      Assign: use = to give a variable a value
      Define: give the variable a value type

5. What is pseudo coding and why should you do it?
    Answer -->
      Pseudo coding is writing the idea of your code in English before
      attempting to write it in code. This is useful to organize your 
      thoughts and have a framework to write your code off of.

6. What percentage of time should be spent thinking about how you're 
going to solve a problem vs actually typing in code to solve it?
    Answer -->
      To me, this depends on the person. But personally I like to get a rough
      idea of what I want to do in pseudo code. Then attempt in code. If you
      spend enough time thinking about your pseudo code, it shouldn't take you
      long to write your code at all.
*/

//* B. Strings

// // Create a variable called firstVariable
// // Assign it the value of the string "Hello World"
// let firstVariable = "Hello World";
// // Change the value of this variable to some number
// firstVariable = 4;
// // Store the value of firstVariable in a new variable called secondVariable
// let secondVariable = firstVariable;
// // Change the value of secondVariable to any string.
// secondVariable = "string";
// // What is the value of firstVariable?
//     // Answer --> 4
//     console.log(firstVariable);

// // Create a variable called yourName and set it equal to your name as a string. 
// const yourName = "Amber";
// // Then, write an expression that takes the string "Hello, my name is " and the 
// // variable yourName so that it returns a new string with them concatenated.
// console.log("Hello, my name is " + yourName + ".");

//* C. Booleans

// Using the provided variable definitions, replace the blanks so that 
// all log statements print true in the console. Answers should be all be 
// valid JS syntax and not weird things that don't make sense but happen 
// to print true to the console

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== '48');

//* D. The Farm

// // Declare a variable animal. Set it to be either "cow" or something else
// let animal = "cow";
// // Write code that will print out "mooooo" if the it is equal to cow
// // Change your code so that if the variable animals anything other than a cow, 
// // it will print "Hey! You're not a cow."
// if (animal === "cow") {
//     console.log("mooooo");
// } else {
//     console.log("Hey! You're not a cow.");
// }
// // Commit
//     // (committed to github as "the farm exercise")

//* E. Driver's Ed

// // Make a variable that holds a person's age; be semantic
// let age = 34;
// // Write code that will print out "Here are the keys!", if the age 
// // is 16 years or older, or, if the age is younger than 16, a message 
// // should print "Sorry, you're too young."
// if (age >= 16) {
//     console.log("Here are the keys!");
// } else {
//     console.log("Sorry, you're too young.");
// }

//&_____________________________________________________________

//& II. Loops

// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

//* A. The Basics

// // Write a loop that will print out all the numbers from 0 to 10, inclusive

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// // Write a loop that will print out all the numbers from 10 up to and including 400

// for (let i = 10; i <= 400; i++) {
//     console.log(i);
// }

// // Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for (let i = 12; i <= 4000; i += 3) {
//     console.log(i);
// }

//* B. Get even

// // Print out the numbers that are within the range of 1 - 100

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// // Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " <-- is an even number");
//     } else {
//         console.log(i);
//     }
// }

//* C. Give me Five

// // For the numbers 0 - 100, print out "I found a number. High 
// // five!" if the number is a multiple of five

// for (let i = 0; i <= 100; i++) {
//     if (i % 5 === 0 && i !== 0) {
//         console.log(`I found a ${i}. High five!`);
//     }
// }

// // Add to the code from above to print out "I found a number. 
// // Three is a crowd" if the number is a multiple of three
// // For numbers divisible by both three and five, be sure your 
// // code prints both messages

// for (let i = 0; i <= 100; i++) {
//     if (i % 5 === 0 && i !== 0) {
//         console.log(`I found a ${i}. High five!`);
//     } 
//     if (i % 3 === 0 && i !== 0) {
//         console.log(`I found a ${i}. Three is a crowd.`);
//     }
// }

//* D. Savings account

// // Write code that will save the sum of all the numbers between 
// // 1 - 10 to a variable called bank_account.
// let bank_account = 0;

// for (let i = 0; i <= 10; i++) {
//     bank_account += i;
// }

// // Check your work! Your bank_account should have $55 in it.
// console.log(bank_account);

// // You got a bonus! Your pay is now doubled each week. Write code 
// // that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// bank_account = 0; // reset the bank account to 0

// for (let i = 1; i <= 100; i++) {
//     bank_account += i*2
// }
// // Check your work! Your bank_account should have $10,100 in it.
// console.log(bank_account);

//&_____________________________________________________________

//& III. Arrays & Control Flow

//* A. Talk about it:
/*
1. What are the things in an array called?
    Answer -->
      The things in an array are called elements.

2. Do Arrays guarantee those things will be in order?
    Answer -->
      Yes, it is stored in a fixed order unless you change it.

3. What real-life thing could you model with an array?
    Answer -->
      You could store quirks about your pet cat as strings in an array.
      For example ["gives hugs", "hates being picked up", "licks shower wall", "human-like expression"]
*/

//* B. Easy Does It

// // Create an array that contains three quotes and store it in a variable called quotes
// const quotes = ["To be or not to be.", "Just do it.", "One day at a time."]
// console.log(quotes);

//* C. Accessing elements

// // Given the following array 
// const randomThings = [1, 10, "Hello", true]

// // How do you access the 1st element in the array?
// console.log(randomThings[0]);

// // Change the value of "Hello"to "World"
// randomThings[2] = "World"

// // Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings);

//* D. Change values

// // Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // What would you write to access the 3rd element of the array?
// console.log(ourClass[2]);

// // Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";
// console.log(ourClass);

// // Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City");
// console.log(ourClass);

//* E. Mix It Up

// // Note: You don't really need .splice()for these. You could use 
// // it, but there are simpler array methods that are more appropriate.

// // Given the following array: 
// const myArray = [5, 10, 500, 20]

// // Add the string "Aegon"to the end of the array. 
// myArray.push("Aegon");
// console.log(myArray);

// // Add another string of your choice to the end of the array.
// myArray.push("yay another string!");
// console.log(myArray);

// // Remove the 5 from the beginning of the array.
// myArray.shift();
// console.log(myArray);

// // Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift("Bob Marley");
// console.log(myArray);

// // Remove the string of your choice from the end of the array.
// myArray.pop();
// console.log(myArray);

// // Reverse this array using Array.prototype.reverse(). Did you mutate 
// // the array? What does mutate mean? Did the .reverse() method return anything?
// myArray.reverse(); // this will mutate the array (change the original array 
//                    // instead of saving the changes to a new, separate array)

//                    // the reverse() method returns the reference to the same array, 
//                    // with reversed elements
// console.log(myArray); 

//* F. Biggie Smalls

// // Create a variable that contains an integer.
// const integer = 102;

// // Write an if ... else statement that:
// // console.log()s "little number" if the number is entered is less than 100
// // console.log()s big number if the number is greater than or equal to 100.
// if (integer < 100) {
//     console.log("little number");
// } else {
//     console.log("big number");
// }

//* G. Monkey in the Middle

// // Write an if ... else if ... else statement:
// // console.log() "little number" if the number entered is less than 5.
// // If the number entered is more than 10, log big number.
// // Otherwise, log "monkey".

// const integer = 11;

// if (integer < 5) {
//     console.log("little number");
// } else if (integer > 10) {
//     console.log("big number");
// } else {
//     console.log("monkey");
// }

//* H. What's in Your Closet?

// // Below, we've given you examples of Kristyn and 
// // Thom's closets modeled as data in JavaScript.

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

// // What's Kristyn wearing today? Using bracket notation to access 
// // items in kristynsCloset, log the sentence "Kristyn is rocking 
// // that " + the third item in Kristyn's closet + " today!" to the console.
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// // Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset);

// // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);

// // Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// let todaysShirt = thomsCloset[0][0];
// console.log(todaysShirt);

// // In the same way, access one item from Thom's pants array.
// let todaysPants = thomsCloset[1][1];
// console.log(todaysPants);

// // Access one item from Thom's accessories array.
// let todaysAccessory = thomsCloset[2][1];
// console.log(todaysAccessory);

// // Log a sentence about what Thom's wearing. Example: "Thom is looking 
// // fierce in a grey button-up, jeans and wool scarf!"
// console.log(`Thom is looking fierce in a ${todaysShirt}, ${todaysPants}, and ${todaysAccessory}!`);

// // Get more specific about what kind of PJs Thom's wearing this winter. 
// // Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = "Footie Pajamas";
// console.log(thomsCloset);

//&_____________________________________________________________

//& IV. Functions

//* A. printGreeting

// Do you think you could write a function called printGreeting with a parameter name that 
// returns a greeting with the argument interpolated into the greeting?

// Like so?
// console.log(printGreeting("Slimer"));
     // => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already 
// done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

//* B. printCool

// // Write a function printCool that accepts one parameter, name as an argument. The function 
// // should print the name and a message saying that that person is cool.

// // console.log(printCool("Captain Reynolds"));
// // => "Captain Reynolds is cool";

// function printCool(name) {
//     console.log(`${name} is cool.`);
// }

// printCool("Captain Reynolds");

//* C. calculateCube

// // Write a function calculateCube that takes a single number and 
// // prints the volume of a cube made from that number.

// // console.log(calculateCube(5));
// // => 125

// function calculateCube(number) {
//     let volume = Math.pow(number, 3)
//     console.log(volume);
// }

// calculateCube(5);

//* D. isVowel

// // Write a function isVowel that takes a character (i.e. a string of length 1) and returns 
// // true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your 
// // function on every vowel and make sure it's working. In general, when you write functions, 
// // take a minute to test them with different values to make sure they behave the way you want.

// // console.log(isVowel("a"));
// // => true

// function isVowel(char) {
//     char = char.toLowerCase();
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isVowel("a"));

//* E. getTwoLengths

// // Write a function getTwoLengths that accepts two parameters (strings). The function should 
// // return an array of numbers where each number is the length of the corresponding string.

// // console.log(getTwoLengths("Hank", "Hippopopalous"));
// // => [4, 13]

// function getTwoLengths(string1, string2) {
//     let arrayOfLengths = [];
//     arrayOfLengths.push(string1.length);
//     arrayOfLengths.push(string2.length);
//     return arrayOfLengths;
// }

// console.log(getTwoLengths("Hank", "Hippopopalous"));

//* F. getMultipleLengths

// // Write a function getMultipleLengths that accepts a single parameter as an argument: an array 
// // of strings. The function should return an array of numbers where each number is the length 
// // of the corresponding string.

// // console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// // => [5, 4, 2, 2, 4]

// function getMultipleLengths(arrayOfStrings) {
//     let arrayOfNumbers = [];
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         arrayOfNumbers.push(arrayOfStrings[i].length);
//     }
//     return arrayOfNumbers;
// }

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//* G. maxOfThree

// // Define a function maxOfThree that takes three numbers as arguments and returns the largest of 
// // them. If all numbers are the same, it doesn't matter which one is returned. If the two largest 
// // numbers are the same, one of them should be returned. Be sure to test it with larger values in 
// // each of the three locations.

// // console.log(maxOfThree(6, 9, 1));
// // => 9

// // Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! 
// // However, for this particular question, we need you to submit a solution that does not use Math.max().

// function maxOfThree(num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     } else if (num2 >= num1 && num2 >= num3) {
//         return num2;
//     } else if (num3 >= num1 && num3 >= num2) {
//         return num3;
//     } 
// }

// console.log(maxOfThree(6, 9, 1));

//* H. printLongestWord

// // Write a function printLongestWord that accepts a single argument, an array of strings. The method 
// // should return the longest word in the array. In case of a tie, the method should return the word 
// // that appears first in the array.

// // console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// // => "Peanutbutter"

// function printLongestWord(arrayOfStrings) {
//     let longestWord = ""
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         if (arrayOfStrings[i].length > longestWord.length) {
//             longestWord = arrayOfStrings[i];
//         }
//     }
//     return longestWord;
//     }

// console.log(printLongestWord(["todd", "boxes", "snake", "tree"]));

//&_____________________________________________________________

//& V. Objects

// // Let's set up an object data structure. Let's say we have a website that sells 
// // products, and we have a user of our website, and we want to store that user's 
// // data. The object data structure is a good way to organize the data from our user.

// //* A. Make a user object

// // Create an object called user. Write in to the object the key-value pairs for name, 
// // email, age, and purchased. Set the value of purchased to an empty array []. Set the 
// // other values to whatever you would like.

// const user = {
//     name: "Alex",
//     email: "alex24@gmail.com",
//     age: 34,
//     purchased: []
// }

// console.log(user);

// //* B. Update the user

// // Our user has changed his or her email address. Without changing the original user 
// // object, update the email value to a new email address.
// user.email = "alexsmith24@gmail.com"
// console.log(user);

// // Our user has had a birthday! Without changing the original user object, increment 
// // the age value using the postfix operator. Hint: age++
// user.age++;
// console.log(user);

// //* C. Adding keys and values

// // You have decided to add your user's location to the data that you want to collect.
// // Without changing the original user object, add a new key location to the object, and 
// // give it a value or some-or-other location (a string).
// user.location = "boston";
// console.log(user);

// //* D. Shopaholic!

// // Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), 
// // add the string "carbohydrates" to the purchased array.
// user.purchased.push("carbohydrates");
// console.log(user);

// // Our user has purchased an item! They have purchased some "peace of mind". Using .push(), 
// // add the string "peace of mind" to the purchased array.
// user.purchased.push("peace of mind");
// console.log(user);

// // Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), 
// // add the string "Merino jodhpurs" to the purchased array.
// user.purchased.push("merino jodhpurs");
// console.log(user);

// // Console.log just the "Merino jodhpurs" from the purchased array.
// console.log(user.purchased[2]);

// //* E. Object-within-object

// // Remember that you can add an object to an existing object 
// // in the same way that you can add any new property/value pair.

// // If we want to give our user a friend with a name and age, we could write:

// // user.friend = {
// //     name: "Grace Hopper",
// //     age: 85
// // }

// // When we console.log user, we would see the friend object added to our user object.

// // Write a friend object into your user object and give the friend a name, age, 
// // location, and purchased array (empty for now)

// user.friend = {
//     name: "Grace Hopper",
//     age: 85,
//     location: "new york",
//     purchased: []
// }

// console.log(user);

// // Console.log just the friend's name
// console.log(user.friend.name);

// // Console.log just the friend's location
// console.log(user.friend.location);

// // CHANGE the friend's age to 55
// user.friend.age = 55;
// console.log(user.friend);

// // The friend has purchased "The One Ring". Use .push()to add 
// // "The One Ring" to the friend's purchased array.
// user.friend.purchased.push("The One Ring")
// console.log(user.friend);

// // The friend has purchased "A latte". Use .push()to add 
// // "A latte" to the friend's purchased array.
// user.friend.purchased.push("A Latte")
// console.log(user.friend);

// // Console.log just "A latte" from the friend's purchased array.
// console.log(user.friend.purchased[1]);

// //* F. Loops

// // Write a for loop that iterates over the User's purchased array (NOT the 
// // friend's purchased array), and prints each element to the console.

// for (item of user.purchased) {
//     console.log(item);
// }

// // Write a for loop that iterates over the Friend's purchased array, 
// // and prints each element to the console.

// for (item of user.friend.purchased) {
//     console.log(item);
// }

// //* G. Functions can operate on objects

// // Write a single function updateUser that takes no parameters. When the function is run, it should:
//     // it should increment the user's age by 1
//     // make the user's name uppercase
// // The function does not need a return statement, it will merely modify the user object.

// function updateUser() {
//     user.age++;
//     user.name = user.name.toUpperCase();
// }

// updateUser();
// console.log(user);

// // Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of 
// // hard-coding it to only work on our user object, make it take a parameter person, and have it 
// // modify the object that is passed in as an argument when the function is called. Call your 
// // oldAndLoud function with user as the argument.

// function oldAndLoud(person) {
//     person.age++;
//     person.name = person.name.toUpperCase();
// }

// oldAndLoud(user);
// console.log(user);

//&_____________________________________________________________

//& Extra

// // //* Cat Combinator

// //? 1. Mama cat
// // Define an object called cat1 that contains the following properties:
//   // name
//   // breed
//   // age (a number)

// const cat1 = {
//   name: "pete",
//   breed: "sphynx",
//   age: 12
// }

// // console.log the cat's age
// // console.log the cat's breed
// console.log(cat1.age);
// console.log(cat1.breed);



// //? 2. Papa cat
// // Define an object called cat2 that also contains the properties:
//   // name
//   // breed
//   // age (a number)

// const cat2 = {
//   name: "penny",
//   breed: "siamese",
//   age: 7
// }

// //? 3. Combine Cats!
// // The cats are multiplying!

// // Write a function combineCats that has two parameters mama, and papa. 
// // The function will take two arguments -- each a cat object. The result 
// // should be an object where in the name is a concatenation of the 
// // parents' names, the age is 1, and the breed is each of the parents' 
// // breeds with a hyphen in between.

// function combineCats(mama, papa) {
//   const comboCat = {
//     name: mama.name + papa.name,
//     age: 1,
//     breed: mama.breed + "-" + papa.breed
//   }
//   console.log(comboCat);
//   return comboCat;
// }

// // Pass cat1 and cat2 as arguments to the combineCats function. The function 
// // should console.log them. 

// combineCats(cat1, cat2);


// //? 4. Cat brain bender
// // If combineCats returns an object, and if combineCats takes objects as arguments, 
// // then it stands to reason that catCombinator can use itself as its own argument.

// // Take a second to stew on that . . .
// // What is the result of:
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// // The above console.log is two levels deep of combineCats.

// // Write a console.log that is three levels deep of combineCats. 
// // combineCats should have two arguments, each which are combineCats, 
// // each which have two arguments, each which are combineCats.

// console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));
