import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './Layout.css'

const Layout = () => {

  const showQuote = useRef()
  const [boxSize, setBoxSize] = useState({})

  const { counter, increment } = useCounter(1)
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const { quote } = !!data && data[0]
  
  useLayoutEffect(() => {
    setBoxSize(showQuote.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>Braking Bad Quotes Layout Effect</h1>
      <hr />
      <blockquote className='blockquote text-right'>
        <p 
          className="mb-0"
          ref={showQuote}
        >
          {quote}
        </p>
      </blockquote>

      <pre>
        { JSON.stringify(boxSize, null, 3) }
      </pre>

      <button 
      className="btn btn-primary"
      onClick={increment}
      >
        Next
      </button>
    </div>
  )
}

export default Layout