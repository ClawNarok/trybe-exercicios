const a = 1, b = 2, c = 3;

if (a > b)
    if (a > c)
        console.log(a + " é o maior");
    else
        console.log(c + " é o maior");
else
    if (b > c)
        console.log(b + " é o maior");
    else
        console.log(c + " é o maior");