// import React, { useState } from "react";
// import API from "./API";
// import India from "./India";
// import State from "./State";

// const Stateselector = () => {
//     const [sChange,setsChange] = useState("")
//     const APIS1 = API("https://covid19.mathdro.id/api/countries/india/confirmed");
//     console.log(APIS1)
//     if (!APIS1) {
//         return "loading.."
//     }
//     return (
//         // <div>saman</div>
//         <div>
//             <div>
//                 <h2>recent state is {sChange}</h2>
//                 <select
//                     onChange={e => { setsChange(e.target.value) }}
//                     class="ui fluid search dropdown">
//                     {APIS1.data.map((only1) => {
//                         return <option >
//                             {only1.provinceState}
//                         </option>
//                     })}
//                 </select>
//                 {/* <India url="https://covid19.mathdro.id/api/countries/USA"></India> */}
//                 {/* <State url="https://covid19.mathdro.id/api/countries/india/confirmed"></State> */}
//             </div>
//         </div>
//     )

// }
// export default Stateselector;