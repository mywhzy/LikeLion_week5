import React, { useRef, useState } from "react";

function ListItem({text}){
  const checkedItem = useRef(null);
  const checkBox = useRef(null);
  const deleteSelected = useRef(null);

  let [checkedBox,setCheckedBox] = useState(false);
  let [deleteBtn,setDeleteBtn] = useState(false);

  function isChecked(e){
    checkedBox = e.target.checked;
    setCheckedBox(checkedBox);
  }

  function isClicked(e){
    deleteBtn = e.target.clicked;
    setDeleteBtn(deleteBtn);
  }

  function completedTodo(){
    if(checkedBox){
      checkedItem.current.style.textDecoration = "line-through";
      checkedItem.current.style.color = "rgb(144, 187, 247)";
    }else{
      checkedItem.current.style.textDecoration = "solid";
      checkedItem.current.style.color = "rgb(62, 113, 230)";
    }
  }

  function deleteTodo(){
    if(isClicked){
      checkedItem.current.remove();
    }
  }

  function hanldeOnchange(e){
    isChecked(e);
    completedTodo();
  }

  return(
    <div className="todo-lists">
      <li className="list-item" ref={checkedItem}>
        <input type="checkbox" className="checked-list" onChange={hanldeOnchange} ref={checkBox}/><label htmlFor="checked-list"/>
        {text}
        <input type="button" value="⨉" className="delete-list" ref={deleteSelected} onClick={deleteTodo}></input>
      </li>
    </div>
  );
}

export default ListItem;
