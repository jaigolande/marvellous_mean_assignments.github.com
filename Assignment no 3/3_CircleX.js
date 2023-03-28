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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(r) {
        return _super.call(this, r) || this;
    }
    CircleX.prototype.circumferenceOfCircle = function () {
        return 2 * this.pi * this.radius;
    };
    return CircleX;
}(CircleArea));
var obj1 = new CircleX(10);
console.log("Obj1 Area of circle : " + obj1.areaOfCircle());
console.log("Obj1 Circumference of circle : " + obj1.circumferenceOfCircle());
var obj2 = new CircleX(20);
console.log("Obj2 Area of circle : " + obj2.areaOfCircle());
console.log("Obj2 Circumference of circle : " + obj2.circumferenceOfCircle());
