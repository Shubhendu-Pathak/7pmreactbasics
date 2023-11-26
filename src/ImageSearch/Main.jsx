import axios from "axios";
import React, { useState } from "react";

function Main() {
  let [txt, setxt] = useState("ocean");
  let [imgdata,setimgdata] = useState(null)

  let client_id = "fJsVO5tkBEtwlwJ39bcqanGoL-ugJa3yMYuTQwn2Gi4";

  let handlesubmit = (e) => {
    e.preventDefault();
    console.log("tyu");
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${txt}`
      )
      .then((response) => {
        setimgdata(response.data?.results)
        console.log(imgdata);
      });
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name=""
          id=""
          value={txt}
          onChange={(event) => {
            setxt(event.target.value);
          }}
        />
        <input type="submit" value="Search Image" />
      </form>
      <h1>
        {imgdata ? `You have ${imgdata.length} data` : ''}
      </h1>

<div style={{display:'grid',gridTemplateColumns:'repeat(2,550px)',gap:'50px', justifyContent:'center',textAlign:'center',textTransform:'uppercase',fontWeight:900}}>
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

export default Main;

//!)send reqest for data
//2)get hold of the data
//3)render the data


