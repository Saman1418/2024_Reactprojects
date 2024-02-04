import React from "react";
import Videoitem from "./Videoitem";
import Api from "./Api";

const Videolist = (props) =>{
    const API = Api(props.url)
    console.log(API)
    const show = API.map((video)=>{
        // return <Videoitem onVideoSelect={props.onVideoSelect} video={video}></Videoitem>
        return <Videoitem video={video}></Videoitem>
    })
    return(
        <div className="ui relaxed divided list">{show}</div>
        
    )
  
}
export default Videolist;



// const Videolist = (props) =>{
//     const show = props.videos.map((video)=>{
//         // return <Videoitem onVideoSelect={props.onVideoSelect} video={video}></Videoitem>
//         return <Videoitem video={video}></Videoitem>
//     })
//     return(
//         <div className="ui relaxed divided list">{show}</div>
//     )
// }
// export default Videolist;