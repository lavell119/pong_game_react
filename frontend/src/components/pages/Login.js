import React from 'react'
import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

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
 