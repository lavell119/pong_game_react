import { useDispatch } from "react-redux"


export default function TableSliderLeft() {
    let dispatch = useDispatch()
    let slideLeft = () => {       
    }
    return(
        <div className="table-slider-left" onClick={()=>{dispatch({ type: "SLIDE-TABLES-LEFT" })}}>
        </div>
    )
}