import axios from 'axios'
import React, { useEffect } from 'react'
import VideoItem from './VideoItem'

function VideoList({txt,debounce,setDebounce,data,setData,videoId,setVideoId}) {

  let client_key=''

let getdata =async()=>{
    let response = await axios
    .get(`https://www.googleapis.com/youtube/v3/search?key=${client_key}&part=snippet&order=date&maxResuts=5&q=${debounce}&type=video`)
    .then(response=>setData(response.data.items)) 
    return response
}

useEffect(()=>{
    let timer = setTimeout(()=>{
        setDebounce(txt)
    },1000)
    return ()=>{
        clearTimeout(timer)
    } 
},[txt])

useEffect(()=>{
if(txt){
    getdata()
}
},[debounce])


  return (
  <>
  <ul class="list-group">
  {
    data && data.map((ele,index)=>{
      return <VideoItem key={index} ele={ele} videoId={videoId} setVideoId={setVideoId} />
    })
  }
</ul>
 
  </>
  )
}

export default VideoList