function getFactorial(num){
    if(num<0) {
        return "Invalid input is given. Number should be >= 0"
    }

    var result = 1;

    for (var i = 1; i<= num ; i++){
        result = result * i;
    }

    return result;
}

console.log(getFactorial(5));