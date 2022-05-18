import React, { useRef, useState } from "react";
import ListItem from "./ListItem";

function ToDo(){
  const toDoInput = useRef(null);

  const [todos,setTodos] = useState([]);
  let [listNum,setListNum] = useState(0);

  function addToDoList(){
    if(toDoInput.current.value){
      const newToDo = [...todos];
      newToDo.push(<ListItem id={setListNum(listNum++)} text={toDoInput.current.value}/>);
      setTodos(newToDo);
      toDoInput.current.value ="";
    }
  }

  function submitTodo(e){
    e.preventDefault();
    addToDoList();
  }


  return(
    <div className="todo-component">
      <form className="todo-form" onSubmit={submitTodo}>
        <input type="text" className="input-todo" ref={toDoInput} placeholder="Write a To Do and Press Enter or Click Btn" required />
        <input type="button" value="+" className="add-btn" onClick={addToDoList}></input>
      </form>
      <ul className="todo-list" >{todos}</ul>
    </div>
  );
}

export default ToDo;
