import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
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
            <a href="/logout">Logout</a>
        </nav>)
    }
    
}
