let numeros = document.querySelectorAll('.numero')
let texto = document.querySelector('#texto')
let btnAccion = document.querySelectorAll('.accion')
const Limpiar = document.querySelector('.clear')
let primerNumero = 0;
let segundoNumero = 0;
let signo = ''
let acumulador = 0
let acumuladorM = 1
let primeraVez = true;
let aguardadoM = ''

numeros.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        texto.value += btn.value
    })
})

btnAccion.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        console.log(e)
        if(e.target.value == '+' || e.target.value == '-'
        || e.target.value == '/' || e.target.value == '*')
        {
            primerNumero = parseInt(texto.value)
            switch(e.target.value)
            {
                case '+':
                    acumulador = acumulador + primerNumero
                break;
                case '-':
                if(primeraVez)
                {
                    acumulador = primerNumero + Math.abs(acumulador)
                    primeraVez = false;
                }else if(acumulador >= 0)
                {
                    // console.log(acumulador, primerNumero)
                    acumulador = Math.abs(acumulador) - primerNumero
                }else{
                    // console.log(acumulador, primerNumero)
                    acumulador = acumulador - primerNumero
                }
                break;
                case '*':
                    acumuladorM = acumuladorM * primerNumero
                break;
                case '/':
                    if(primeraVez)
                    {
                        acumulador = primerNumero + acumulador
                        primeraVez = false;
                    }else{
                        acumulador = acumulador / primerNumero
                    }
                 
            }
            texto.value = ''
            signo = e.target.value

        }else if(e.target.value == '='){
            if(signo == '+'){
                segundoNumero = parseInt(texto.value)
                let resultado= acumulador + segundoNumero
                texto.value = resultado
            }
            else if(signo == '-')
            {
                segundoNumero = parseInt(texto.value)
                let resultado = acumulador - segundoNumero
                texto.value = resultado
            }
            else if(signo == '*')
            {
                segundoNumero = parseInt(texto.value)
                let resultado = acumuladorM * segundoNumero
                texto.value = resultado
            }
            else if(signo == '/')
            {
                segundoNumero = parseInt(texto.value)
                let resultado = acumulador / segundoNumero
                texto.value = resultado
                primeraVez = true
            }
            acumulador = 0
            acumuladorM = 1
        }
})
})

Limpiar.addEventListener('click', () => {
    texto.value = ''

})