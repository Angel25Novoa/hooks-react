import React, {useContext} from 'react'
import { UserContext } from './UserContext'

const AboutScreen = () => {
  const {user, setUser} = useContext(UserContext) 
  return (
    <div>
      <h1>About Screen</h1>
      <hr />
      <button className="btn btn-info"
      onClick={() => setUser({})}>
        Logout
      </button>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  )
}

export default AboutScreen