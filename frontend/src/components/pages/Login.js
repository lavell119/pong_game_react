import React from 'react'
import {useState, useEffect } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useDispatch} from 'react-redux'

export default function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  useEffect(() => {
    //check if user exists in local storage
    const user = JSON.parse(localStorage.getItem('user'))

    if(user) {
      console.log('user exists in local storage')

      dispatch({ type: 'LOGIN', payload: user})

    }
  })

  const handleSubmit =async(e) => {
    e.preventDefault()

    await login(email, password)
  }


   return (
    <div className="login_page">
     <form onSubmit={handleSubmit} class="login">
      <h2>Login</h2>
        <div className="login_wrapper">
          <div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e) =>setPassword(e.target.value)}></input>
            </div>  
          </div>
            <button disabled = {isLoading}>Login</button>
            {error && <div className="error">{error}</div>}

        </div>       
     </form>
     </div>
   )
 }
 