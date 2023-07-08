import React from 'react'
import {useState} from 'react'
import { useDispatch } from "react-redux"
import { useSignup } from "../hooks/useSignup"


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const { signup, error, isLoading } = useSignup()
  const dispatch=useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

   return (
    <div className="login_page">
     <form onSubmit={handleSubmit} class="login">
      <h2>Signup</h2>
        <div className="login_wrapper">
          <div>
          <div>
                <label>Username</label>
                <input name="username" value={username} onChange={(e) =>setUsername(e.target.value)}></input>
            </div>  
            <div>
                <label>Email</label>
                <input  name="email" value={email} onChange={(e) =>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e) =>setPassword(e.target.value)}></input>
            </div>  
          </div>
          <button disabled={ isLoading }>Signup</button>
          {error && <div className="error">{error}</div>}

        </div>   
    
     </form>
     </div>
   )
 }
 