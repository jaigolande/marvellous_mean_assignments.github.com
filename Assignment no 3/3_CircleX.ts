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

class CircleX extends CircleArea{

    constructor(r:number){
        super(r)
    }

    circumferenceOfCircle(){
        return 2 * this.pi * this.radius 
    }

}


var obj1 = new CircleX(10);
console.log("Obj1 Area of circle : " + obj1.areaOfCircle());
console.log("Obj1 Circumference of circle : " + obj1.circumferenceOfCircle());

var obj2 = new CircleX(20);
console.log("Obj2 Area of circle : " + obj2.areaOfCircle());
console.log("Obj2 Circumference of circle : " + obj2.circumferenceOfCircle());

