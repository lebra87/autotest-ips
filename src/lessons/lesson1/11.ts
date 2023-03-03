const operation = function (number1: number, number2: number) {
    console.log(number1 / number2)
}

const calc = setTimeout(operation, 1000, 1, 2)
