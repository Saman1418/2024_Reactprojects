import React from "react";
import API from "./API";
import CountUp from "react-countup"

const State = ({ url }) => {
    const APISS = API(url);
    if (!APISS) {
        return "loading.."
    }
    return (
        <div>
            <table class="ui selectable inverted table">
                <thead>
                    <tr>
                        <th>State Name</th>
                        <th>confirmed Case</th>
                        <th>Active Case</th>
                        <th>Total Deaths</th>

                    </tr>
                </thead>

                {APISS.data.map((only11)=>{
                    return(
                        
                <tbody>
                    <tr>
                        <td>{only11.provinceState}</td>
                        <td><CountUp start={0} end={only11.confirmed} duration={2.5} separator={","}/></td>
                        <td><CountUp start={0} end={only11.active} duration={2.5} separator={","}/></td>
                        <td><CountUp start={0} end={only11.deaths} duration={2.5} separator={","}/></td>
                    </tr>
                </tbody>

                    )
                })}

            </table>




        </div>
    )
}
export default State;