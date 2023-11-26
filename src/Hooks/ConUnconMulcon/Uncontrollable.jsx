import React, { useRef } from 'react'

function Uncontrollable() {
    let inpRef = useRef(null)

function handleSubmit(e){
    e.preventDefault()
    // console.log(999);
    console.log(inpRef.current.value);
    inpRef.current.style.backgroundColor='aqua'
    inpRef.current.style.border='5px solid gray'
}

  return (
   <>
   <form onSubmit={handleSubmit}>
    <input type="text" name="" id="" ref={inpRef}/>
    <input type="submit" value="SUbmit" />
   </form>
   </>
  )
}

export default Uncontrollable