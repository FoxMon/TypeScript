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

## Abstract

추상 클래스를 활용한 디자인 패턴 ( Template Method Pattern )

-   프로그램의 일부분을 서브 클래스로 캡슐화하여 전체 구조를 바꾸지 않고 특정 단계의 기능을 바꾸는 것을 **Design Pattern** 이라고 한다.

-   전체적인 알고리즘은 상위 클래스에서 구현하고 다른 부분은 하위 클래스에서 구현한다.

-   전체 구조는 유사하지만 부분적으로 다른 구문으로 구성된 메소드의 코드 중복을 최소화 할 수 있다.

```js
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
```

## Promise

```js
function fetchItems(test: string): Promise<string[]> {
    const items: string[] = ["a", "b", "c"]
    return new Promise<string[]>(function (resolve, reject) {
        if (test == "Error") {
            reject(new Error("Erorr!"))
        } else {
            resolve(items)
        }
    })
}

const promise = fetchItems("No")
promise
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))

```
