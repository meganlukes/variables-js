function main() {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
  let numberOfCupsOfCoffee = 0 //I don't drink coffee
  let fullName = 'Megan Lukes'
  console.log(
    `My name is ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee per day.`
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
  //Math
  firstOperand = parseFloat(window.prompt('Give me a number'))
  secondOperand = parseFloat(window.prompt('Give me another number'))
  sum = firstOperand + secondOperand
  difference = firstOperand - secondOperand
  product = firstOperand * secondOperand
  quotient = firstOperand / secondOperand
  remainder = firstOperand % secondOperand
  console.log(`The sum of ${firstOperand} and ${secondOperand} is ${sum}`)
  console.log(
    `The difference between ${firstOperand} and ${secondOperand} is ${difference}`
  )
  console.log(
    `The product of ${firstOperand} and ${secondOperand} is ${product}`
  )
  console.log(
    `The quotient of ${firstOperand} and ${secondOperand} is ${quotient}`
  )
  console.log(
    `The remainder of ${firstOperand} divided by ${secondOperand} is ${remainder}`
  )
  //Arrays
  let numbers = [
    20951, 12296, 20680, 46335, 34961, 43430, 16324, 21376, 48508, 37213, 41775,
    22504, 13824, 31108, 19375, 49340, 14297, 31110, 22528, 48427, 39410, 31136,
    11646, 32473, 40138, 26931, 30622, 46364, 17838, 49299, 29769, 20381, 47519,
    10729, 30850, 17846, 43178, 46233, 23641, 20809, 45492, 44529, 29920, 25204,
    42060, 12709, 28439, 35457, 29394, 15167, 33417, 20875, 14042, 43996, 45826,
    22437, 48970, 17061, 41032, 19615, 25111, 38123, 10661, 21979, 33980, 47998,
    35541, 44972, 11845, 36648, 23703, 14715, 36355, 49504, 16027, 29177, 29288,
    31039, 34581, 29148, 28842, 35116, 44370, 29211, 32918, 45537, 41682, 20036,
    35070, 31115, 16275, 20368, 40692, 24823, 19566, 28977, 17611, 16133, 32191,
    17273,
  ]
  let smallest = 99999
  let largest = 0
  let arraySum = 0
  let average = 0
  let sumOfOdd = 0
  let countOfEven = 0

  for (let i = 0; i < numbers.length; i++) {
    arraySum = arraySum + numbers[i]
    if (numbers[i] > largest) {
      largest = numbers[i]
    }
    if (numbers[i] < smallest) {
      smallest = numbers[i]
    }
    if (numbers[i] % 2 > 0) {
      sumOfOdd = sumOfOdd + numbers[i]
    }
    if (numbers[i] % 2 < 1) {
      countOfEven = countOfEven + 1
    }
  }
  average = arraySum / numbers.length
  properties = {
    smallest: smallest,
    largest: largest,
    sum: arraySum,
    average: average,
  }
}

document.addEventListener('DOMContentLoaded', main)
