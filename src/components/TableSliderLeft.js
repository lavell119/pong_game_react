import { useDispatch } from "react-redux"


export default function TableSliderLeft() {
    let dispatch = useDispatch()

    return(
        <div className="table-slider-left" onClick={()=>{dispatch({ type: "SLIDE-TABLES-LEFT" })}}>
            &#x2039;
        </div>
    )
}