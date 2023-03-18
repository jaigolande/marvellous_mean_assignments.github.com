
function MaxValueInArray(arr1:number[]){
    var Max = arr1[0]
    var i = 0;
    
    for ( i=1 ; i <arr1.length; i++){
        if ( arr1[i]>Max){
            Max = arr1[i]
        }
    }
}

var arr1 : number[] = [23,89,6,29,56,45,77,32]
var Maximum = MaxValueInArray(arr1)
console.log(Maximum);

