import Table from "./Table"
import { useState } from "react"
import TableSliderControls from "./TableSliderControls"

export default function Tables() {
    let [slidePosition, changeSlidePosition] = useState(100)
    let btnRight = document.querySelector('.table-slider-right')
let tableSlider= document.querySelector('.tables')

let slideRight=()=>{
    tableSlider.style.transform = `translateX(${slidePosition}px)`
    changeSlidePosition(slidePosition+100)
}

let slideLeft=()=>{
    changeSlidePosition(slidePosition-100)
    tableSlider.style.transform = `translateX(${slidePosition}px)`

}

    return (

        <div className="tables-wrapper">
            <div className="tables translateX(${slidePosition}px">
            <>
                <Table />
                <Table />
                <Table />
                <Table />
                <Table />
                <Table />
                <Table />
                <Table />
                <Table />
                <Table />
            </>
            </div>
            <TableSliderControls />
        </div>
    )
    
}