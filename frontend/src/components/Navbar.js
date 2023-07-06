import React from 'react'
import { useSelector } from 'react-redux'
import { useLogout } from './hooks/useLogout'

export default function Navbar() {
    const {logout} = useLogout()

    const handleClick = () => {
        logout()
    }
    const user = useSelector(state=>state.pong_user)
    if(!user) {
    return (
        <nav className="nav">
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
        </nav>)
    } else {
        return (
        <nav className="nav">
            <a href="/logout" onClick={handleClick}>Logout</a>
        </nav>)
    }
    
}
