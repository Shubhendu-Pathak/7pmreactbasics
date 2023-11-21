import React, { useEffect, useState } from "react";

function Ue() {
  let [a, b] = useState(108);
  let [c, d] = useState(10);

  let add = () => {
    b(a + 1);
  };

  let dec = () => {
    d(c + 1);
  };

  console.log("Outside");

//   // renders outside and inside initially and on every state change
//   useEffect(() => {
//     console.log("Inside UseEFFECT");
//   });

//   // renders  outside and inside initially and only once inside is rendered
//   useEffect(() => {
//     console.log("Inside UseEFFECT");
//   },[]);

  // renders  outside and inside initially and on every specific dependency change
  useEffect(() => {
    console.log("Inside UseEFFECT");
  },[a]);

  return (
    <>
      <h1>Useeffect</h1>

      <h2>
        Add says {a} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dec says{" "}
        {c}
      </h2>
      <button onClick={add}>+</button>
      <button onClick={dec}>-</button>
    </>
  );
}

export default Ue;
