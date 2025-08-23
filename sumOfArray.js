function sumOfArray (arr){
    var totalSum = 0;
    var len = arr.length;

    for(var i = 0; i<len; i++) {
        totalSum += arr[i];
    }

    return totalSum;

}


console.log(sumOfArray([1,2,3,4]));