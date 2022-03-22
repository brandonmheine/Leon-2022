//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

class Fighter {
    constructor(name, gender, height, weight) {
        this.name = name
        this.gender = gender
        this.height = height
        this.weight = weight
    }

    punch() {
        console.log(`${this.name} punches their opponent`)
    }

    kick() {
        console.log(`${this.name} kicks their opponent`)
    }

    describe() {
        console.log(`${this.name} is a ${this.gender} fighter, weighs ${this.weight} pounds and is ${this.height} inches tall`)
    }
}

const guile = new Fighter('Guile', 'Male', 73, 155)
guile.describe()
guile.kick()
guile.punch()