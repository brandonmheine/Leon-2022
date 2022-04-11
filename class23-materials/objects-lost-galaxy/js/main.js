//Create a dog object that has four properties and three methods

class Dog {
    constructor(breed, name, weight, color) {
        this.breed = breed
        this.name = name
        this.weight = weight
        this.color = color
    }

    bark() {
        console.log(`${this.name} barks!`)
    }

    sit() {
        console.log(`${this.name} sits down.`)
    }

    describe() {
        console.log(`${this.name} is a ${this.breed}, weighs ${this.weight} pounds, and is ${this.color}.`)
    }
}

const sheba = new Dog('Rottweiler', 'Sheba', 120, 'black')
sheba.bark()
sheba.sit()
sheba.describe()