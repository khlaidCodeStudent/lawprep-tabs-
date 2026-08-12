import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'

function App() {
let [todoList, setTodoList] = useState([])

  let saveToDoList=(event)=>{

    let todoname =event.target.todoname.value;
    if(!todoList.includes(todoname)){
    let finalList = [...todoList, todoname]
      setTodoList(finalList)
    }else{
      toast.error('To Do List already exists!', { position: "top-center" })
    }
    event.preventDefault();
  }
  let list=todoList.map((item, index)=>{
    return(
      <Todolistitem key={index} item={item}  indexnumber={index}
      todoList={todoList} setTodoList={setTodoList}
      />
    )
  })
  return (
   <div>
    <h1>To Do List</h1>
    <form onSubmit={saveToDoList}>
      <input type='text' name='todoname' placeholder='Enter a new task'></input><button>Save!</button>
    </form>
    <div className='outerdiv'>
        <ul>
              {list}
              
          </ul>
    </div>
  
    <ToastContainer />
   </div>
  )
}

export default App

function Todolistitem({ item , indexnumber, todoList, setTodoList } ) {
  let [status,setstatus]=useState(false)
  let deleteRow = () => {

    let updatedList = todoList.filter((_, i) => i !== indexnumber);
    setTodoList(updatedList);
  }
  let checkstauts=()=>{
   setstatus(!status);
  }
  return(

  <div>
      <li className={(status) ? 'completetodo':''}  onClick={checkstauts}>{indexnumber+1}. {item} <span onClick={deleteRow}>&times;</span></li>
  </div>
)
}
