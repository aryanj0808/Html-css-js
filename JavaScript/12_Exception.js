function divideByZero(num){

    try{
        if(num=0) throw "not a number";
        Console.log(num=50/num);
        return;
    }
    catch(err){
        console.warn("we cannot divide number by zero");
    }

}

divideByZero(0);
divideByZero(58);