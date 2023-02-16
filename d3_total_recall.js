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