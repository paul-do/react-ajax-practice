import App from "./App";
import Hacker from "./Hacker";
import React from 'react';

var MessageSubmit = (props) => (
  <button onClick={props.submitHandler}>Crush the assingnment!</button>
);

export default MessageSubmit;