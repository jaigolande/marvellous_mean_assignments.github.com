
function ArraySummation(arr1:number[]){
    var sum = 0;
    
    for ( var i=0 ; i <arr1.length; i++){
        sum += arr1[i]
    }
    return sum
}

var arr1 : number[] 
arr1 =  [23,6,7,4,5,7]
var Summation = ArraySummation(arr1)
console.log("Addition is " +Summation);

