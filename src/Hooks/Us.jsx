import { useState } from "react"


function Us(){
    let [data,setData] = useState(3)
// console.log(data);
// console.log(setData);

    // data = state
    // setData = func to update the state

    function handleInc(){
        // alert(678)
        setData( data+1 )
    }
    function handleDec(){
        // alert(678)
     if(  data == 0 ){
        return null
     }else{
        setData( data-1 )
     }
    }
    return(
        <>
        <h1>USESTATE</h1>
        <h2>State says {data}</h2>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        </>
    )
}

export default Us