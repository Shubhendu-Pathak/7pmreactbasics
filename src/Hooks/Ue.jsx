import React, { useEffect } from "react";
import { useState } from "react";

function Ue() {
  let [a, b] = useState(4);
  // console.log(b)
  let [c, d] = useState(12);

  let add = () => {
    b(a + 1);
  };
  let sub = () => {
    d(c - 1);
  };

  console.log('Outside');

  // // type 1 = useeffect will run on initial render and on ever re-render
  
  // useEffect(()=>{
  //  console.log('Inside UseEffect'); 
  // })

    // // type 2 = useeffect will run on initial render and just once
    // useEffect(()=>{
    //   console.log('Inside Useffect');
    // },[])

   // type 3 = useeffect will run on initial render and just once
  //  useEffect(()=>{
  //   console.log('Inside Useffect');
  // },[c])

  return (
    <>
      <h1>
        {" "}
        A says {a} and C says {c}
      </h1>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </>
  );
}

export default Ue;
