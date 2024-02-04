
import React, { useState, useEffect } from "react";
import axios from "axios";
const Api = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fdata = async () => {
        const response = await axios.get("http://ec2-13-127-200-77.ap-south-1.compute.amazonaws.com:8000/",{
            params:{
                key:15
            }
        });
      setData(response.data);
      
    };
    fdata();
  }, []);

return(
    <div className="api">
  {Object.values(datas).map((da)=>{
    return(
      <div Id={da.key} key={da.key}>

      <p>{da.name}</p>
      </div>
    ) 
  })}
  

  </div>
)
};

export default Api;
