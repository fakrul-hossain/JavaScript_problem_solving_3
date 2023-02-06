function centimeterToMeter (centimeter ) {
    const totalMeter = centimeter / 100;
    return totalMeter;
}


const centimeter = 1000;
const result = centimeterToMeter(centimeter)
console.log(result,'Meter');