var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.say = function () {
        return "Hi. My name is ".concat(this.name, ".");
    };
    return Person;
}());
var person = new Person("James");
console.log(person.say());
// private, public
// default => public
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var cat = new Animal("Kiki");
// Error Property 'name' is private and only accessible within class Animal
// cat.name
cat.getName(); // No error
// extends
var AnotherAnimal = /** @class */ (function () {
    function AnotherAnimal(name) {
        this.name = name;
    }
    AnotherAnimal.prototype.move = function (distance) {
        console.log("".concat(this.name, " moved to ").concat(distance, "m."));
    };
    return AnotherAnimal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("!!!!");
    };
    return Dog;
}(AnotherAnimal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("~~~!");
    };
    return Cat;
}(AnotherAnimal));
var dog2 = new Cat("Happy");
var cat2 = new Dog("Love");
dog2.move(10);
cat2.move(8);
dog2.makeSound();
cat2.makeSound();
