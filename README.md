## TypeScript

## Type

```
Primitive type
    string
    boolean
    number
    null
    undefined
    symbol

Referece type
    object
    array
    ...
```

## function

```js
// input: string
// output: string
function world(name: string): string {
    return `Hello ${name}`
}
```

## interface

인터페이스를 활용하여 함수 및 Class의 Type을 체크하는데 용이할 것 같다.

```js
// 인터페이스는 일반적으로 타입 체크를 위해 사용된다.
// 변수, 함수, 클래스에 사용할 수 있다.
// 인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 비슷하지만
// 직접 인스턴스를 생성할 수 없고 모든 메소드는 추상 메소드이다.
// 추상 클래스의 추상 메소드와 달리 abstract 키워드를 사용할 수 없다.

interface Todo {
    id: number
    content: string
    completed: boolean
}
```

```js
class AnotherTo implements AnotherTodo {
    constructor(
        public id: number,
        public content: string,
        public completed: boolean
    ) {
        this.id = id
        this.content = content
        this.completed = completed
    }
}
```

## Class

접근 제어자

```
private
public
```

TypeScript에서는 기본적으로 public이 default이다.

```js
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
```

상속을 통해 부모의 속성을 자식이 전달받을 수 있다.

```js
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

```
