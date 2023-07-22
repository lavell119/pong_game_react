import { useState } from 'react'

export default function Table(props) {
    const id =props.id
    /*let ele = document.querySelector('.number-of-players-ele')
    setInterval(function(){
        if (ele.innerText!=='Waiting for players...')
        {ele.innerText += '.'}
         else {
            ele.innerText='Waiting for players.'
        }}  
    , 1000)*/

    return (            
            <div className="display-table" >
                <div className="tble-header">
                    <text>Stakes</text>
                    <text className="stakes">$1 / $2</text>
                    <text>{`Table ${id}`}</text>
                </div>
                <div className="tble">
                
                        <div className="plyr plyr1"></div>
                        <div className="plyr plyr2"></div>
             
                </div>
                <div className="tble-footer">
                    <div className="join-btn" onClick={()=>{
                        window.open(`/table/${id}`)
                    }}>
                        JOIN TABLE
                    </div>
                    <div className="number-of-players-ele">
                        Waiting for players...
                    </div>
                </div>

            </div>
    )
    
}