import React, { useRef, useState } from "react";
import ListItem from "./ListItem";

function ToDo(){
  const inputRef = useRef(null);
  const [todos,setTodos] = useState([]);
  const [listNum,setListNum] = useState(0);

  function addToDoList(){
    if(inputRef.current.value){
      const newToDo = [...todos];
      newToDo.push(<ListItem id={setListNum(listNum+1)} text={inputRef.current.value}/>);
      setTodos(newToDo);
      inputRef.current.value ="";
    }
  }

  function submitTodo(e){
    e.preventDefault();
    addToDoList();
  }


  return(
    <div className="todo-component">
      <form className="todo-form" onSubmit={submitTodo}>
        <input type="text" className="input-todo" ref={inputRef} placeholder="Write a To Do and Press Enter or Click Btn" required />
        <input type="button" value="+" className="add-btn" onClick={addToDoList}></input>
      </form>
      <ul className="todo-list" value= {todos} >{todos}</ul>
    </div>
  );
}

export default ToDo;
