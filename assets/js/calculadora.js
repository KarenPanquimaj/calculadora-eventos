const uno = document.querySelector('#uno')
const dos = document.querySelector('#dos')
const tres = document.querySelector('#tres')
const clear = document.querySelector('#clear')
const cuatro = document.querySelector('#cuatro')
const cinco = document.querySelector('#cinco')
const seis = document.querySelector('#seis')
const menos = document.querySelector('#menos')
const siete = document.querySelector('#siete')
const ocho = document.querySelector('#ocho')
const nueve = document.querySelector('#nueve')
const suma = document.querySelector('#suma')
const division = document.querySelector('#division')
const cero = document.querySelector('#cero')
const multi = document.querySelector('#multi')
const igual = document.querySelector('#igual')
let numero = '0'
let numeroDos = '0'
let operador = ''

const calcular = document.querySelector('#calcular')

uno.addEventListener('click', () => {
    calcular.value += '1'
    
})

dos.addEventListener('click', () => {
    calcular.value += '2'
})

tres.addEventListener('click', () => {
    calcular.value += '3'
})

cuatro.addEventListener('click', () => {
    calcular.value += '4'
})

cinco.addEventListener('click', () => {
    calcular.value += '5'
})

seis.addEventListener('click', () => {
    calcular.value += '6'
})

siete.addEventListener('click', () => {
    calcular.value += '7'
})

ocho.addEventListener('click', () => {
    calcular.value += '8'
})

nueve.addEventListener('click', () => {
    calcular.value += '9'
})

cero.addEventListener('click', () => {
    calcular.value += '0'
})

menos.addEventListener('click', () => {
    numero = calcular.value
    calcular.value = ''
    operador = '-'
})

suma.addEventListener('click', () => {
    numero = calcular.value
    calcular.value = ''
    operador = '+'
})

division.addEventListener('click', () => {
    numero = calcular.value
    calcular.value = ''
    operador = '/'
})


multi.addEventListener('click', () => {
    numero = calcular.value
    calcular.value = ''
    operador = '*'
})

igual.addEventListener('click', () =>{
     numeroDos = calcular.value
    if(operador == '+')
    {
        resultado = parseInt(numero) + parseInt(numeroDos)
        calcular.value = resultado
    }else if(operador == '*'){
        resultado = parseInt(numero) * parseInt(numeroDos)
        calcular.value = resultado
    }else if(operador == '/'){
        resultado = parseInt(numero) / parseInt(numeroDos)
        calcular.value = resultado
    }else if(operador == '-'){
        resultado = parseInt(numero) - parseInt(numeroDos)
        calcular.value = resultado
    }
})

clear.addEventListener('click', () => {
    calcular.value = ''
})
