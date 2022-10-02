export default function Header() {
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
                <a href="account">
                <div class="lobby-btn lobby-account-button">
                    ACCOUNT
                </div>
                </a>
                <div className="lobby-btn lobby-cashier-button">
                    CASHIER
                </div>
            </div>
        </div>
    </div>   
    )
}

