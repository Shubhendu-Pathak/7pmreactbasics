import React, { useState } from 'react'

function Us() {
    let [num,setNum] = useState(5)
    console.log(num);
    // console.log(setNum);
    const incNum = () =>{
        setNum( num+1 )
    }

    const decNum = () =>{
        // if(num==0){
            // return null;
        // }else{
            // setNum( num-1 )
        // }
        let result = (num===0) ? null : setNum( num-1)
        return result
    }

  return (
    <div>UsState
<h1>State says {num}</h1>
<button onClick={incNum}>+</button>
<button onClick={decNum}>-</button>
    </div>
  )
}

export default Us