function EventHandler(){
    //********************************************* */
    var li = document.createElement("li");
    var inputValue = document.getElementById("txtInput").value;
    var intxt = document.createTextNode(inputValue);
    li.appendChild(intxt);
    if (inputValue === '') {
        alert("You need to add task");
      } else {
        document.getElementById("Uid").appendChild(li);
        // $('<input />', { type: 'checkbox'}).appendTo(li);
      }
    document.getElementById("txtInput").value = "";
    var checkbox = document.createElement('input');
    checkbox.className="checkbox";
    checkbox.type = "checkbox";
    // className="col-auto";
    li.appendChild(checkbox);
    
    var myNodelist = document.getElementsByTagName("LI");
    console.log(myNodelist)
    // if(myNodelist==intxt){

        
        
    var span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[(myNodelist.length)-1].appendChild(span);
        
    
    var close = document.getElementsByClassName("close");
        
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
        
    // }
    
        
}
export default EventHandler;