// 추상 클래스는 다른 클래스들이 파생될 수 있는 기초 클래스.
// 인스턴스 불가능.
// abstract => abstract class or abstract method
// 구현은 파생 클래스에서 해야함.
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log("I can move!");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    // 슈퍼 클래스의 makeSound 구현해야함
    Dog.prototype.makeSound = function () {
        console.log(this.name + "!!");
    };
    Dog.prototype.move = function () {
        console.log("I can move ~!");
    };
    return Dog;
}(Animal));
// Error: Cannot create an instance of an abstract class
// const animal = new Animal("Error")
var dog = new Dog("Jindo");
dog.makeSound();
dog.move();
