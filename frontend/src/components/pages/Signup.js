import React from 'react'
 import {useState} from 'react'
 import { useDispatch } from "react-redux"


 
 export default function () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch=useDispatch()

  const changeEmail = (e) =>{
    e.preventDefault()
    setEmail(e.target.value)
  }

  const changePassword = (e) =>{
    e.preventDefault()
    setPassword(e.target.value)
  }

  const signup = async (e) => {
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

   return (
    <div className="login_page">
     <form onSubmit={signup} class="login">
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
 