function feetToInch (feet) {
    const totalInch = feet * 12;
    return totalInch;
}

const feet = 13;
const result = feetToInch(feet);
console.log(result, 'Feet');