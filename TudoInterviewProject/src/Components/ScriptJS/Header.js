import React from 'react'
import "../Stylecss/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Btn from './Btn';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__image" src="https://www.wishaffair.com/assets/logo-md.png" alt="wishaffair"/>
            </div>


            <div className="header__right">
                <p className="header__icon">Registry</p>
                <p className="header__icon">Website</p>
                <p className="header__icon">Planning Tools</p>
                <SearchIcon className="header__icon"/>
                <Btn className="header__btnRight" text="Start Registry" bgColor="#fabdb1"/>
                <p style={{marginLeft:"50px"}} className="header__icon help">Help</p>
                <Avatar src="https://ehonami.blob.core.windows.net/media/2016/02/ditch-this-man-zapper-to-increase-virility-800x600.jpg" className="header__icon"/>
                <ShoppingCartIcon className="header__icon"/>
                
            </div>

        </div>
    )
}

export default Header
