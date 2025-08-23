function reverseString(str){
    var newString = "";
    var len = str.length;

    // console.log(len);

    for (var i = len-1; i>=0; i--) {
        newString += str[i];
    }

    return newString;
}


var resultString = reverseString("hello");
console.log(resultString);