import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"


export default function TableSliderRight() {
    const slidePosition= useSelector(state=>state.slidePosition)
    let dispatch = useDispatch()
    return(
        <div className="table-slider-right" onClick={function()
        {if(slidePosition>-1200)
        {dispatch({ type: "SLIDE-TABLES-RIGHT" })}}}>
            &#x203A;
        </div>
    )
}