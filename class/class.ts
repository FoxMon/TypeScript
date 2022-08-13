class Person {
    // public
    name: string
    constructor(name: string) {
        this.name = name
    }

    say() {
        return `Hi. My name is ${this.name}.`
    }
}

const person = new Person("James")
console.log(person.say())

// private, public
// default => public
class Animal {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

const cat = new Animal("Kiki")
// Error Property 'name' is private and only accessible within class Animal
// cat.name
cat.getName() // No error

// extends
class AnotherAnimal {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    move(distance: number) {
        console.log(`${this.name} moved to ${distance}m.`)
    }
}

class Dog extends AnotherAnimal {
    makeSound() {
        console.log("!!!!")
    }
}

class Cat extends AnotherAnimal {
    makeSound() {
        console.log("~~~!")
    }
}

const dog2 = new Cat("Happy")
const cat2 = new Dog("Love")

dog2.move(10)
cat2.move(8)

dog2.makeSound()
cat2.makeSound()
