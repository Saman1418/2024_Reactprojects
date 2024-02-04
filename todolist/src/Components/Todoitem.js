import React from "react";

const Todoitem = (props) => {
    return (
        <div>

            <div class="ui message">
                <div class="header">
                {props.item.title}
            </div>
                <p>{props.item.body}</p>
                <button className="ui button red " onClick={() => { props.onDelete(props.item) }} ><i class="trash icon"></i>
</button>

            </div>



            {/* <h3>{props.item.title}</h3>
            <p>{props.item.body}</p>
            <button onClick={() => { props.onDelete(props.item) }} >Delete</button> */}

        </div>
    )
}
export default Todoitem;
