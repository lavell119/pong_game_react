import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import io from "socket.io-client"



export default function Pong_Table() {
    //socket setup
    const { id  } = useParams()
    const numberOfTables = useSelector(state => state.numOfTables)
    const joinTable = function(){
      const socket = io.connect('http://localhost:4444')

    }

    


  return (
    <div className="pong_table">
      <div className="table_title"><h2>Table {id}</h2></div>
      <div className="game_table">
        <div className="pong_player player_1">
          <button onClick={joinTable}>Join</button>
        </div>
        <div className="pong_player player_2">
          <button>Join</button>
        </div>

      </div>
    </div>
  )
}
