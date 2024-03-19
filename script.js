let numeroHtml = document.querySelector('.numeroP')
let pintas = document.querySelectorAll('.parrafo')
let arrayNumeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ]
let arrayPintas = ["♦", "♥", "♠", "♣"]

function random() {
    let aleatorio = Math.floor(Math.random() * 13)
    let pintaAleatoria = Math.floor(Math.random() * 4)
    numeroHtml.textContent = arrayNumeros[aleatorio]
    if(pintaAleatoria == 0 || pintaAleatoria == 1) {
        pintas[0].style.color = 'red'
        pintas[1].style.color = 'red'
    } else {
        pintas[0].style.color = 'black'
        pintas[1].style.color = 'black'
    }
    
    pintas[0].textContent = arrayPintas[pintaAleatoria]
    pintas[1].textContent = arrayPintas[pintaAleatoria]
   
}


