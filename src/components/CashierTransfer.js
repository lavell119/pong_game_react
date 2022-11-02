import BTC from './images/bitcoin.png'
import greenBTC from './images/bitcoingreen.png'

export default function CashierTransfer () {
    return (
        <div className="deposit-snippet">
            <div className="deposit-col-1">
                <div className="large-crypto-logo-box">
                    <img src={greenBTC}></img>
                </div>
                <div class="large-crypto-logo-box">
                    <img src={BTC}></img>
                </div>
            </div>
            <div className="deposit-col-2">
                <h3>Player</h3>
                <input class="crypto-address"></input>
                <h3>Transfer Amount</h3>
                <input class="crypto-address"></input>
                <p>Available balance: <span class="orange-txt">0 uBTC</span></p>
                <h3>Password</h3>
                <input class="crypto-address"></input>            
            </div>
        </div>
    )

}