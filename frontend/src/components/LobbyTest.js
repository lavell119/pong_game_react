import Table from "./Table"
import { useState } from "react"
import TableSliderControls from "./TableSliderControls"
import { useSelector } from "react-redux"
import LobbyTestTables from "./LobbyTestTables"

export default function Tables() {
    let [slidePosition, changeSlidePosition] = useState(100)
    let btnRight = document.querySelector('.table-slider-right')
    let tableSlider= document.querySelector('.tables')

let slidePostion = useSelector(state=>state.slidePosition)

    return (
      <>
      <div className="lobby-test-top">
        <div className="lobby-test-menu">
          <div className="lobby-menu-item">Lobby</div>
          <div className="lobby-menu-item">Cashier</div>
          <div className="lobby-menu-item">Account</div>
          <div className="lobby-menu-item"></div>
          <div className="lobby-menu-item"></div>
        
        </div>
      </div>
      <div className="lobby-test-bottom">
      <LobbyTestTables />
      </div>
      </>
    )
    
}