import React from 'react'
import { useSelector } from 'react-redux'

export default function Pong_Table() {
    const numberOfTables = useSelector(state => state.numOfTables)

  return (
    <div>Pong_Table</div>
  )
}
