var Arithmetic = /** @class */ (function () {
    function Arithmetic(no1, no2) {
        this.Number1 = no1;
        this.Number2 = no2;
    }
    Arithmetic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithmetic.prototype.Subtraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithmetic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithmetic;
}());
var Return = 0;
console.log("Obj1 results");
var obj1 = new Arithmetic(11, 10);
Return = obj1.Addition();
console.log("Add : " + Return);
Return = obj1.Subtraction();
console.log("Subtraction : " + Return);
Return = obj1.Multiplication();
console.log("Multiplication : " + Return);
Return = obj1.Division();
console.log("Division : " + Return);
console.log("Obj2 results");
var obj2 = new Arithmetic(50, 5);
Return = obj2.Addition();
console.log("Add : " + Return);
Return = obj2.Subtraction();
console.log("Subtraction : " + Return);
Return = obj2.Multiplication();
console.log("Multiplication : " + Return);
Return = obj2.Division();
console.log("Division : " + Return);
