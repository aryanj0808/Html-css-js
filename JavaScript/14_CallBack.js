function myFunction() {

    let x = document.getElementById("demo").value;
    try {
        if(x.trim() == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x <= 10) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err) {
        alert( "Input is " + err);
    }
    
}