import React from 'react'
import {useState} from 'react'
import { useDispatch } from "react-redux"
import { useSignup } from "../hooks/useSignup"


export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignup()
  const dispatch=useDispatch()

  const changeEmail = (e) =>{
    e.preventDefault()
    setEmail(e.target.value)
  }

  const changePassword = (e) =>{
    e.preventDefault()
    setPassword(e.target.value)
  }

  const signup2 = async (e) => {
    e.preventDefault()
    const response = await fetch("/signup", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    const json = await response.json()
    {dispatch({ type: 'UPDATE USER STATE' })}
    console.log(json)

    
    console.log('request sent')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

   return (
    <div className="login_page">
     <form onSubmit={handleSubmit} class="login">
      <h2>Signup</h2>
        <div class="login_wrapper">
          <div>
            <div>
                <label>Email</label>
                <input  name="email" value={email} onChange={changeEmail}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={changePassword}></input>
            </div>  
          </div>
          <button>Signup</button>
        </div>       
     </form>
     </div>
   )
 }
 