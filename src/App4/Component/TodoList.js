import React from 'react'
import Todo from './Todo'
export default function TodoList(props) {
    const {Todos,setTodos,FilterStatus}=props
    return (
        <>
            {
               FilterStatus.map(todo=> <Todo key={todo.id} Todos={Todos} todo={todo}  setTodos={setTodos}/>)
            }
          
        </>
    )
}
