// import React, { useRef, useState } from 'react'

// function Userefone() {
//     let [count,setcount ] = useState(1008)
//     let countref = useRef(1008)

// let add =()=>{
//     // setcount(count+1)
//     countref.current++;

//     // console.log('State '+ count);
//     console.log( 'Ref '+countref.current );
// }

//   return (
// <>
// <h2>Count {countref.current}</h2>
// <button onClick={add}>Incre</button>
// </>
//   )
// }

// export default Userefone

//-------------------------------------------------

import React, { useEffect, useRef } from 'react'

function Userefone() {
const inpref = useRef(null)

useEffect(()=>{
    inpref.current.focus()
},[])

  return (
<>
<input type="text" ref={inpref} placeholder='Type TEXT'/>

</>
  )
}

export default Userefone