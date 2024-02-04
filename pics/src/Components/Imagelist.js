import React from "react";

const Imagelist = (props) =>{
    const pics = props.images.map((image)=>{
        return <img key={image.id} src={image.urls.regular}/>
    })


    return(
        <div>{pics}</div>
    )
}

export default Imagelist;