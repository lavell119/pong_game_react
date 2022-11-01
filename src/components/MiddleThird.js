import { useState } from "react"
import Tables from "./Tables"
import { useSelector, useDispatch } from "react-redux"
import TableSlider from "./TableSlider.js"
import Cashier from "./Cashier.js"
import Sidebar from "./Sidebar"

export default function MiddleThird() {
    const displayerState=useSelector(state => state.display)

    const dispatch = useDispatch()
    return (
        <>
    <div className="middle-third">
        <Sidebar />
    <div className="display">   
        { displayerState }
    </div>
    </div>
        </>
    )
}