import React from "react";
import Basicform from "./Components/Basicform"
import Card from "./Components/Card"

const App = () =>{
    return(
        <div className="App">
                
            <Basicform></Basicform>
            <Card></Card>
            {/* <center><h2>Login Form</h2></center> */}
        </div>
    )
}
export default App;