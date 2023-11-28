import axios from 'axios'
import React, { useEffect } from 'react'
import Videoitem from './Videoitem'

function Videolist({data,setdata,search}) {
  let yt_api_key = 'AIzaSyCbHVh9bjE0-LHVLMbyBvWmk8DMmBFZgoU'

useEffect(()=>{
let ytSearch =async(search)=>{
await axios
.get(`https://www.googleapis.com/youtube/v3/search`,{
  params:{
    part:'snippet',
    maxResults:5,
    key:yt_api_key,
    q:search
  }
})
.then(response=>setdata(response.data?.items))
}

if(search){
  ytSearch()
}

},[search])

  return (
    <div>
<ul className='list-group'>
{ 
data && data ?   <h1>You have {data.length} results</h1> : ''
}
{
  data && data.map((ele,index)=>{
    return <Videoitem key={index} ele={ele}/>
  })
}
</ul>
    </div>
  )
}

export default Videolist