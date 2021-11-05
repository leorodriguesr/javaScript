function fatorial(n) {                   //Recursividade - chamar a função dentro da função.
    if ( n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))