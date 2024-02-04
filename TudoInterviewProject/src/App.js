import React from 'react';
import './App.css';
import SideBar from './Components/ScriptJS/SideBar';
import Header from './Components/ScriptJS/Header';
import Form from './Components/ScriptJS/Form';
import BtnAlign from './Components/ScriptJS/BtnAlign';
import Footer from './Components/ScriptJS/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-1">
            <SideBar />
          </div>

          <div className="content col-6">
            <Form />
          </div>

          <div className="col-1">
            <BtnAlign />
          </div>
        </div>



      </div>

      <Footer />


    </div>
  );
}

export default App;
