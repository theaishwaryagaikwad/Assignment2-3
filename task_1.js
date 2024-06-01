function findNumber(arr) {

    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2;

    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    return expectedSum - actualSum;
}

const arr = [1, 2, 4, 6, 3, 7, 8];
console.log(findNumber(arr)); 
