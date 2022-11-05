import AccountInformation from "./AccountInformation"
import ChangePassword from "./ChangePassword"
import ChangeEmail from "./ChangeEmail"
import {useState} from 'react'
import { useDispatch } from "react-redux"
import {useSelector } from "react-redux"


export default function Sidebar () {
    let [displayState, changeDisplayState]=useState('initial state')
    let sideBarActive = useSelector(state=>state.sideBarActive)
    let changingSideBar = useSelector(state=>state.changingSideBar)
    let dispatch = useDispatch()

    return (
    <div className="sidebar">
        <div className={`sidebar-ele ${sideBarActive[0]}`} onClick={()=>
            {dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <AccountInformation />, title: 'Account Information' }})
            dispatch({ type: "CHANGE_SIDEBAR_1"})
            }}>{changingSideBar[0]}</div>
        <div className={`sidebar-ele ${sideBarActive[1]}`} onClick={()=>
            {dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <ChangePassword />, title: 'Change Password' }})
            dispatch({ type: "CHANGE_SIDEBAR_2"})
            }}>{changingSideBar[1]}</div>
        <div className={`sidebar-ele ${sideBarActive[2]}`}> 
        {changingSideBar[2]}</div>
        <div className={`sidebar-ele ${sideBarActive[3]}`} onClick={()=>
            {dispatch({ type: "LOAD_ACCOUNT_SNIP", payload: { snippet: <ChangeEmail />, title: 'Change Email' }})
            dispatch({ type: "CHANGE_SIDEBAR_4"})            
            }}>{changingSideBar[3]}</div>
        <div className={`sidebar-ele ${sideBarActive[4]}`}>{changingSideBar[4]}</div>
    </div>
    )
}