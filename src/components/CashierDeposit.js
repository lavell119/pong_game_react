import qrPic from './images/qr_code.jpg'
import BTC from './images/bitcoin.png'
import greenBTC from './images/bitcoingreen.png'


export default function CashierDeposit () {
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
                <h3>Deposit Bitcoin Cash address</h3>
                <input class="crypto-address"></input>
                <div className="row-2-area">
                    <div className="left">
                        <button className="deposit-btn">Copy Address</button>
                        <br/>
                        <br/>
                        <p>Deposits are credited after 1<br/>confirmation.</p>
                    </div>
                    <div className="right">
                        <img src={qrPic} class="qr"></img>
                    </div>
                    <br/>
                </div>
                A new address is provided for each deposit. Please do not send to an old address.
                <br/>
                <br/>
                        
            </div>
        </div>
    )

}