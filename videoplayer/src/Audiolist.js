import React from 'react'
import Audiocard from './Audiocard'

const Audiolist = () => {
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
        <div className="audiolist" style={{ display: "flex",margin:"40px"}}>
            {audios.map((audio)=>{
                return(
                    <>
                    <Audiocard audio={audio}/>
                    </>
                )
            })}
            
        </div>
    )
}

export default Audiolist
