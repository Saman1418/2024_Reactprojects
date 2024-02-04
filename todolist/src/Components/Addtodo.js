import React, { useState } from "react";

const Addtodo = (props) => {
    const [tit, settit] = useState("")
    const [desc, setdesc] = useState("")

    const Submit = (e) => {
        e.preventDefault()
        if (!tit || !desc) {
            alert("plz fill it")
        }
        else {
            props.addTodo(tit, desc)
            settit("")
            setdesc("")
        }

        }

        return (
            <div>

                <form className="ui form" onSubmit={Submit}>
                    <div className="field">
                        <label>Todo Title</label>
                        <input type="text" name="first-name" value={tit} onChange={(e) => { settit(e.target.value) }} />
                    </div>
                    <div className="field">
                        <label>Todo Description</label>
                        <input type="text" name="last-name" value={desc} onChange={(e) => { setdesc(e.target.value) }} />
                    </div>

                    <button className="ui button green" type="submit">Add todo</button>
                </form>
            </div>
        )
    }
    export default Addtodo;