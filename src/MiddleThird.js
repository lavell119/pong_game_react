import { useState } from "react"


export default function MiddleThird() {
    let [displayState, changeDisplayState]=useState('initial state')

    return (
        <>
    <div className="middle-third">
    <div className="sidebar">
        <div className="sidebar-ele ai" onClick={ ()=>{changeDisplayState('<h1>ksks</h1>')}}>Account Information</div>
        <div className="sidebar-ele cp">Change Password</div>
        <div className="sidebar-ele as">Account Security</div>
        <div className="sidebar-ele ce">Change E-mail</div>
        <div className="sidebar-ele ca">Change Avatar</div>
    </div>
    <div className="display">
        <div className="display-ele">{displayState}</div>
    </div>
    </div>
</>
    )
}