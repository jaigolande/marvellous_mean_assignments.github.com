

class Arithmetic {
    Number1: number
    Number2: number

    constructor(no1: number, no2: number) {
        this.Number1 = no1;
        this.Number2 = no2;
    }

    Addition() {
        return  this.Number1 + this.Number2;
    }

    Subtraction() {
        return  this.Number1 - this.Number2;
    }

    Multiplication() {
        return  this.Number1 * this.Number2;
    }

    Division() {
        return  this.Number1 / this.Number2;
    }
}

var Return : number = 0;

console.log("Obj1 results");

var obj1 = new Arithmetic(11,10);
Return = obj1.Addition();
console.log("Add : "+Return);
Return = obj1.Subtraction();
console.log("Subtraction : "+Return);
Return = obj1.Multiplication();
console.log("Multiplication : "+Return);
Return = obj1.Division();
console.log("Division : "+Return);


console.log("Obj2 results");

var obj2 = new Arithmetic(50,5);
Return = obj2.Addition();
console.log("Add : "+Return);
Return = obj2.Subtraction();
console.log("Subtraction : "+Return);
Return = obj2.Multiplication();
console.log("Multiplication : "+Return);
Return = obj2.Division();
console.log("Division : "+Return);
