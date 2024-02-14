//function to return the sorted array using bubble sort
function bubbleSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        console.log(arr.toString());
    }
    return arr;
}
let newarr = bubbleSort([1, 7 ,5 ,8, 9, 10, 6 ,3 ,4,2]);
console.log("END SORTED>>>>>");
console.log(newarr.toString());