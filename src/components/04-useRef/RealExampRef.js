import React, {useState} from 'react'
import '../02-useEffect/effects.css'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'

const RealExampRef = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
      <h1>
        RealExampRef
      </h1>
      <hr />
      { show && <MultipleCustomHooks/> }
      <button 
        className='btn btn-info'
        onClick={() => {
          setShow(!show)
        }}>
        Show/Hide
      </button>
    </div>
  )
}

export default RealExampRef