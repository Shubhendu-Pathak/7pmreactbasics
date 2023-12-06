import React, { useMemo, useState } from 'react'

function Memo() {
    let [one,setOne] = useState(11)
    let [two,setTwo] = useState(44)

let increone =()=>{
    setOne(one+1)
}
let incretwo =()=>{
    console.log('two says '+two);
    setTwo(two+1)
}

// let evenNumber =()=>{
//     console.log('CLICKED');
//     let a = 0;
//     while(a<9000000000) a++;
//     return one%2 === 0 
// }

let evenNumber = useMemo(()=>{
        console.log('CLICKED');
        let a = 0;
        while(a<9000000) a++;
        return one%2 === 0 
    },[one])

  return (
    <div>
        <button onClick={increone}>CountOne {one}</button>
        <button onClick={incretwo}>CountTWO {two}</button>
        <h1> One says { evenNumber ? 'EVEN' :'ODD' } </h1>
    </div>
  )
}

export default Memo