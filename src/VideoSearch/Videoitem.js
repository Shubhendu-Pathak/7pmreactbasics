import React from 'react'

function Videoitem(props) {
    let {ele,setvideoID,videoId} = props
  return (
  <>
  <li className={`list-group-item ${videoId ? 'ms-3' : 'm-1'}`} onClick={()=>setvideoID(ele?.id?.videoId)}>
    <div className="card" style={{width:'18rem'}}>
        <img className='card-img-top' src={ele.snippet.thumbnails.default.url} alt="" />
        <div className="card-body">
            <p className="card-text">
                {ele.snippet.title}
            </p>
        </div>
    </div>
  </li>
  </> 
  )
}

export default Videoitem