import React, {useContext} from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {
  //obtener context
  const {user, setUser} = useContext(UserContext) 
  //obtener setUser
  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-info"
      onClick={() => setUser({
        name: 'Juan',
        email:'',
        id: 2
      })}>
        Login
      </button>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  )
}

export default LoginScreen