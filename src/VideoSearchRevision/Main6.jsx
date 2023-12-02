import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from 'axios'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

function Main6() {
    let [txt,setTxt] = useState('')
    let [debounce,setDebounce] = useState(txt) 
    // data in state
     let [data,setData] = useState(null)
// state for Video Id
let [videoId,setVideoId] = useState(null)
console.log(videoId);
  

  return (
  <>
  <Search txt={txt} setTxt={setTxt}/>
<div className={videoId && `d-flex justify-content-evenly`}>

    <VideoDetail videoId={videoId} /> 

<VideoList 
txt={txt} 
debounce={debounce} 
setDebounce={setDebounce}
data={data}
setData={setData}
videoId={videoId}
setVideoId={setVideoId}
/>
</div>
  </>
  )
}

export default Main6