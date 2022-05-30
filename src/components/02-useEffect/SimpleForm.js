import React, { useEffect, useState } from 'react'
import Message from './Message'
import './effects.css'

const SimpleForm = () => {

  const [form, setform] = useState({
    name:'',
    email:''
  })

  const {name, email} = form

  useEffect(() => {
    // console.log('hey')
  }, [])
  
  useEffect(() => {
    // console.log('fomr cambio!')
  }, [form])
  
  useEffect(() => {
    // console.log('email cambio!')
  }, [email])

  const handleInputChange = ({target}) => {
    setform({
      ...form,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>
        useEffect
      </h1>
      <hr />
      <div className="form-group">
        <input 
          type="text" 
          name='name' 
          className='form-control' 
          placeholder='Tu nombre' 
          autoComplete='off' 
          value={name} 
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input 
          type="text" 
          name='email' 
          className='form-control' 
          placeholder='email@email.com' 
          autoComplete='off' 
          value={email} 
          onChange={handleInputChange}
        />
      </div>
      {(name === '123') && <Message />}
    </>
  )
}

export default SimpleForm