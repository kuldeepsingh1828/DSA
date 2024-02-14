for(var i =1; i<=10;i++){
    console.log(i);
}

//function recursion
function printArray(n){
    console.log(n);
    if(n==10){
        return;
    }
    printArray(++n);
}
//function recursion
function printArray(n){
    console.log(n);
    return n==10 ? undefined   : printArray(++n);
}

printArray(1);