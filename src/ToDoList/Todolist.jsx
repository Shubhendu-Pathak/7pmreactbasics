import React from 'react'
import ToDoItem from './ToDoItem'

function Todolist({todos,setToDos,filteredData}) {
  return (
    <>
    {
     filteredData.map((todo)=>( 
      <ToDoItem
      key={todo.id}
      todo={todo}
      todos={todos}
      setToDos={setToDos}
      /> 
      ))
    }
    </>
  )
}

export default Todolist