import React, { useState } from 'react'

function Demofv() {
    let [name,setname] = useState('')
    let [email,setemail] = useState('')
    let [nameError,setnameError] = useState(false)
    let [emailError,setemailError] = useState(false)
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

let handleName=(e)=>{
let name = e.target.value
setname(name)
if(name.length <= 3){
setnameError(true)
}else{
    setnameError(false)
}
}

let handleEmail =(e)=>{
let email = e.target.value

setemail(email)
if(!email.match(emailRegex)){
    setemailError(true)
}else{
    setemailError(false)
}
}

let handleSubmit =(e)=>{
e.preventDefault()
console.log({name,email});
}

  return (
    <div>
        <h1>Form Validation </h1>
        <form onSubmit={handleSubmit} >
          
          <div>
          <label htmlFor="">Enter Name</label>
            <input 
            type="text" 
            name="name" 
            id="" 
            value={name}
            onChange={handleName}
            required
            />
            <br/>
            {
                nameError ? <p style={{color:'red'}}>Name must be greater than 2 characters</p> : ''
            }
          </div>
          <br/>  <br/>  <br/>  <br/>  
          <div>
          <label htmlFor="">Enter Email</label>
            <input
             type="text"
              name="email" 
              id="" 
              value={email}
              onChange={handleEmail}
              
              />
              <br />
              {
                emailError ? <p style={{color:'red'}}>Invalid Email</p> : ''
            }
          </div>
          <br /><br /><br /><br />
          <input type="submit" value="Submit" />

        </form>
    </div>
  )
}

export default Demofv