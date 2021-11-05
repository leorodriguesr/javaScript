function parImpar(n1, n2, n3, n4) {
    /* let impar = [];
    if (n1 % 2 != 0) {
        impar.push(n1)
    } 
    if (n2 % 2 != 0) {
        impar.push(n2)
    }
    if (n3 % 2 != 0) {
        impar.push(n3)
    }
    if (n4 % 2 != 0) {
        impar.push(n4)
    }
    return impar() */





    let numbers = [n1, n2, n3, n4]

    let impar = []

    for ( let n = 0; n <= numbers.length; n++) {
        if ( n % 2 != 0) {
            impar.push(n)
        }
        
    }
    return impar
}
console.log(parImpar(8, 9, 10, 11))