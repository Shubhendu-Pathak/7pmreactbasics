import axios from 'axios'
import React from 'react'

function Axpost() {
    let mydata ={
        name:'King Philip',username:'kingphil321@gmail.com'
    }
    let postdata =async()=>{
        await axios
        .post('https://jsonplaceholder.typicode.com/users',mydata)
        .then(response=>console.log(response))
    }
  return (
    <>
    <button onClick={postdata}>Post data</button>
    </>
  )
}

export default Axpost