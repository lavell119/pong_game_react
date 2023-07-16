import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import io from "socket.io-client"
import { useEffect } from 'react'
import { useState } from 'react'

const socket =''

export default function Pong_Table() {
    
    //socket setup
    const { id  } = useParams()
    const reduxTable= 'table' + id
    console.log(reduxTable)
    const numberOfTables = useSelector(state => state.numOfTables)

    const pongTables = useSelector(state => state.pongTables)
    console.log(pongTables)

    //join table function
    const joinTable = function(player){
      const socket = io.connect('http://localhost:4444')
      socket.on('table-joined', ()=>{
        console.log('taergerg')
      })
    }

    const joinTable2 = function(player){
      const socket = io.connect('http://localhost:4444')
      socket.emit('join-tablet', {table: id, player: player})
      socket.on('join-tablet', (data)=>{
        console.log(data)
      })
    }
    
      useEffect(()=>{
        if(socket)
        socket.on('table-joined', ()=>{
          console.log('steyherye')
          })
      }, [socket])
    return (

    <div className="pong_table">
      <div className="table_title"><h2>Table {id}</h2></div>
      <div className="game_table">
        <div className="player_names_display">
          <div className="player_name player_1_name"></div>
          <div className="player_name player_2_name"></div>
        </div>
        <div className="pong_player player_1">
          <button onClick={()=>joinTable2(1)}>Join</button>
        </div>
        <div className="pong_player player_2">
          <button>Join</button>
        </div>

      </div>
    </div>
  )
}
