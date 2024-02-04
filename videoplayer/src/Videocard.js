import React from "react";
import "./Videocard.css";
import { Avatar } from "@material-ui/core";
import { Link} from "react-router-dom";


const Videocard = (props) => {
  const audios= [
    {
    title:"My Background",
    description:"A very unique background tune ideal for corporate videos",
    iconUrl:"https://artisticyoga.s3.ap-southeast-1.amazonaws.com/Ay_Web/icons/audio-waves.png",
    file:"https://artisticyoga.s3.ap-southeast-1.amazonaws.com/Ay_Web/CV+Gen+Background+Tune+Mp3.mp3"
    },
    
    {
    title:"Smooth Tune",
    description:"Use this tune in ur videos for a smooth effect on users brain.",
    iconUrl:"https://artisticyoga.s3.ap-southeast-1.amazonaws.com/Ay_Web/icons/mic.png",
    file:"https://artisticyoga.s3.ap-southeast-1.amazonaws.com/Ay_Web/CV+Gen+Background+Tune+Mpeg.mpeg"
    },
    
    ]
  return (
    <>
      <Link to={"/playvideo"}>
    <div
      className="videoCard"
      onClick={()=>{props.onVideoSelect(props.vid)}}
    >
      <img className="videoCard__thubnail" src={props.vid.video.imageUrl} alt="video" />

      <div className="videoCard__info">
        <Avatar className="videoCard__Avatar" src={props.vid.video.imageUrl} />

        <div className="videoCard__text">
          <h4>{props.vid.video.benefit}</h4>
          <p>{props.vid.video.description}</p>
          <p>view * {props.vid.video.duration}</p>
        </div>
      </div>
      
      
    </div>
    </Link>
    
    </>
  );
};

export default Videocard;
