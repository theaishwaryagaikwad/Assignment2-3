function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const intersectionSet = new Set();

    for (const num of set1) {
        if (set2.has(num)) {
            intersectionSet.add(num); 
        }
    }

    return Array.from(intersectionSet);
}

const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
console.log(intersection(arr1, arr2)); 
