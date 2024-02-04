import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search"
import Dropdown from "./Dropdown"
import Translater from "./Translater"
import Route from "./Route"
import Header from "./Header"



const items = [
    {
        title: "What is React",
        content: "React is a front end javascript framework"
    },

    {
        title: "why use React",
        content: "React is a favorite JS library among engineers",
    },

    {
        title: "How do react work",
        content: "We use React by creating components",
    },
]

const options = [
    {
        label: "This is red",
        color: "red"
    },
    {
        label: "I am blue like sky",
        color: "blue"
    },
    {
        label: "Eat me always i am green ",
        color: "green"
    },


]



const App = () => {
    const [selected, setSelected] = useState(options[0])

    return (
        
        <div>
            <Header></Header>


            <Route
                path="/">
                <Accordion Listitem={items}></Accordion>
            </Route>

            <Route
                path="/list">
                <Search></Search>
            </Route>

            <Route
                path="/Dropdown">
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}>

                </Dropdown>
            </Route>

            <Route
                path="/Translater">
                <Translater></Translater>
            </Route>
        </div>
    )
}

export default App;