import React, { useState } from "react";

const Dropdown = ({label, options, selected, onSelectedChange }) => {
    const [open,setOpen] = useState(false);
    const renderOptions = options.map((option) => {
        if (option.label === selected.label) {
            return null;
        }
        return (
            <div onClick={() => onSelectedChange(option)} key={option.color} className="item">
                {option.label}
            </div>
        )

    })

    return (
        <div className="ui form">
            <div className="field">
                <label className="lavel">{label}</label>
                <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open ? "visible active": ""}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? "visible transition": ""}`}>{renderOptions}</div>
                </div>
            </div>

        </div>

    )
}
export default Dropdown;
