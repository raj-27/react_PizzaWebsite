import React,{useState,useEffect}from "react";
import TodoInput from "./App4/Component/TodoInput"
import TodoList from "./App4/Component/TodoList"

export default function App4() {

  // State Variable
    let [InputText, setInputText] = useState('');
    let [Todos, setTodos] = useState([]);
    const [Status, setStatus] = useState('All');
    const [FilterStatus, setFilterStatus] = useState([]);


      // run once When the app start 
      useEffect(() => {
        getLocalTodos();
      }, [])

    // useEfffect

    useEffect(() => {
     filterHandler()
     saveToLocal()
    }, [Todos,Status])

    const filterHandler = ()=>{
      switch (Status){
        case 'complete':
          setFilterStatus(Todos.filter(todo=>todo.complete===true))
          break;
          case 'incomplete':
            setFilterStatus(Todos.filter(todo=>todo.complete===false))
            break;
        default:
          setFilterStatus(Todos);
          break;
      }
    };

    const saveToLocal=()=>{
      localStorage.setItem('Todos', JSON.stringify(Todos))
    };

    const getLocalTodos=()=>{
      if (localStorage.getItem('Todos')===null) {
        localStorage.setItem('Todos', JSON.stringify([]));
       }else {
         let local=JSON.parse(localStorage.getItem("Todos"));
         setTodos(local);
     }
    }
  return (
    <>
      <div className="container-fluid  bg-dark py-2">
        <div className="row">
          <div className="col-12 col-sm-7 col-md-6 col-lg-6 mx-auto">
            <TodoInput setInputText={setInputText} Todos={Todos} setTodos={setTodos} InputText={InputText} setStatus={setStatus}/>
            <TodoList Todos={Todos} setTodos={setTodos} FilterStatus={FilterStatus}/>
          </div>
        </div>
      </div>
    </>
  );
}
