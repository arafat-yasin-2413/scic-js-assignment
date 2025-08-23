function checkPalindrome(str){
    var len = str.length;

    var i = 0;
    var j = len-1;

    while(i<j){
        if(str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
    
}


console.log(checkPalindrome("madam"));
console.log(checkPalindrome("hello"));