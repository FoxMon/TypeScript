// 추상 클래스는 다른 클래스들이 파생될 수 있는 기초 클래스.
// 인스턴스 불가능.
// abstract => abstract class or abstract method
// 구현은 파생 클래스에서 해야함.

abstract class Animal {
    // 파생 클래스에서 접근 가능
    // 외부에서 접근 ㄴㄴ
    protected name: string

    constructor(name: string) {
        this.name = name
    }

    // 슈퍼 클래스인 Animal에서는 method 직접 구현 ㄴㄴ.
    abstract makeSound(): void

    move(): void {
        console.log("I can move!")
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }

    // 슈퍼 클래스의 makeSound 구현해야함
    makeSound(): void {
        console.log(this.name + "!!")
    }

    // 오버라이딩
    move() {
        console.log("I can move ~!")
    }
}

// Error: Cannot create an instance of an abstract class
// const animal = new Animal("Error")

const dog = new Dog("Jindo")
dog.makeSound()
dog.move()
