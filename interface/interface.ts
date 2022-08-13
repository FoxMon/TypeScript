// 인터페이스는 일반적으로 타입 체크를 위해 사용된다.
// 변수, 함수, 클래스에 사용할 수 있다.
// 인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 비슷하지만
// 직접 인스턴스를 생성할 수 없고 모든 메소드는 추상 메소드이다.
// 추상 클래스의 추상 메소드와 달리 abstract 키워드를 사용할 수 없다.

// 변수와 Interface

interface Todo {
    id: number
    content: string
    completed: boolean
}

// interface & var
const todo: Todo = {
    id: 1,
    content: "TypeScript",
    completed: false,
}

let todos: Todo[] = []

// interface & function parameter
function addTodo(todo: Todo): void {
    todos = [...todos, todo]
}

// interface & function
interface SquareFunction {
    // parameter type: number
    // return type: number
    (num: number): number
}

const squareFunction: SquareFunction = function (num: number): number {
    return num * num
}

// interface & class
interface AnotherTodo {
    id: number
    content: string
    completed: boolean
}

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

const anotherTo = new AnotherTo(1, "TypeScript", false)
console.log(anotherTo)
