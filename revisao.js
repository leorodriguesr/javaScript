        var n1 = Number(prompt('Digite um número: '));
        var n2 = Number(prompt('Digite outro número: '));
        var digitados = document.getElementById('numDigitados')
        digitados.innerHTML = `Os números digitados são ${n1} e ${n2}.<br/>`
        digitados.innerHTML += `O que quer fazer com eles? `
        var res = document.getElementById('res')
        
        
        function soma() {
            let s = n1 + n2
            res.innerHTML = s
        }
        
        function dividir() {
            let s = n1 / n2
            res.innerHTML = s
        }

        function multiplicar() {
            let s = n1 * n2
            res.innerHTML = s
        }

        function par() {
            let nums = [n1, n2]
            let pares = []
            for ( let i = 0; i < nums.length; i++ ) {
                if (nums[i] % 2 == 0) {
                    pares.push(nums[i]) 
                }   
            }
            
            res.innerHTML = pares
        }
        console.log(par)
        
        function impar() {
            let nums = [n1, n2]
            let impares = []
            for ( let i = 0; i < nums.length; i++ ) {
                if (nums[i] % 2 != 0) {
                    impares.push(nums[i])
                }   
            }
            
            res.innerHTML = impares
        }
        

