import React from 'react'

function Form({inptext,setInpText,setStatus,todos,setToDos}) {

  let handleSubmit = (e) => {
    e.preventDefault()
   setToDos(
    [
      ...todos,{text:inptext,completed:false,id:Date.now()}
    ]
   )
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="" 
      id="" 
      className='form-control d-inline-block w-50' 
      placeholder='Search Something...'
      value={inptext}
      onChange={(e)=>setInpText(e.target.value)}
      />
      <button type='submit' className='btn btn-info'>Search</button>

<select 
className='form-select d-inline-block w-25 ms-5'
onChange={(e)=>setStatus(e.target.value)}
>
  <option defaultValue>Select Filter</option>
  <option value="all">All</option>
  <option value="completed">Completed</option>
  <option value="incompleted">Incompleted</option>
</select>

    </form>
    </>
  )
}

export default Form