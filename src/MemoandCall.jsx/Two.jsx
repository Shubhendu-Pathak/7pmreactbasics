import React, { memo } from 'react'

function Two() {
    console.log('Component Two Re-Rendered');
  return (
    <div>Two</div>
  )
}

export default memo(Two)