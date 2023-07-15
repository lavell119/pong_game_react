import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import io from "socket.io-client"


const socket = io.connect('http://localhost:4444')

export default function Pong_Table() {
    //socket setup
    const { id  } = useParams()
    const numberOfTables = useSelector(state => state.numOfTables)

    


  return (
    <div className="pong_table">
      <div className="table_title"><h2>Table {id}</h2></div>
      <div className="game_table">
        <div className="pong_player player_1"></div>
        <div className="pong_player player_2"></div>

      </div>
    </div>
  )
}
