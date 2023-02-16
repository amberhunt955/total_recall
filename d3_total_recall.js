// https://perscholas.instructure.com/courses/1297/pages/week-4-day-4-lecture-slash-lab-classes-and-js-review?module_item_id=776632

//& Section 1 - Creating Classes and Factories

//? Hamster

class Hamster {
    constructor(name){
        this.owner = ''
        this.name = name
        this.price = 15
  }
  wheelRun(){
      console.log('squeak squeak')
    }
  eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
        return this.price
    }
}
    
// Your commit message should read something like: "created hamster class"

//? Person

class Person {
    constructor(name){
      this.name = name
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log(`I am ${this.name} hello`)
    }
    eat(){
      this.weight++
      this.mood++
    }
    exercise(){
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    }
  }

  // Your commit message should read something like: "created person class"
