import BTC from './images/bitcoin.png'
import greenBTC from './images/bitcoingreen.png'

export default function CashierWithdrawal () {
    return (
        <div className="deposit-snippet slide-display-element">
            <div className="deposit-col-1">
                <div className="large-crypto-logo-box">
                    <img src={greenBTC}></img>
                </div>
                <div class="large-crypto-logo-box">
                    <img src={BTC}></img>
                </div>
            </div>
            <div className="deposit-col-2">
                <h3>Bitcoin Cash address</h3>
                <input class="crypto-address"></input>
                <h3>WIthdrawal Amount</h3>
                <input class="crypto-address"></input>
                <p>Available balance: <span class="green-txt">4.08 uBCH</span></p>
                <p>Minimum withdrawal: <span class="green-txt">500 uBCH</span></p>
                <h3>Password</h3>
                <input class="crypto-address"></input>            
            </div>
        </div>
    )

}