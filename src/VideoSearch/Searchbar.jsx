import React from 'react'

function Searchbar({search,setsearch}) {
  return (
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Search Video</span>
  <input type="text" class="form-control" placeholder="type something ......" aria-label="type something" aria-describedby="basic-addon1"
  value={search}
  onChange={(e)=>setsearch(e.target.value)}
  />
  
</div>
  )
}

export default Searchbar