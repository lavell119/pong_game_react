import React from 'react'
 import {useState} from 'react'
 import { useDispatch } from 'react-redux'


 export default function Login() {
  const dispatch=useDispatch()

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
    const json = await response.json()
    console.log(json)

  }

   return (
    <div className="login_page">
     <form onSubmit={login} class="login">
      <h2>Login</h2>
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

          <div>no user</div>
            <button>Login</button>

        </div>       
     </form>
     </div>
   )
 }
 