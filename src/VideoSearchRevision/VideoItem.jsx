import React from 'react'

function VideoItem({ele,videoId,setVideoId}) {

  let viddetail=()=>{
    setVideoId(
    {vId:ele?.id?.videoId,description:ele?.snippet?.description}
    )
  }

  return (
    <li class="list-group-item" onClick={viddetail}>
      <div class="card" style={{width: '18rem'}}>
  <img src={ele?.snippet?.thumbnails?.default?.url} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{ele?.snippet?.title}</h5>
  </div>
</div>
    </li>
  )
}

export default VideoItem