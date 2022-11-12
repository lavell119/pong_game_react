import { useSelector, useDispatch } from "react-redux"
import Sidebar from "./Sidebar"
import AccountSecurity from "./AccountSecurity"
import ChatSettings from "./ChatSettings"

export default function MiddleThird() {
    const displayerState=useSelector(state => state.display)
    const dispatch = useDispatch()
    return (
        <>
    <div className="middle-third">
        <Sidebar />
        <div className="display">   
            {displayerState}
        </div>
    </div>
        </>
    )
}