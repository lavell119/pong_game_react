import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function DisplayHeader() {
    //get data from redux store
    
    //import dispatch from redux
    const dispatch = useDispatch()


    return (
        <div className="display-header">
        <div className="title">Account Information</div>
        <div className="tables-header-strip-left">
            <div className="home-button" onClick={()=>{dispatch({type: "LOAD_TABLES" })}}>
                Home
            </div>
            <div className="side-title" onClick={()=>{dispatch({type: "LOAD_ACCOUNT" })}}>Account</div>
        </div>
    </div>
    )
}