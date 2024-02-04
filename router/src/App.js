import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,HashRouter } from "react-router-dom";
// import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Route1 from './page/Route1';
import Route2 from './page/Route2';
import Route3 from './page/Route3';
import Header from './page/Header';


function App() {
  return (
    <div className="App">
      <Router basename={'/test'}>
        <Header />
        <Switch>

          <Route path='/' exact component={Route1}/>
          <Route path='/route2' component={Route2}/>
          <Route path='/route3' component={Route3}/>
             
        

        </Switch>
      </Router>


    </div>
  );
}

export default App;
