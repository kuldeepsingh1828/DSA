//MERGE SORT
function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    var mid=Math.floor(arr.length/2);
    var left=arr.slice(0,mid);
    var right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
    console.log("left: "+left.toString());
    console.log("right: "+right.toString());
    let mergeArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex<left.length && rightIndex<right.length){
        left[leftIndex]<right[rightIndex] ? mergeArray.push(left[leftIndex++]) : mergeArray.push(right[rightIndex++]);
    }

    while(leftIndex<left.length){
        mergeArray.push(left[leftIndex++]);
    }

    while(rightIndex<right.length){
        mergeArray.push(right[rightIndex++]);
    }

        return mergeArray;
}

let newarr = mergeSort([1, 7 ,5 ,8, 9, 10, 6 ,3 ,4,2]);

console.log(newarr.toString());