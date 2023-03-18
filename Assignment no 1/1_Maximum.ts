
function Maximum ( no1: number, no2: number, no3: number)
{
    if (no1>=no2 && no1>=no3)
    {
        return no1; 
    } else if ( no2>=no1 && no2>=no3)
    {
        return no2;
    } else
    {
        return no3;
    }

}

var MaxValue : number = 0;

MaxValue = Maximum(23,6,89)

console.log(MaxValue);
