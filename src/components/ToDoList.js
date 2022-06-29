import ToDoListItem from "./ToDoListItem";
import styled from "styled-components";


const ToDoListTopBox = styled.div`
  border-bottom: 3px double rgb(114, 148, 250);
  padding-bottom: 2px;
`;

const ToDoListCounter = styled.b`
  margin-left: 10px;
  color:rgb(83, 134, 253);
  font-size: 20px;
  border-radius: 5px;
  margin-top: 2px;
  font-style: italic;
`;

const ToDoListRestBtn = styled.input`
  margin-left: 472px;
  background-color: #8ebffb;
  border-radius: 5px;
  border: 2px solid rgb(99, 163, 246);
  color:rgb(93, 97, 101);
  height: 27px;`;

const ToDoListSet = styled.ul``;

function ToDoList({todos,counts,resetTodos,checkedTodo,deleteTodo}) {

  return (
    <>
    <ToDoListTopBox>
      <ToDoListCounter>To Do: {counts}</ToDoListCounter>
      <ToDoListRestBtn type ="button" value="List Reset" onClick={resetTodos}/>
    </ToDoListTopBox>
    <ToDoListSet>{todos.map(todo=><ToDoListItem key={todo.id} id={todo.id} content={todo.content} done={todo.done} checkedTodo={checkedTodo} deleteTodo={deleteTodo} />)}</ToDoListSet>
    </>
  );
}

export default ToDoList;
