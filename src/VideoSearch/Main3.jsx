import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Videolist from './Videolist'


function Main3() {
    let [search,setsearch] = useState('india')
    let [data,setdata] = useState(null)

  return (
  <>
  <Searchbar search={search} setsearch={setsearch}/>
  <Videolist 
  search={search}
  data={data}
  setdata={setdata}
  />
  </>
  )
}

export default Main3