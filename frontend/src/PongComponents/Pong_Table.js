import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


export default function Pong_Table() {
    const { id  } = useParams()
    const numberOfTables = useSelector(state => state.numOfTables)

  return (
    <div className="pong_table">
      <div class="table_title"><h2>Table {id}</h2></div>
    </div>
  )
}
