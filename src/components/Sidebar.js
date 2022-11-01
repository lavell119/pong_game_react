import AccountInformation from "./AccountInformation"
import ChangePassword from "./ChangePassword"
import ChangeEmail from "./ChangeEmail"
import {useState} from 'react'
import { useDispatch } from "react-redux"

export default function Sidebar () {
    let [displayState, changeDisplayState]=useState('initial state')
    
    let dispatch = useDispatch()

    return (
    <div className="sidebar">
        <div className="sidebar-ele" onClick={()=>{dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <AccountInformation />, title: 'Account Information' }})}}>Account Information</div>
        <div className="sidebar-ele" onClick={()=>{dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <ChangePassword />, title: 'Change Password' }})}}>Change Password</div>
        <div className="sidebar-ele"> Account Security</div>
        <div className="sidebar-ele" onClick={()=>{dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <ChangeEmail />, title: 'Change Email' }})}}>Change E-mail</div>
        <div className="sidebar-ele">Change Avatar</div>
    </div>
    )
}