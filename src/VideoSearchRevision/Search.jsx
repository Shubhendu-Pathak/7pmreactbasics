import React from 'react'

function Search({txt,setTxt}) {
  return (
    <div>
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Type something. ....." aria-label="Recipient's username" aria-describedby="basic-addon2"
  value={txt}
  onChange={(e)=>setTxt(e.target.value)}
  />

</div>
    </div>
  )
}

export default Search