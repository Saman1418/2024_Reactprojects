import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={"/"}>
                <p>route1</p>
            </Link>
            <Link to={"/route2"}>
                <p>route2</p>
            </Link>
            <Link to={"/route3"}>
                <p>route3</p>
            </Link>
        </div>
    )
}

export default Header
