function ChkArmstrong(num){
    var sum = 0
    while ( num>0){
        var m = num % 10 ;
        sum = sum + m * m * m 
        num = num /10
        num = ~~num
    }

    return sum 
}

var number1 = 154

var CalculatedNumber = ChkArmstrong(number1)

if (number1 === CalculatedNumber){
    console.log("Its a Armstrong Number");
} else {
    console.log("Its not Armstrong Number");
}