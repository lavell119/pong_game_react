import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import io from "socket.io-client"
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"



let socket =''
const tables=''



export default function Pong_Table() {
  const user = useSelector(state => state.pong_user)
  const [player1, setPlayer1] = useState()
  const [player2, setPlayer2] = useState()



    const [tables, setTables] = useState(null)
    useEffect(()=>{
      const fetchServerTables= async() => {
        const response = await fetch("/tables")
        const json=await response.json()
        
        if(response.ok) {
          console.log(json)
          setTables(json)
        }
        if(!response.ok) {
          console.log('fetch error')
        }
      }
      fetchServerTables()

    }, [])
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
      socket = io.connect('http://localhost:4444')
      socket.on('table-joined', ()=>{
        console.log('taergerg')
      })
    }

    //leave table function
    const leaveTable = function(player){
      socket.emit('leave-table', {table: id, player: player})
      console.log('leaving table')
      
      socket.on('table-joined', ()=>{
        console.log('taergerg')
      })
    }

    const joinTable2 = function(player){
      socket = io.connect('http://localhost:4444')
      socket.emit('join-tablet', {table: id, player: player, user: user})
      socket.on('join-tablet', (data)=>{
        console.log(data)
        setTables(data.tables)
        let playerNum = data.playerNum
        if(playerNum === 1){
          setPlayer1(user)
          console.log('player1: ',player1)
        } else if(playerNum===2){
          setPlayer2(user)
          console.log('player2: ',player2)

        }
        
        

        //prepare dispatch payload
        // let test ="...state.table1"
        // let player='player'+data.player
        // let table ='table'+data.table
        // dispatch({ type: "join-tablet", payload: {table: table, player: player, test: test}})
        // console.log(pongTables)
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
          <button onClick={()=>leaveTable(1)}>Leave</button>
        </div>
        <div className="pong_player player_2">
          <button onClick={()=>joinTable2(2)}>Join</button>
          <button onClick={()=>leaveTable(2)}>Leave</button>

        </div>

      </div>
    </div>
  )
}
