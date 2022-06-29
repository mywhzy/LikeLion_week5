import styled from "styled-components";

const ToDoListItemBox = styled.div`
  font-size: 18px;
`;

const ListItemCheckBox = styled.input`
  margin-right: 10px;
  cursor: pointer;
  `;

const ListItem = styled.li`
  height: 35px;
  border-bottom: 1px solid rgb(114, 148, 250);
  margin: 2px;
  color:rgb(94, 140, 248);
  font-weight: bold;

  ${ListItemCheckBox}:checked &{
    text-decoration: line-through;
    color: rgb(144, 187, 247);
    font-weight: bold;
  }
`;

const ListItemDeleteBtn = styled.input`
  background-color: rgb(199, 220, 241);
  border: 2px solid rgb(134, 175, 251);
  color:rgb(42, 70, 249);
  border-radius: 5px;
  margin-left: 10px;
  height: 27px;
  width: 28px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  
  &:active{
    border:1px solid rgb(102, 149, 243);
  }
`;

function ToDoListItem({id,content,done,checkedTodo,deleteTodo}) {

  function handleOnchange(){  //함수명 겹쳐도 되나..?되도록이면 안 겹치는게 좋겠져???
    checkedTodo(id);
    console.log("클릭한 리스트의 체크 상태"+done);
  }
  
  function handleOnclick(){
    deleteTodo(id);
  }

  return (
    <ToDoListItemBox>
      <ListItem>
        <ListItemCheckBox type="checkbox" onChange={handleOnchange} />
        {content}
        <ListItemDeleteBtn type="button" value="⨉" onClick={handleOnclick}/>
      </ListItem>
    </ToDoListItemBox>
  );
}

export default ToDoListItem;
