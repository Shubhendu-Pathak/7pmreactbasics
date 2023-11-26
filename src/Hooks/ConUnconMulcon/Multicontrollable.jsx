import React, { useState } from 'react'

function Multicontrollable() {
    let [a,seta] = useState(
        {username:'',myeamil:'',mypass:''}
    )

    let handlechange = (event)=>{
        seta(
            {...a, [event.target.name]: event.target.value}
        )
    }
   
  return (
  <>

  <input 
  type="text" 
  name="username" 
  id="" 
  placeholder='Username'
  value={a.username}
  onChange={handlechange}
  />
  <input 
  type="text" 
  name="myeamil" 
  id="" 
  placeholder='email'
  value={a.myeamil}
  onChange={handlechange}
  />
    <input 
  type="text" 
  name="mypass" 
  id="" 
  placeholder='password'
  value={a.mypass}
  onChange={handlechange}
  />

  </>
  )
}

export default Multicontrollable