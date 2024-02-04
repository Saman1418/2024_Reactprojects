import React,{useEffect,useState} from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import Videolist from "./Videolist";
import Detail from "./Detail";


// class App extends React.Component {
//     state = {video:[],Selectvideo:null}

//     onTermSubmit = async (term) =>{
//         const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{
//             params:{
//                 part: 'snippet', 
//                 type: 'video',
//                 maxResults: 5,
//                 key: "AIzaSyAVqhLo3BxIWGfbgUN_BqOhyOagGlIzNSE",
//                 q:term
//             }
//         })
//         this.setState({video:response.data.items})
//         console.log(this.video)

//     }
function App() {
    // const [video, setVideo] = useState([])

    // useEffect(() => {
    //     const showVideo = async () => {
    //         const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    //             params: {
    //                 part: 'snippet',
    //                 type: 'video',
    //                 maxResults: 20,
    //                 key: "AIzaSyAVqhLo3BxIWGfbgUN_BqOhyOagGlIzNSE",

    //             }
    //         })
    //         setVideo(response.data.items)
    //     }
    //     showVideo()
    //     console.log(video)
    // }, [])


    // onVideoSelect = (video) =>{
    //     this.setState({Selectvideo:video})
    // }


    // render() {
    return (
        <div className="ui container">
            {/* <SearchBar/> */}
            {/* <SearchBar onSubmits={this.onTermSubmit}/> */}
            {/* <Detail video={this.state.Selectvideo}></Detail> */}
            {/* <Videolist onVideoSelect={this.onVideoSelect} videos={this.state.video}></Videolist> */}
            {/* <Videolist videos={video}></Videolist> */}
            <Videolist url="https://www.googleapis.com/youtube/v3/search"></Videolist>
        </div>

    )
}
// }
export default App;
