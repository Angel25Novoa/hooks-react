import React, { memo } from 'react'

const ShowIncrement = memo(({increment}) => {

  console.log('me volví a generar :c ')

  return (
    <button 
      className='btn btn-primary'
      onClick={() => {
        increment(5)
      }}
    >
      Increment
    </button>
  )
})

export default ShowIncrement