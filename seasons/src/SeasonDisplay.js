import React from "react";

const Display = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter"
    }
    else {
        return lat > 0 ? "winter" : "summer"
    }

}

const SeasonDisplay = (props) => {
    const season = Display(props.lat, new Date().getMonth())
    console.log(season)
    const text = season === "winter" ? "very very cold weather " : "heat the beach guys"
    const icon = season === "winter" ? "snowflake" : "sun"
    return (
        <div>
            <i className={`massive ${icon} icon`} />
            <h1>{text}</h1>
            <i className={`massive ${icon} icon`} />
        </div>
    )
}
export default SeasonDisplay;