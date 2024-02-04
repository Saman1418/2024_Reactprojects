import React, { useEffect, useState } from "react";
import axios from "axios";

const API = (url) => {
    const [Idata, setIdata] = useState()
    useEffect(() => {
        const fetchAPI = async () => {
            console.log("saman")
            const data = await axios.get(url)
            setIdata(data)
            
        }
        fetchAPI();
    }, [])
    console.log(Idata)
    return Idata;



}

export default API;