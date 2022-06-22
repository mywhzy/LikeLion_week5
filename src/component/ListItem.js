import React, { useRef, useState } from "react";

function ListItem({id,text,deleteToDo}){
  const itemRef = useRef(null);

  let [checkedBox,setCheckedBox] = useState(false);

  function isChecked(e){
    checkedBox = e.target.checked;
    setCheckedBox(checkedBox);
  }

  function completedTodo(){
    if(checkedBox){
      itemRef.current.className = 'checkedlist-item';
    }else{
      itemRef.current.className = 'list-item';
    }
  }

  function handleOnchange(e){
    isChecked(e);
    completedTodo();
  }

  function handleOnclick(){
    deleteToDo(id);
  }

  return(
    <div className="todo-lists">
      <li className="list-item" ref={itemRef}>
        <input type="checkbox" className="checked-list" id="check-box" onChange={handleOnchange} /> <label /*htmlFor="check-box"*//>
        {text}
        <input type="button" value="⨉" className="delete-btn" onClick={handleOnclick}></input>
      </li>
    </div>
  );
}

export default ListItem;
