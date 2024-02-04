import React, { useState, useEffect } from "react";
import axios from "axios";
const Api = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fdata = async () => {
      const response = await axios.get(
        "http://ec2-13-127-200-77.ap-south-1.compute.amazonaws.com:8000/"
      );
      setData(response.data);
    };
    fdata();
  }, []);

  console.log(datas);

  // console.log(typeof datas);

  

  return (
    <div className="api">

      <table>
        <thead>
          <tr>
            <th>key & Name</th>   
          </tr>
        </thead>

        { Object.values(datas).map((da)=> {
          return (
            <div>
            <tbody>
              <tr>
                
                <td>
                  {da.key}
                </td>
                <td>
                  {da.name}
                </td>
                
              </tr>
            </tbody>
            </div>
          );
        })}
      </table>

      {/* {Object.values(datas).map((da) => {
        return (
          <div Id={da.key} key={da.key}>
            <p>{da.name}</p>
          </div>
        );
      })} */}

      {/* Objects.values(datas).map */}
    </div>
  );
};

export default Api;
