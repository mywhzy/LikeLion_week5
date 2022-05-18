import React from "react";
import Clock from "./component/Clock";
import ToDo from "./component/ToDo";
import Title from "./component/Title";
import './ToDo.css';
import './Title.css';
import './Clock.css'

function App() {
  return (
    <div>
      <Clock />
      <Title title="To Do List"/>
      <ToDo />
    </div>
  );
}

export default App;
