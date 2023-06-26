import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function DisplayHeader() {
    //get data from redux store
    
    //import dispatch from redux
    const dispatch = useDispatch()
    const title = useSelector(state => state.title)
    const sideTitle = useSelector(state => state.sideTitle)
    let sliderPosition = useSelector(state => state.slidePosition)


    return (
        <div className="display-header">
            <div className="disp-left">
                <div className="home-button" onClick={()=>{dispatch({type: "LOAD_TABLES" })}}>
                    Home
                </div>
                <div className="side-title">{sideTitle}</div>             
            </div>
            <div className="disp-right">
                <div className="title ">{title}</div>
            </div>
        </div>
    )
}