import React from 'react'

function VideoDetail({videoId}) {
    console.log('VideoDetail '+videoId);
   
  return (
<>
{
    videoId &&     <div>
    <iframe height={'450'} width={'950'} src={`http://www.youtube.com/embed/${ videoId?.vId}`}></iframe>
<h2 style={{textAlign:'center',maxWidth:'800px'}}>{videoId?.description}</h2>
   </div>
}
</>
  )
}

export default VideoDetail