import React, { useState } from "react";
import axios from "axios";
import Videolist from "./Videolist";
import { useHistory } from "react-router";
import "./PostAPI.css";

const PostAPI = () => {
  let History = useHistory();
  //   const [values, setValues] = useState({
  //     username: "",
  //     password: "",
  //   });
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    let values = { email, password };
    console.log(values);
    History.push("/videolist");
    fetch("http://webapp.letspark.in/calicut/focusmall/api/login_user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(values),
    }).then((response) => {
      response.json().then((resp) => {
        console.log(resp);
      });
    });
  };
  return (
    <div className="postApi">
      <h3>Form</h3>
      <form className="postApi__form" onSubmit={submit}>
        <div className="postApi__field">
          {/* <label>Email:</label> */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={email}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="postApi__field">
          {/* <label>password:</label> */}
          <input
            type="password"
            placeholder="password"
            name="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <input className="btnnn" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default PostAPI;
