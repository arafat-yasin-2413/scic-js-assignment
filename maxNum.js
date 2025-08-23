function maximumNumber (arr) {
    var maxElement = arr[0];
    var len = arr.length;

    for(var i = 1; i<len; i++) {
        if(arr[i] >= maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;

}


console.log(maximumNumber([5, 1, 9, 3]));