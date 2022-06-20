import React, { useRef, useState } from "react";

function ListItem({text}){
  const itemRef = useRef(null);

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
      itemRef.current.className = 'checkedlist-item';
    }else{
      itemRef.current.className = 'list-item';
    }
  }

  function deleteTodo(){
    if(isClicked){
      itemRef.current.remove();
    }
  }

  function handleOnchange(e){
    isChecked(e);
    completedTodo();
  }

  return(
    <div className="todo-lists">
      <li className="list-item" ref={itemRef}>
        <input type="checkbox" className="checked-list" onChange={handleOnchange} /><label htmlFor="checked-list"/>
        {text}
        <input type="button" value="⨉" className="delete-btn" onClick={deleteTodo}></input>
      </li>
    </div>
  );
}

export default ListItem;
