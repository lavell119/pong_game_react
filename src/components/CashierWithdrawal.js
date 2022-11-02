import BTC from './images/bitcoin.png'

export default function CashierWithdrawal () {
    return (
        <div className="deposit-snippet">
            <div className="deposit-col-1">
                <div className="large-crypto-logo-box">
                    <div className="large-crypto-logo green"></div>
                </div>
                <div class="large-crypto-logo-box">
                    <img src={BTC}></img>
                </div>
            </div>
            <div className="deposit-col-2">
                <h3>Deposit Bitcoin Cash to this address</h3>
                <input class="crypto-address"></input>
                <h3>WIthdrawal Amount</h3>
                <input class="crypto-address"></input>
                <h3>Password</h3>
                <input class="crypto-address"></input>            
            </div>
        </div>
    )

}