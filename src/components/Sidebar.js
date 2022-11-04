import AccountInformation from "./AccountInformation"
import ChangePassword from "./ChangePassword"
import ChangeEmail from "./ChangeEmail"
import {useState} from 'react'
import { useDispatch } from "react-redux"
import {useSelector } from "react-redux"

export default function Sidebar () {
    let [displayState, changeDisplayState]=useState('initial state')
    let sideBarActive = useSelector(state=>state.sideBarActive)
    let dispatch = useDispatch()

    return (
    <div className="sidebar">
        <div className={`sidebar-ele ${sideBarActive[0]}`} onClick={()=>
            {dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <AccountInformation />, title: 'Account Information' }})
            dispatch({ type: "CHANGE_SIDEBAR_1"})
            }}>Account Information</div>
        <div className={`sidebar-ele ${sideBarActive[1]}`} onClick={()=>
            {dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <ChangePassword />, title: 'Change Password' }})
            dispatch({ type: "CHANGE_SIDEBAR_2"})
            }}>Change Password</div>
        <div className={`sidebar-ele ${sideBarActive[2]}`}> 
        Account Security</div>
        <div className={`sidebar-ele ${sideBarActive[3]}`} onClick={()=>
            {dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <ChangeEmail />, title: 'Change Email' }})
            dispatch({ type: "CHANGE_SIDEBAR_4"})            
            }}>Change E-mail</div>
        <div className={`sidebar-ele ${sideBarActive[4]}`}>Change Avatar</div>
    </div>
    )
}