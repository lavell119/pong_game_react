import React from 'react'
import { useSelector } from 'react-redux'



const addTable = function(){

}

export default function AddTableButton() {
    const numOfTables = useSelector(state=>state.numOfTables)

  return (
    <button onClick = {addTable()} className="add_table_btn">Num of Tables: {numOfTables}</button>
  )
}
