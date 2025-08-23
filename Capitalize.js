function capitalizeWords(str){
    var wordsArr = str.split(" ");
    // console.log(wordsArr);

    var newArr = [];
    var len = wordsArr.length;
    // console.log(len);

    for(var i = 0; i<len; i++) {
        var singleWord = wordsArr[i];

        if(singleWord.length > 0) {
            var capitalizedWord = singleWord.charAt(0).toUpperCase() + singleWord.slice(1);
            newArr.push(capitalizedWord);
        }

    }

    return newArr.join(" ")
    
}



console.log(capitalizeWords("hello world"));