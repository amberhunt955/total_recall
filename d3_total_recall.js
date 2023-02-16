// https://perscholas.instructure.com/courses/1297/pages/week-4-day-4-lecture-slash-lab-classes-and-js-review?module_item_id=776632

//& Creating Classes and Factories

// //? Hamster

// class Hamster {
//     constructor(name){
//         this.owner = ''
//         this.name = name
//         this.price = 15
//   }
//   wheelRun(){
//       console.log('squeak squeak')
//     }
//   eatFood(){
//       console.log('nibble nibble')
//     }
//     getPrice(){
//         return this.price
//     }
// }
    
// // Your commit message should read something like: "created hamster class"

// //? Person

// class Person {
//     constructor(name){
//       this.name = name
//       this.age = 0
//       this.height = 0
//       this.weight = 0
//       this.mood = 0
//       this.hamsters = []
//       this.bankAccount = 0
//     }
//     getName(){
//       return this.name
//     }
//     getAge(){
//       return this.age
//     }
//     getWeight(){
//       return this.weight
//     }
//     greet(){
//       console.log(`I am ${this.name} hello`)
//     }
//     eat(){
//       this.weight++
//       this.mood++
//     }
//     exercise(){
//       this.weight--
//     }
//     ageUp(){
//       this.age++
//       this.height++
//       this.weight++
//       this.mood--
//       this.bankAccount+=10
//     }
//     buyHamster(hamster){
//       this.hamsters.push(hamster)
//       this.mood+=10
//       this.bankAccount-=hamster.getPrice()
//     }
//   }

// // Your commit message should read something like: "created person class"

// //? Create a story with your person class
// // Feel free to update or add methods to automate some of these tasks.

// //* 1. Instantiate a new Person named Timmy

// const timmy = new Person("Timmy");
// console.log(timmy);

// //* 2. Age Timmy five years

// for (let i = 1; i <= 5; i++) {
//     timmy.ageUp();
// }

// console.log(timmy);

// //* 3. At this point Timmy's a little bummed. As a precocious child, he feels 
// //* he's "seen it all" already. Have him eat five times.

// for (let i = 1; i <= 5; i++) {
//     timmy.eat();
// }

// console.log(timmy);

// //* 4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming 
// //* up and he wants to look good. Have him exercise five times

// for (let i = 1; i <= 5; i++) {
//     timmy.exercise();
// }

// console.log(timmy);

// //* 5. Age Timmy 9 years

// for (let i = 1; i <= 9; i++) {
//     timmy.ageUp();
// }

// console.log(timmy);

// //* 6. Create a hamster named "Gus"

// const gus = new Hamster("Gus");
// console.log(gus);

// //* 7. Set Gus's owner to the string "Timmy"

// gus.owner = "Timmy";
// console.log(gus);

// //* 8. Have Timmy "buy" Gus

// timmy.buyHamster(gus);
// console.log(timmy);

// //* 9 Age Timmy 15 years

// for (let i = 1; i <= 15; i++) {
//     timmy.ageUp();
// }

// console.log(timmy);

// //* 10. Have Timmy eat twice

// for (let i = 1; i <= 2; i++) {
//     timmy.eat();
// }

// console.log(timmy);

// //* 11. Have Timmy exercise twice

// for (let i = 1; i <= 2; i++) {
//     timmy.exercise();
// }

// console.log(timmy);

// // Your commit message should read something like: "created timmys story"

//? Chef Make Dinners

// Dinner class - objects of the dinner class are three course meal dinner options
class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}

// Chef factory class
class Chef {
    recipeBook = [];

    cook(appetizer, entree, dessert) {
        // the chef cooks a meal
        const threeCourseMeal = new Dinner(appetizer, entree, dessert);
        // add the meal to the chef's recipe book
        this.recipeBook.push(threeCourseMeal);
        // return the meal
        return threeCourseMeal;
    }
}

// Create amber, an instance of chef
const amber = new Chef;

// Have amber cook 3 meals and save each to a variable representing a dinner option
const dinnerOption1 = amber.cook("cheese board", "pasta", "chocolate cake");
const dinnerOption2 = amber.cook("fried pickles", "cheeseburger", "ice cream");
const dinnerOption3 = amber.cook("chips and salsa", "tacos al pastor", "flan");

// Console log amber's dinner option meals
console.log(dinnerOption1);
console.log(dinnerOption2);
console.log(dinnerOption3);

// Console log amber's recipe book
console.log(amber.recipeBook);

// Your commit message should read something like: "Dinner is served" 
