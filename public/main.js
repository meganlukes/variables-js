function main() {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
  let numberOfCupsOfCoffee = 0 //I don't drink coffee
  let fullName = 'Megan Lukes'
  console.log(
    'My name is ${fullname} and I drink ${numberOfCupsOfCoffee} per day.'
  )
  const aboutMe = {
    fullname: 'Megan Lukes',
    luckyNumber: 5,
    favoriteMovies: ['Gladiator', 'The Return of the King', 'The Dark Knight'],
  }
  userName = window.prompt('What is your name?')
  console.log(
    `Hello ${userName}. Do you like Lord of the Rings? Actually don't answer that. If you don't I will respect you less.`
  )
  firstOperand = parseFloat(window.prompt('Give me a number'))
  secondOperand = parseFloat(window.prompt('Give me another number'))
  sum = firstOperand + secondOperand
  difference = firstOperand - secondOperand
  product = firstOperand * secondOperand
  quotient = firstOperand / secondOperand
  remainder = firstOperand % secondOperand
}

document.addEventListener('DOMContentLoaded', main)
