const a1 = 50, a2 = 50, a3 = 80;
let teste = true;

teste = (a1 + a2 + a3) === 180;


function testeAngulo()
{
    let aux = true;

    if (a1 <= 0)
        aux = false;

    if (a2 <= 0)
        aux = false;

    if (a3 <= 0)
        aux = false;

    return aux;
}

if (!testeAngulo())
    console.log("Angulo negativo ou zero");
else if (!teste)
    console.log("False");
else
    console.log("True");