import axios from 'axios';
import React, { useState } from 'react'

function Main5() {
    let [ data,setData] = useState(
        { name:'',username:'',email:'',password:'' }
        )
        // console.log(data);

let handleChange = (event) =>{
setData(
    {...data, [event.target.name]:event.target.value}
)
}

let getData = ()=>{
fetch('http://localhost:4000/users')
.then((result)=>{
   result.json().then(val=>console.log(val)) 
})
}

let postData = ()=>{
   fetch('http://localhost:4000/users',{
    method:'POST',
    headers:{
        'Content-type':"application/json"
    },
    body:JSON.stringify(data)
   })
    }

    let putData = async()=>{
        await axios
        .put('http://localhost:4000/users/1',data) 
        .then(response=>console.log(response))
        }

    let patchData = async()=>{
            await axios
            .patch('http://localhost:4000/users/2',data) 
            .then(response=>console.log(response))
            }
    

  return (
   <>
   <input 
   type="text" 
   placeholder='Name'
   name='name'
   value={data.name}
   onChange={handleChange}
   />

   <input 
   type="text" 
   placeholder='UserName'
name='username'
value={data.username}
onChange={handleChange}
   />

   <input 
   type="text" 
   placeholder='Email'
name='email'
value={data.email}
onChange={handleChange}
   />

   <input 
   type="text" 
   placeholder='Passsword'
   name='password'
   value={data.password}
   onChange={handleChange}
   />
  
  {/* <button onClick={()=>console.log(data)}>Get Data</button> */}
  {/* <button onClick={getData}>Get Data</button> */}
  <button onClick={postData}>Psot Data</button>
  {/* <button onClick={putData}>Put Data</button> */}
  {/* <button onClick={patchData}>Patch Data</button> */}
   </>
  )
}

export default Main5