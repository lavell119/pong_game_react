import React from 'react'
 import {useState} from 'react'

 
 export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
                <input type="email" name="email" value={email} onChange={changeEmail}></input>
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
 