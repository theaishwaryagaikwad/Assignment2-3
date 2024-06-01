function countFrequencies(arr) {
    const frequencyMap = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
    }

    return frequencyMap;
}

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frequencies = countFrequencies(arr);
console.log(frequencies); 
