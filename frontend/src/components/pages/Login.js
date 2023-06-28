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

  const login = async (e) => {
    e.preventDefault()
    const response = await fetch("/login", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    console.log('request sent')
  }

   return (
     <form onSubmit={login} class="login">
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={changeEmail}></input>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={changePassword}></input>
        {email}
        {password}
        <button>Login</button>
     </form>
   )
 }
 