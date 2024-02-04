import React, { useState } from "react";
// import Header from "./Components/Header"
import Todo from "./Components/Todo"
import Addtodo from "./Components/Addtodo"

const App = () => {
    const onDelete = (item) => {
        console.log("this is delete", item)
        setList(list.filter((e) => {
            return e !== item;
        }))
    }

    const addTodo = (tit, desc) => {
        // console.log("add it", tit, desc)
        const myTodo = {
            title: tit,
            body: desc
        }
        setList([...list,myTodo])
        console.log(list)

    }


    const [list, setList] = useState([


        // {
        //     title: "market",
        //     body: "buy some product from there"
        // },

        // {
        //     title: "Shop",
        //     body: "collect money"
        // },

        // {
        //     title: "home party",
        //     body: "invite friends"
        // },
    ])
    return (
        <>
            <h1>Add a Todo</h1>
            <Addtodo addTodo={addTodo} />
            <br></br>
            {/* <Header/> */}
            <Todo list={list} onDelete={onDelete} />
        </>
    )
}
export default App;
