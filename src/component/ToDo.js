import React, { useRef, useState } from "react";
import ListItem from "./ListItem";

function ToDo(){
  const inputRef = useRef(null);
  const [todos,setTodos] = useState([]);
  const [listNum,setListNum] = useState(0);

  function addToDoList(){
      const newToDo = {
        id: listNum,
        text : inputRef.current.value,
      }
      setTodos(todos.concat(newToDo));
      setListNum(listNum+1);
      inputRef.current.value = "";
      console.log(todos);
  }

  function submitTodo(e){
    e.preventDefault();
    addToDoList();
  }

  function deleteToDoList(id){
    setTodos(todos.filter((todo)=> todo.id !== id));
    console.log(todos);
  }


  return(
    <div className="todo-component">
      <form className="todo-form" onSubmit={submitTodo}>
        <input type="text" className="input-todo" ref={inputRef} placeholder="Write a To Do and Press Enter or Click Btn" required />
        <input type="button" value="+" className="add-btn" onClick={addToDoList}></input>
      </form>
      <ul className="todo-list" >{todos.map(todo=><ListItem key={todo.id} id={todo.id} text={todo.text} deleteToDo={deleteToDoList}/>)}</ul>
    </div>
  );
}

export default ToDo;
