import React from "react";
import ReactAudioPlayer from "react-audio-player";

const Audiocard = (props) => {
  return (
    <>
      <div className="audiocard" style={{ marginRight:"80px"}} >
        <div class="card" style={{ width: "20rem" }}>
          <img
            style={{ width: "15rem", height: "10rem", objectFit: "contain" }}
            src={props.audio.iconUrl}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{props.audio.title}</h5>
            <p class="card-text">{props.audio.description}</p>
            <ReactAudioPlayer src={props.audio.file} controls />
          </div>
        </div>
      </div>
    </>
  );
};

export default Audiocard;
