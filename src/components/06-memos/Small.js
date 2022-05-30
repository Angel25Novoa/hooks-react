import React, {memo} from 'react'

const Small = memo(({value}) => {

  console.log('me volví a renderizar :c')

  return (
    <small>{value}</small>
  )
})

export default Small