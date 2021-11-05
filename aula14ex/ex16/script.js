function contar() {

    let ini = document.getElementsByName('inicio')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    console.log(fim.value)

    /*
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar'
        
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)                      //transforma o valor das variáveis para Number.
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo Inválido. Condiderando PASSO 1')
            p = 1
        }
        if ( i < f) {
            for (let c = i; c <= f; c += p ) {             //c += p ==> c = c +p
                res.innerHTML += `${c}, \u{1F449} `
            } 
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    */              
}
