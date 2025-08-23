function findEven (arr){
    var evenArr = [];
    var len = arr.length;

    for(var i = 0; i<len; i++) {
        if(arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }

    return evenArr;

}


console.log(findEven([1,2,3,4,5,6]));