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
