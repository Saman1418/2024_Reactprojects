import React from 'react'
import "../Stylecss/SideBar.css"

const SideBar = () => {
    return (
        <div class="sidebar">
            <p className="faid">Settings</p>
            <p>{"<"} Back Home</p>
            <a class="active" href="#">Personal Details</a>
            <a href="#">Wedding Details</a>
            <a href="#">Account Mgmt</a>
            <a href="#">Payment Settings</a>
            <a href="#">Shipping details</a>
            <a href="#">Email Details</a>
            <a href="#">Orders</a>
            <a href="#">Add Nominiees</a>
            <a href="#">offers</a>
            <a href="#">Bonic Acc Details</a>
            
        </div>
    )
}

export default SideBar;
