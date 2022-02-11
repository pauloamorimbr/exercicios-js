/*
Exibir os números entre zero e 100
*/

let sum = 0
let num = 9

for( let i = 0; i <= 100; i += 1 )
{
    sum = sum + i
    if( i % 2 == 0 )
    {
        console.log( i + " É PAR!" )
    }
    else
    {
        console.log( i + " É IMPAR!" )
    }    
}

console.log( sum )


/*
T = TRUE
F = FALSE

T || T = T
T || F = T
T && T = T
T && F = F
*/
