let numberOne = prompt('digite o primeiro numero')
let numberTwo = prompt('digite o segundo número')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`a soma dos 2 números é ${sum}`)
alert(`a subtração dos 2 números é ${sub}`)
alert(`a multiplicação dos 2 números é ${multi}`)
alert(`a divisão entre os 2 números é ${div}`)
alert(`o resto de divisão entre os 2 números é ${restDiv}`)

if (sum % 2 === 0) {
  alert(`a soma dos números ${numberOne} e ${numberTwo} é par.`)
} else {
  alert(`a soma dos números ${numberOne} e ${numberTwo} é impar.`)
}

if (numberOne == numberTwo) {
  alert(`os números inseridos são iguais. ${numberOne} = ${numberTwo}`)
} else {
  alert(`os números inseridos não são iguais. ${numberOne} != ${numberTwo}`)
}
