function paperRequirements (firsBook, secondBook, thirdBook) {
    const totalPage= (firsBook * 100) + (secondBook * 200) + (thirdBook * 30);
    return totalPage;
}

const result = paperRequirements(4, 3, 2)
console.log(result);