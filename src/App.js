import React from "react";
import Clock from "./component/Clock";
import ToDo from "./component/ToDo";
import Title from "./component/Title";
import './ToDo.scss';
import './Clock.scss';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Clock />
      <Title title="To Do List"/>
      <ToDo />
    </div>
  );
}

export default App;
