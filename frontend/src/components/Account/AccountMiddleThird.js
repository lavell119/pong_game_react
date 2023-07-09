import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import ChangePassword from "../ChangePassword"
import AccountInformation from "./AccountInformation"
import ChangeEmail from "../ChangeEmail"


export default function AccountMiddleThird() {
    const displayerState=useSelector(state => state.display)
    const accountDisplay=useSelector(state => state.accountDisplay)


    let [displayState, changeDisplayState]=useState('initial state')
    const dispatch = useDispatch()
    return (
        <>
    <div className="middle-third">
    <div className="sidebar">
        <div className="sidebar-ele ai" onClick={()=>{dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <AccountInformation />, title: 'Account Information' }})}}>Account Information</div>
        <div className="sidebar-ele cp" onClick={()=>{dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <ChangePassword />, title: 'Change Password' }})}}>Change Password</div>
        <div className="sidebar-ele as"> Account Security</div>
        <div className="sidebar-ele ce" onClick={()=>{dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <ChangeEmail />, title: 'Change Email' }})}}>Change E-mail</div>
        <div className="sidebar-ele ca">Change Avatar</div>
    </div>
    <div className="display">   
        {accountDisplay}
    </div>
    </div>
        </>
    )
}