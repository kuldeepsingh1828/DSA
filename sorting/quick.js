//quick sort
function quickSort(arr, low=0, high=n-1){
    if(low<high){
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
    return arr;
}

function partition(arr, left,right){
    let pivot = arr[right];
    let i = left-1;

    for(let j = left; j<right; j++){
        if(arr[j]<pivot){
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1,right);
    return i+1;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [5 , 1, 2, 4 , 3];
let n = arr.length;
let newarr = quickSort(arr, 0, n-1);
console.log(newarr.toString());