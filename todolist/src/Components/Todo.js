import React from "react";
import Todoitem from "./Todoitem";

const Todo = (props) => {
    return (
        <>
            
            {props.list.length===0 ? "No todo to display":
            props.list.map((item) => {
                return (
                    <>
                    <Todoitem item={item} key={item.sno} onDelete={props.onDelete}/>
                    <br></br>
                
                    </>
                )
            })}
        </>
    )
}
export default Todo;
