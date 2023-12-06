import React from 'react'
import cow from './todoitem.module.css'

function ToDoItem({todos,setToDos,todo}) {

  let deleteHandler =()=>{
setToDos(
  todos.filter((ele)=>ele.id !== todo.id)
)
  }

let handleComplete = () =>{
  setToDos(
    todos.map((item)=>{
      if(item.id === todo.id){
        return {
          ...item,completed:true
        }
      }else{
        return item
      }
    })
  )
}
let doneColor = todo.completed===true ? cow.doneitem : ''
  return (
    <div className=" m-5 w-50 d-flex ">
      <h3 style={{marginRight:'40px'}} className={doneColor}>{todo.text}</h3>
      <button onClick={handleComplete} className="btn btn-outline-success">DONE</button>
      <button onClick={deleteHandler} className="btn btn-outline-danger">Delete</button>
    </div>
  )
}

export default ToDoItem