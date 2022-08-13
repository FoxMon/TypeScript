// primitive type
// object, reference X
// primitive type => string, boolean, number, null, undefined, symbol
// primitive type
// string
var str = "hi";
// boolean
var isChecked = true;
// number
var number = 6;
// null
// 의도적으로 비어있게 만듬
var n = null;
// undefined
// 값 할당이 안돼있음
var u = undefined;
// typeof
typeof null; // object
typeof undefined; // 'undefined
// reference type
// object
function f(o) {
    console.log("Parameter ".concat(o, "'s type is object. This is function"));
}
// array
var arr = [1, 2, 3];
// generic
var arr2 = [1, 2, 3];
