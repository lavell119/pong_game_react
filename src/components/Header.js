import { useSelector, useDispatch } from "react-redux"

export default function Header() {
    const username=useSelector(state => state.currentUser.username)
    const rank=useSelector(state => state.currentUser.rank)
    const ubtc=useSelector(state => state.currentUser.UBTCchipCount)
    const ubch=useSelector(state => state.currentUser.UBCHchipCount)
    const krill=useSelector(state => state.currentUser.krill)



    const dispatch=useDispatch()

    return (
    <div className="lobby-header">       
        <img className="lobby-logo" src="blackjack-logo.png"></img>
        <div className="header-right">
            <div className="user-snippet">
                <div className="user-image"></div>
                <div className="user-snippet-right">
                    <div className="lobby-user-name">{username}</div>
                    <div className="lobby-user-rank">{rank}</div>
                </div>  
                </div> 
            <div className="lobby-chip-snippet">
                <div class="chip-snippet">
                    <div className="lobby-chip-symbol orange"></div>
                    <div className="lobby-chip-count orange-txt">{ ubtc }</div>
                </div>
                <div class="chip-snippet">
                    <div className="lobby-chip-symbol green"></div>
                    <div className="lobby-chip-count green-txt">{ ubch }</div>
                </div>
                <div class="chip-snippet">
                    <div className="lobby-chip-symbol pink"></div>
                    <div className="lobby-chip-count pink-txt">{ krill }</div>
                </div>
            </div>
            <div className="lobby-buttons"> 
                <div class="lobby-btn lobby-account-button" onClick={()=>{
                    {dispatch({ type: "LOAD_ACCOUNT" })}
                    {dispatch({ type: "CHANGE_ACCOUNT_1" })}
                    }}>   
                    ACCOUNT
                </div>
                <div className="lobby-btn lobby-cashier-button" onClick={()=>{dispatch({ type: "LOAD_CASHIER" })
                    {dispatch({ type: "RESET_SIDEBAR_ACTIVE" })}
                    }}>
                    CASHIER
                </div>
            </div>
        </div>
    </div>   
    )
}

