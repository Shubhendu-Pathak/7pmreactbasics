import React from 'react'

function Videoitem(props) {
    let {ele} = props
  return (
  <>
  <li className="list-group-item">
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