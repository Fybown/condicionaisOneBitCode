let pilotName = prompt('Qual o nome do piloto?')
let velocity = 0
let newVelocity = prompt('A que velocidade gostaria de acelerar a nave?')
let confirmVelocity = confirm(
  'A velocidade selecionada é ' + newVelocity + ' km/s?'
)

if (confirmVelocity) {
  velocity = newVelocity
}

if (newVelocity <= 0) {
  alert('Nave está parada. Considere partir e aumentar a velocidade')
} else if (newVelocity < 40) {
  alert('Você está devagar, podemos aumentar mais')
} else if (newVelocity >= 40 && newVelocity < 80) {
  alert('Parece uma boa velocidade para manter')
} else if (newVelocity >= 80 && newVelocity < 100) {
  alert('Velocidade alta. Considere diminuir.')
} else {
  alert('Velocidade perigosa. Controle automático forçado!')
}

alert(
  'Nome do piloto ' + pilotName + '\n\nVelocidade atual ' + newVelocity + 'km/s'
)
