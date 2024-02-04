import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={"/"}>
                <button>API</button>
            </Link>
            <Link to={"/form"}>
            <button>Form</button>
            </Link>
            <Link to={"/card"}>
            <button>card</button>
            </Link>
            
        </div>
    )
}

export default Header
