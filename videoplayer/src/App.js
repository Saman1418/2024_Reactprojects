import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostAPI from "./PostAPI";
import Videolist from "./Videolist";
import Playvideo from "./Playvideo";
import firebase from "./firebase";

function App() {
  const [playvideo, setPlayvideo] = useState(null);

  React.useEffect(() => {
    const msg = firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();

    }).then((data)=>{
      console.log("token",data)
    })
    
  })

  const onVideoSelect = (video) => {
    setPlayvideo(video);
  };
  console.log(playvideo);
  return (
    <>
      <Router>
        <Switch>
          <div className="App">
            <Route path="/" exact component={PostAPI} />
            <Route
              path="/videolist"
              exact
              component={() => <Videolist onVideoSelect={onVideoSelect} />}
            />
            <Route
              path="/playvideo"
              component={() => <Playvideo playvideo={playvideo} />}
            />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;


