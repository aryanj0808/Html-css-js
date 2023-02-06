// import { createElement } from "react";
import "./ToDoList.css";
import EventHandler from "./Event";
// import {FontAwesomeIcons} from '@fortawesome/free-solid-svg-icons'
// import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
// import EventHandler from "./New";
// import EventDelete from "./Delete";
function ToDoList(){   
    
    return(
        <div className="container">
            <div id="newtask"><br></br>
                <input type="text" className="text-3xl " placeholder="Add Tasks" id="txtInput"/>

                <span id="push" onClick={EventHandler}>Add</span>
            </div>
            <div className="list" >
                <ul id="Uid">
                    {/* <li>Wake up early</li>
                    <li>Do exercise</li>
                    <li>Eat healthy food</li>
                    <li>Do study </li> */}
                </ul>
               {/* <FontAwesomeIcons icon={faTrashCan}></FontAwesomeIcons> */}
            </div>
        </div>
    
    );

}
export default ToDoList;
