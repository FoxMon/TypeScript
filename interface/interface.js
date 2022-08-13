// 인터페이스는 일반적으로 타입 체크를 위해 사용된다.
// 변수, 함수, 클래스에 사용할 수 있다.
// 인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 비슷하지만
// 직접 인스턴스를 생성할 수 없고 모든 메소드는 추상 메소드이다.
// 추상 클래스의 추상 메소드와 달리 abstract 키워드를 사용할 수 없다.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// interface & var
var todo = {
    id: 1,
    content: "TypeScript",
    completed: false
};
var todos = [];
// interface & function parameter
function addTodo(todo) {
    todos = __spreadArray(__spreadArray([], todos, true), [todo], false);
}
var squareFunction = function (num) {
    return num * num;
};
var AnotherTo = /** @class */ (function () {
    function AnotherTo(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
    return AnotherTo;
}());
var anotherTo = new AnotherTo(1, "TypeScript", false);
console.log(anotherTo);
