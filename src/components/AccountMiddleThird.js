import { useState } from "react"
import Tables from "./Tables"
import { useSelector, useDispatch } from "react-redux"
import ChangePassword from "../components/ChangePassword"
import AccountInformation from "../components/AccountInformation"
import ChangeEmail from "../components/ChangeEmail"


export default function AccountMiddleThird() {
    const displayerState=useSelector(state => state.display)
    const accountDisplay=useSelector(state => state.accountDisplay)


    let [displayState, changeDisplayState]=useState('initial state')
    const dispatch = useDispatch()
    return (
        <>
    <div className="middle-third">
    <div className="sidebar">
        <div className="sidebar-ele ai" onClick={()=>{dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: <AccountInformation />})}}>Account Information</div>
        <div className="sidebar-ele cp" onClick={()=>{dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: <ChangePassword />})}}>Change Password</div>
        <div className="sidebar-ele as"> Account Security</div>
        <div className="sidebar-ele ce" onClick={()=>{dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: <ChangeEmail /> })}}>Change E-mail</div>
        <div className="sidebar-ele ca">Change Avatar</div>
    </div>
    <div className="display">   
        {accountDisplay}
    </div>
    </div>
        </>
    )
}