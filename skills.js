function calculateNumbers(var1, var2)
{
    var sum = var1 + var2;
    var product = var1 * var2;
    var difference = var1 - var2;
    var quotient = var1 / var2;

    return [sum, product, difference, quotient];
}

console.log(calculateNumbers(10, 5));

let obj = [1,2,3];
let obj2 = [1, 1, 1];

//copy uniqu values from obj and obj2
let obj3 = [...obj,...obj2];
console.log(obj3);



