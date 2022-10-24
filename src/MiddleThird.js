import { useState } from "react"
import AccountInformation from "./AccountInformation"
import ChangePassword from "./ChangePassword"
import ChangeEmail from "./ChangeEmail"
import Tables from "./Tables"
import { useSelector } from "react-redux"

export default function MiddleThird() {
    let [displayState, changeDisplayState]=useState('initial state')

    return (
        <>
    <div className="middle-third">
    <div className="sidebar">
        <div className="sidebar-ele ai" onClick={ ()=>{changeDisplayState(<AccountInformation />)}}>Account Information</div>
        <div className="sidebar-ele cp" onClick={ ()=>{changeDisplayState(<ChangePassword />)}}>Change Password</div>
        <div className="sidebar-ele as">Account Security</div>
        <div className="sidebar-ele ce" onClick={ ()=>{changeDisplayState(<ChangeEmail />)}}>Change E-mail</div>
        <div className="sidebar-ele ca">Change Avatar</div>
    </div>
    <div className="display">
        {displayState}
    </div>
    </div>
</>
    )
}