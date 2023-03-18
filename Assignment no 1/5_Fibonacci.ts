

function Fibonacci(target) {
    var no1 = 1
    var no2 = 1
    console.log(no1);
    console.log(no2);
    var add = no1 + no2;
    while (add <= target) {
        console.log(add);

        no1 = no2;
        no2 = add
        add = no1 + no2
    }

}
Fibonacci(21)
