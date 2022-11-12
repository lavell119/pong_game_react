import { useDispatch } from "react-redux"

export default function TableSliderRight() {
    let dispatch = useDispatch()
    return(
        <div className="table-slider-right" onClick={()=>{dispatch({ type: "SLIDE-TABLES-RIGHT" })}}>
            &#x203A;
        </div>
    )
}