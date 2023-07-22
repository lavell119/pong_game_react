import Table from "./Table"
import { useState } from "react"
import TableSliderControls from "./TableSliderControls"
import { useSelector } from "react-redux"

export default function Tables() {
    let [slidePosition, changeSlidePosition] = useState(100)
    let btnRight = document.querySelector('.table-slider-right')
    let tableSlider= document.querySelector('.tables')

let slidePostion = useSelector(state=>state.slidePosition)

    return (
      <>
        
        <div className="lobby-tables-wrapper">
            <div className="tables" style={{ transform: `translateX(${slidePostion}px)` }}>
            <>
                <Table id="1" />
                <Table id="2"/>
                <Table id="3" />
                <Table id="4"/>
                <Table id="5"/>
                <Table id="6"/>
                <Table id="7"/>
                <Table id="8"/>
                <Table id="9"/>
                <Table id="10"/>
            </>
            </div>
            <TableSliderControls />
        </div>
      </>
    )
    
}