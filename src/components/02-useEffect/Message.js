import React, {useEffect, useState} from 'react'

const Message = () => {

  const[coords, setCoords] = useState({x:0, y:0})
  const {x, y} = coords

  useEffect(() => {

    const mouseMove = (e) => {
      const coords = {x: e.x, y: e.y}
      console.log(coords)
      setCoords(coords)
    }
    window.addEventListener('mousemove', mouseMove)

    console.log('componente montado')  
    return () => {
      window.removeEventListener('mousemove', mouseMove)
      console.log('componente desmontado')
    }
  }, [])
  

  return (
    <div>
      <h3>Holis</h3>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </div>
  )
}

export default Message