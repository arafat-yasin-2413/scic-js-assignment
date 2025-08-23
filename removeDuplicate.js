function removeDuplicate (arr){
    var uniqueArr = [];

    var lenOfArr = arr.length;
    
    for(var i = 0; i<lenOfArr; i++) {
        
        var isExist = false;
        var lenOfUniqueArr = uniqueArr.length;
        
        for (var j = 0 ; j<lenOfUniqueArr; j++){
            if(uniqueArr[j] === arr[i]){
                isExist = true;
                break;
            }
        }
        if(isExist === false) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}


console.log(removeDuplicate([1,2,2,3,4,4]));