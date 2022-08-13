// primitive type
// object, reference X
// primitive type => string, boolean, number, null, undefined, symbol

// primitive type

// string
let str: string = "hi"

// boolean
let isChecked: boolean = true

// number
let number: number = 6

// null
// 의도적으로 비어있게 만듬
let n: null = null

// undefined
// 값 할당이 안돼있음
let u: undefined = undefined

// typeof
typeof null // object
typeof undefined // 'undefined

// reference type

// object
function f(o: object): void {
    console.log(`Parameter ${o}'s type is object. This is function`)
}

const obj: { name: string; age: number; isCompleted: boolean } = {
    name: "John",
    age: 21,
    isCompleted: true,
}

// array
const arr: number[] = [1, 2, 3]
// generic
const arr2: Array<number> = [1, 2, 3]
const arr3: Array<number | boolean | object> = []
arr3.push(1)
arr3.push(true)
arr3.push(obj)
console.log(arr3)
