function divideByZero(num){

    try{
        if(num==0) throw "Cant divide by zero";
        console.log(num)
    }
    catch(err){
        console.log(err)
    }

}

divideByZero(0);
divideByZero(560);