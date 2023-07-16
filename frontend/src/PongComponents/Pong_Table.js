import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import io from "socket.io-client"
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"


const socket =''

export default function Pong_Table() {
    const dispatch=useDispatch()
    //socket setup
    const { id  } = useParams()
    const reduxTable= 'table' + id
    console.log(reduxTable)
    const numberOfTables = useSelector(state => state.numOfTables)

    const pongTables = useSelector(state => state.pongTables)
    console.log(pongTables.table2.player1)
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
        //prepare dispatch payload
        let test ="...state.table1"
        let player='player'+data.player
        let table ='table'+data.table
        dispatch({ type: "join-tablet", payload: {table: table, player: player, test: test}})
        console.log(pongTables)
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
          <div className="player_name player_1_name">{pongTables[reduxTable].player1}</div>
          <div className="player_name player_2_name">{pongTables[reduxTable].player2}</div>
        </div>
        <div className="pong_player player_1">
          <button onClick={()=>joinTable2(1)}>Join</button>
        </div>
        <div className="pong_player player_2">
          <button onClick={()=>joinTable2(2)}>Join</button>
        </div>

      </div>
    </div>
  )
}
