let num = [ 8, 1, 7, 4, 2, 9]
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/
/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

*/
for(let pos in num) {                      //para cada posição na variável composto num. Esse FOR IN, só funciona para arrays e objetos.
    console.log(num[pos])                  //vou mostrar a posição dentro da variável.     
}

