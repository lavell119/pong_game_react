import { useSelector, useDispatch } from "react-redux"

export default function Header() {
    const dispatch=useDispatch()
    return (
    <div className="lobby-header">       
        <img className="lobby-logo" src="blackjack-logo.png"></img>
        <div className="header-right">
            <div className="user-snippet">
                <div className="user-image"></div>
                <div className="user-snippet-right">
                    <div className="lobby-user-name">Username</div>
                    <div className="lobby-user-rank">User Rank</div>
                </div>  
                </div> 
            <div className="lobby-chip-snippet">
                <div className="lobby-chip-symbol"></div>
                <div className="lobby-chip-count">0000</div>
            </div>
            <div className="lobby-buttons">
                <div class="lobby-btn lobby-account-button" onClick={()=>{dispatch({ type: "LOAD_ACCOUNT" })}}>
                    ACCOUNT
                </div>
                <div className="lobby-btn lobby-cashier-button" onClick={()=>{dispatch({ type: "LOAD_CASHIER" })}}>
                    CASHIER
                </div>
            </div>
        </div>
    </div>   
    )
}

