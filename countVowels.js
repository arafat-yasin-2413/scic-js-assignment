function countVowels (str){
    var cnt = 0;
    var len = str.length;

    // console.log(len);

    for (var i = 0; i<len; i++){
        if(str[i] === 'a' || str[i] === 'A'){
            cnt++;
        }
        else if(str[i] === 'e' || str[i] === 'E'){
            cnt++;
        }
        else if(str[i] === 'i' || str[i] === 'I'){
            cnt++;
        }
        else if(str[i] === 'o' || str[i] === 'O'){
            cnt++;
        }
        else if(str[i] === 'u' || str[i] === 'U'){
            cnt++;
        }
    }

    return cnt;
}

var totalVowels = countVowels("programming");
console.log(totalVowels);