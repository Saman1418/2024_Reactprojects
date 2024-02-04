import React from 'react'
import "../style/Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    return (
        <div className="header">
            <h2>ShoppingCard</h2>        
            <ShoppingCartIcon className="shoppingCart"/>
        </div>
    )
}

export default Header
