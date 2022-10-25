import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function DisplayHeader() {
    //get data from redux store
    
    //import dispatch from redux
    const dispatch = useDispatch()


    return (
        <div className="display-header">
        <text className="title">Account Information</text>
        <div className="tables-header-strip-left">
            <a href="./lobby.html">
            <div className="home-button" onClick={()=>{dispatch({type: "CHANGE_DISPLAY", payload: '<tables />'})}}>
                Home
            </div>
            </a>
            <text className="side-title">Account</text>
        </div>
    </div>
    )
}