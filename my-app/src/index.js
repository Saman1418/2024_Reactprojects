import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Comments from "./Comments";
import faker from "faker";
import ApprovalCard from './ApprovalCard';


const App = () => {


  return (

    <div className="ui container comments">
      <ApprovalCard>
        <Comments author="sam" dates="Today date is 8:00pm" texts="nice bro!!" imgs={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <Comments author="RS" dates="Today date is 8:40pm" texts="i like it" imgs={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <Comments author="RS" dates="Today date is 8:40pm" texts="i like it" imgs={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <Comments author="RS" dates="Today date is 8:40pm" texts="i like it" imgs={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>

        <Comments author="riya" dates="Today date is 4:50pm" texts="very good video" imgs={faker.image.avatar()} />
      </ApprovalCard>







    </div>
  );
};


ReactDOM.render(<App></App>, document.getElementById('root'));

