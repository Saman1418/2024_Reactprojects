import React, { useState } from "react";
import { Player } from "video-react";
import Draggable from "react-draggable";
import Webcam from "react-webcam";
import "./Playvideo.css";

const Playvideo = ({ playvideo }) => {
  const [webcamPlaying, setwebcamPlaying] = useState(false);

  const startweb = () => {
    setwebcamPlaying(true);
  };

  const stopweb = () => {
    setwebcamPlaying(false);
  };
  return (
    <div className="playvideo">
      <div className="first_box">
        <div class="card" style={{ width: "44rem" }}>
          <Player
            className="videoCard__thubnail"
            playsInline
            fluid={false}
            width={700}
            height={500}
            src="https://artisticyoga.s3.ap-southeast-1.amazonaws.com/Ay_Web/CV+GEN+Preview.mp4"
          />
          <div class="card-body">
            <h5 class="card-title">{playvideo.video.name}</h5>
            <p class="card-text">
              {playvideo.video.description}
            </p>
           
          </div>
        </div>
      </div>

      {/* <Draggable> */}
      <div className="box">
        <div className="webcam">
          {webcamPlaying ? (
            <Draggable>{<Webcam height="320" width="320" />}</Draggable>
          ) : null}
        </div>
        {webcamPlaying ? (
          <button type="button" class="btn btn-danger" onClick={stopweb}>
            Stop WebCam
          </button>
        ) : (
          <button type="button" class="btn btn-success" onClick={startweb}>
            Start WebCam
          </button>
        )}
      </div>
      {/* </Draggable> */}
    </div>
  );
};

export default Playvideo;
