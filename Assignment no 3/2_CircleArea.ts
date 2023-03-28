class CircleArea{
    radius : number = 0;
    pi : number = 3.14;

    constructor(r: number){
        this.radius=r;
    }

    areaOfCircle(){
        return this.radius * this.radius * this.pi;
    }
}

var obj1 = new CircleArea(10); 
console.log("Area of circle 1 : "+ obj1.areaOfCircle());


var obj2 = new CircleArea(20); 
console.log("Area of circle 2 : "+ obj2.areaOfCircle());


