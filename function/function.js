// 함수 선언식
function world(name) {
    return "Hello ".concat(name);
}
// 함수 표현식
var hello2 = function (name) {
    return "Hello ".concat(name);
};
function buildName(firstName, lastName) {
    return firstName + lastName;
}
var first = buildName("Bob"); // Error: Expected 2 arguments, but got 1
var first2 = buildName("Bob", "Adams", "Lily"); // Error: Expected 2 arguments, but got 3
var first3 = buildName("Bob", "Adams"); // No error
