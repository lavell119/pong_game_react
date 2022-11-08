import { useDispatch } from "react-redux"


export default function TableSliderRight() {
    let dispatch = useDispatch()
    let slideLeft = () => {       
    }
    return(
        <div className="table-slider-right" onClick={()=>{dispatch({ type: "SLIDE-TABLES-RIGHT" })}}>
        </div>
    )
}