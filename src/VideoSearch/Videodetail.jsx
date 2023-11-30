import React from 'react'

function Videodetail({videoID}) {
  return (
    <div className="container-fluid w-75">
      <iframe 
      height={'415'}
      width={'820'}
      src={`https://www.youtube.com/embed/${videoID}`}
        frameborder="0"></iframe>
    </div>
  )
}

export default Videodetail