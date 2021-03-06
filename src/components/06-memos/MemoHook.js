import React, {useMemo, useState} from 'react'
import { useCounter } from '../../hooks/useCounter'
import { heavyProcess } from '../../helpers/heavyProcess'
import '../02-useEffect/effects.css'

const MemoHook = () => {

  const {counter, increment} = useCounter(5000)
  const [show, setShow] = useState(true)

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{counter}</small></h3>
      <hr />
      <p>{memoHeavyProcess}</p>
      <button 
        className="btn btn-info" 
        onClick={increment}
      >
        +1
      </button>
      <button
        className='btn btn-outline-primary ml-5'
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}

export default MemoHook