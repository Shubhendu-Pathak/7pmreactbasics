import React, { useCallback, useState } from 'react'
import Two from './Two'

function One() {

    let [one,setOne] = useState(11)
    let [two,setTwo] = useState(44)

    let increone =()=>{
        setOne(one+1)
    }

// let newFunc =()=>{
//     console.log('One says FuncNAME');
// }

let newFunc = useCallback(()=>{
        console.log('One says FuncNAME');
    },[two])

return (
    <div>
        <Two two={two} newFunc={newFunc}/>
         <button onClick={increone}>CountOne {one}</button>
    </div>
  )
}

export default One