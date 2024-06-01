function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array needs to have at least two elements";
    }

    let firstLargest = Math.max(...arr);

    const filteredArr = arr.filter(num => num !== firstLargest);

    if (filteredArr.length === 0) {
        return "No second largest element found";
    }

    let secondLargest = Math.max(...filteredArr);

    return secondLargest;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(findSecondLargest(arr)); 
