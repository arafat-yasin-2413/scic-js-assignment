function pingPong(num){
    for (var i = 1 ; i<=num ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("PingPong");
        }
        else if(i % 3 === 0) {
            console.log("Ping");
        }
        else if(i % 5 === 0){
            console.log("Pong");
        }
        else{
            console.log(i);
        }
    }
}

pingPong(20);