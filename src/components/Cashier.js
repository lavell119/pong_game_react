import overview from './images/overview.png'
import deposit from './images/deposit.png'
import withdraw from './images/withdraw.png'
import transfer from './images/transfer.png'
import p2p from './images/p2p.png'
import history from './images/history.png'


export default function Cashier() {
    return(
<div className="snippet">
        <div className="cashier-header">
            <div className="cashier-header-ele">
                <img src={overview} />
                Overview
            </div>
            <div className="cashier-header-ele">               
                <img src={deposit} />
                Deposit
            </div>
            <div className="cashier-header-ele">
            <img src={withdraw} />
                Withdraw
            </div>
            <div className="cashier-header-ele">
            <img src={transfer} />
                Transfer
            </div>
            <div className="cashier-header-ele">
            <img src={p2p} />
                P2P Exchange
            </div>
            <div className="cashier-header-ele">
            <img src={history} />
                History
            </div>
        </div>
    </div>
    )
    }