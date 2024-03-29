// import "../VideoItem.css"
import React from "react";

const Videoitem = (props) => {
    return (
        // <div className="video-item item" onClick={() => props.onVideoSelect(props.video)}>
        <div className="video-item item">
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url}></img>
            <div className="content">
                <div className="header">{props.video.snippet.title}
                </div>
            </div>
        </div>
    )
}
export default Videoitem;