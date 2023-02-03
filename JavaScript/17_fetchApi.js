request("16_demoText.txt");

async function request(file){

    let myObj =await fetch(file);
    let myText = await myObj.text();
    document.getElementById("fetch").innerHTML=myText;
    console.log("Connection Successfully");
}