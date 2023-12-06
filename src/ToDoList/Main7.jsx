import React, { useEffect, useState } from 'react'
import Form from './Form'
import Todolist from './Todolist'

function Main7() {
  // for input 
  let [inptext,setInpText] = useState('')
  // for filter option
  const [status,setStatus] =useState('all')
  // for todo list data
const [todos,setToDos]=useState([])
//for filtered data
const [filteredData,setFilteredData] = useState([])

let filterHandler =()=>{
  switch(status){
    case 'completed':
      setFilteredData(
        todos.filter(todo=>todo.completed==true)
      )
      break;
      case 'incompleted':
        setFilteredData(
          todos.filter(todo=>todo.completed==false)
        )
        break;
        default:
          setFilteredData(todos)
  }
}

useEffect(()=>{
filterHandler()
},[status,todos])

  return (
    <div>
        <Form
        inptext={inptext}
        setInpText={setInpText}
        setStatus={setStatus}
        todos={todos}
        setToDos={setToDos}
        />
        <Todolist
        todos={todos}
        setToDos={setToDos}
        filteredData={filteredData}
        />
    </div>
  )
}

export default Main7