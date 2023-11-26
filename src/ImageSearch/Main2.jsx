import axios from "axios";
import React, { useEffect, useState } from "react";

function Main2() {
  let [txt, setxt] = useState("");
  let [imgdata,setimgdata] = useState(null)
//   for debouncing
  let [debounce,setdebounce] = useState(txt)

  let client_id

//   setimeout function u.effect
useEffect(()=>{
    const timeid = setTimeout(()=>{
setdebounce(txt)
    },1000)

    return ()=>{
        clearTimeout(timeid)
    }
},[txt])

useEffect(()=>{
    let getdata = async()=>{
        axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${debounce}`
        )
        .then((response) => {
          setimgdata(response.data?.results)
          console.log(imgdata);
        });
    }
if(debounce){
    getdata()
}
},[debounce])

  return (
    <>
      
        <input
          type="text"
          name=""
          id=""
          value={txt}
          onChange={(event) => {
            setxt(event.target.value);
          }}
        />

      <h1>
        {imgdata ? `You have ${imgdata.length} data` : ''}
      </h1>

<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(400px,550px))',gap:'50px', justifyContent:'center',textAlign:'center',textTransform:'uppercase',fontWeight:900}}>
{
// falsy value = undefined 0 null false
    
    imgdata && imgdata.map((ele)=>{
        return <section key={ele?.id}>
               <img height={'100%'} width={'100%'} src={ele.urls?.small} alt='' />
        <p>{ele.alt_description}</p>
        </section>
    })

}
</div>

    </>
  );
}

export default Main2;

//!)send reqest for data
//2)get hold of the data
//3)render the data


