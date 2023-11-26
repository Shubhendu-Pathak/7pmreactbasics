import React, { useState } from 'react'

function Controllable() {
    let [txt,setxt] = useState('HorseMan')

    let handleChange = (event) => {
        // console.log(event);
        // console.log(event.target.value);
        setxt( event.target.value )
    }
  return (
    <>
    <input 
    type="text" 
    name="" 
    id="" 
    value={txt}
    // onChange={(event)=>{setxt(event.target.value)}}
    onChange={handleChange}
    />
    
    </>
  )
}

export default Controllable