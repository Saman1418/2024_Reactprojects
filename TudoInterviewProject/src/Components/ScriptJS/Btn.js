import React from 'react'
import "../Stylecss/Btn.css"

const Btn = ({text,bgColor,right,icon,overlap,zindex}) => {
    return (
        <button style={{backgroundColor: bgColor}} className={`button ${right && "right"} ${overlap && "overlap"} ${zindex && "zindex"}`}>{icon}{text}</button>
    )
}

export default Btn;
