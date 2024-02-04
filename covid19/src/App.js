import React from "react";
import India from "./Component/India";
import State from "./Component/State";
// import Stateselector from "./Component/Stateselector";

const App = () => {
    // const Apps = API()
    return (
        <div>
            <h1 className="ui center aligned icon header">COVID-19 UPDATE OF INDIA <img src="https://disease.sh/assets/img/flags/in.png" height="30px" alt="" /></h1>
            <br></br>
            <br></br>
            <India url="https://covid19.mathdro.id/api/countries/india"></India>
            <br></br>
            <br></br>
            <br></br>
            {/* <Stateselector></Stateselector> */}
            <State url="https://covid19.mathdro.id/api/countries/india/confirmed"></State>

            

        </div>
    )
}
export default App;