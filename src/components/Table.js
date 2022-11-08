import { useState } from 'react'

export default function Table() {
    /*let ele = document.querySelector('.number-of-players-ele')
    setInterval(function(){
        if (ele.innerText!=='Waiting for players...')
        {ele.innerText += '.'}
         else {
            ele.innerText='Waiting for players.'
        }}  
    , 1000)*/

    const [colorr, changeColor] = useState("red")

    return (            
            <div className="display-table" >
                <div className="tble-header">
                    <div style={{color: {colorr}}}>Stakes</div>
                    <text className="stakes">$1 / $2</text>
                </div>
                <div className="tble">
                    <div className="tble-plyrs-wrapper">
                        <div className="plyr plyr1"></div>
                        <div className="plyr plyr2"></div>
                        <div className="plyr plyr3"></div>
                        <div className="plyr plyr4"></div>
                    </div>
                </div>
                <div className="tble-footer">
                    <div className="join-btn">
                        JOIN TABLE
                    </div>
                    <div className="number-of-players-ele">
                        Waiting for players...
                    </div>
                </div>

            </div>
    )
    
}