// function to do linear search in an array
count = 0;
function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}

function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        count++;
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == key) {
            return mid;
        } else if (arr[mid] > key) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

console.time("linear-search");
index = linearSearch([3,4,5,6,7,8,9,10], 7);
console.timeEnd("linear-search");
if (index > -1) {
    console.log(`Value found at index ${index}`)
}
else {
    console.log(`Value NOT found`)
}
console.log("count",count);
count=0;
console.time("binary-search");
index = binarySearch([3,4,5,6,7,8,9,10], 7);
console.timeEnd("binary-search");

if (index > -1) {
    console.log(`Value found at index ${index}`)
}
else {
    console.log(`Value NOT found`)
}
console.log("count",count);