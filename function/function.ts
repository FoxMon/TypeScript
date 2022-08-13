// 함수 선언식
function world(name: string): string {
    return `Hello ${name}`
}

// 함수 표현식
const hello2 = (name: string): string => {
    return `Hello ${name}`
}

function buildName(firstName: string, lastName: string): string {
    return firstName + lastName
}

const first: string = buildName("Bob") // Error: Expected 2 arguments, but got 1
const first2: string = buildName("Bob", "Adams", "Lily") // Error: Expected 2 arguments, but got 3
const first3: string = buildName("Bob", "Adams") // No error
