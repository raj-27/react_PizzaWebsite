import React from "react";
import '../Component Css/Todo.css'
export default function Todo({setTodos, Todos, todo}) {

  const deleteTodo = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodos(Todos.filter(ele => ele.id!==todo.id));
  };

  const checkTodo = () => {
    setTodos(
      Todos.map(item=>{
        if (item.id===todo.id) {
          return{
            ...item,
            complete:!item.complete,
          };
        }
        return item;
    })
    );
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between bg-light px-2 py-2 my-1 rounded">
        <h4 className={`my-auto d-block ${todo.complete?"complete":"incomplete"}`}>{todo.text}</h4>
        <div className="btns">
          <button className="btn btn-success mx-1">
            <i className="uil uil-check" onClick={checkTodo}></i>
          </button>
          <button className="btn btn-danger mx-1" onClick={deleteTodo}>
            <i className="uil uil-trash-alt"></i>
          </button>
        </div>
      </div>
    </>
  );
}
