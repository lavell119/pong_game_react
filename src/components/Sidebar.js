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
        <div className="sidebar-ele" onClick={ ()=>{changeDisplayState(<AccountInformation />)}}>Account Information</div>
        <div className="sidebar-ele" onClick={ ()=>{changeDisplayState(<ChangePassword />)}}>Change Password</div>
        <div className="sidebar-ele">Account Security</div>
        <div className="sidebar-ele" onClick={ ()=>{changeDisplayState(<ChangeEmail />)}}>Change E-mail</div>
        <div className="sidebar-ele">Change Avatar</div>
    </div>
    )
}