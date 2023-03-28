var CircleArea = /** @class */ (function () {
    function CircleArea(r) {
        this.radius = 0;
        this.pi = 3.14;
        this.radius = r;
    }
    CircleArea.prototype.areaOfCircle = function () {
        return this.radius * this.radius * this.pi;
    };
    return CircleArea;
}());
var obj1 = new CircleArea(10);
console.log("Area of circle 1 : " + obj1.areaOfCircle());
var obj2 = new CircleArea(20);
console.log("Area of circle 2 : " + obj2.areaOfCircle());
