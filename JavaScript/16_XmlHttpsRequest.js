function xmlHttpsRequest()
{
    const xhttp= new XMLHttpRequest();
    xhttp.onload =function()
    {
        document.getElementById("xml").innerHTML = this.responseText;
        console.log("Connection Successfully");
    }
    xhttp.open("GET", "16_demoText.txt");
    xhttp.send();
}