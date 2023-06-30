import React from 'react'
import { useSelector } from 'react-redux'



const addTable = async function(){
  const response = await fetch('/addtable')
  const JSON = await response.json()
  console.log(JSON)
  return JSON
}

export default function AddTableButton() {
    const numOfTables = useSelector(state=>state.numOfTables)

  return (
    <button onClick = {addTable} className="add_table_btn">Num of Tables: {numOfTables}</button>
  )
}
