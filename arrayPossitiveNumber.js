function getPositiveNumbers(numbers) {
    let positiveNumber = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            break
        }
        positiveNumber.push(numbers[i])
    }
    return positiveNumber;
}

const numbers = [1, 2, 3, 6, -7, 5,]
const positiveNumber = getPositiveNumbers(numbers)
console.log(positiveNumber);