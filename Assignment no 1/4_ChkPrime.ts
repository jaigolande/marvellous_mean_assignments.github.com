function ChkPrime(no: number) {
    var temp = no/2
    temp = ~~temp
    var i = 0;

    for (i = 2; i < temp; i++) {
        if (no % i == 0) {
            break;
        }
    }

    if (i == temp) {
        console.log("prime");
    }else{
        console.log(" not a prime");
        
    }
}

ChkPrime(11)

