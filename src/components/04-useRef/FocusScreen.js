import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

const FocusScreen = () => {

  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.select()
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input 
        ref={inputRef}
        type="text" 
        className='form-control' 
        placeholder='Su nombre' 
        id='input'/>
      <button 
        className='btn btn-info mt-3' 
        onClick={handleClick}>Focus</button>
    </div>
  )
}

export default FocusScreen