import React from 'react';
import "../Stylecss/InputField.css"
const InputField = ({label}) => {   
    return (
        <div className="inputField">
            <label for="exampleInputEmail1" class="form-label">{label}</label>
            <input type="text" class="form-control" id="exampleInputEmail1" />

        </div>
    )
}

export default InputField;
