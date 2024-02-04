import React, { useState } from "react";

const Accordion = (props) => {
    const [active, setActive] = useState(null);

    const onTitleClick = (index) => {
        setActive(index)
    }



    const ShowMap = props.Listitem.map((item, index) => {
        const Clickme = index === active ? "active" : " "

        return <React.Fragment key={item.title}>
            <div onClick={() => onTitleClick(index)} className={`title ${Clickme}`}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${Clickme}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })
    return (
        <div className="ui styled accordion">
            {ShowMap}
        </div>

    )
}
export default Accordion;