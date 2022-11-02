import overview from './images/overview.png'
import deposit from './images/deposit.png'
import withdraw from './images/withdraw.png'
import transfer from './images/transfer.png'
import p2p from './images/p2p.png'
import history from './images/history.png'
import { useDispatch } from 'react-redux'
import CashierOverview from './CashierOverview.js'
import CashierDeposit from './CashierDeposit.js'
import CashierWithdrawal from './CashierWithdrawal.js'
import CashierTransfer from './CashierTransfer'
import Cashierp2p from './Cashierp2p'

export default function CashierHeader () {
        let dispatch = useDispatch()
        return(
        <div className="cashier-header">
            <div className="cashier-header-ele" onClick={()=>{dispatch({ type: "CHANGE_CASHIER", payload: <CashierOverview /> })}}>
                <img src={overview} />
                Overview
            </div>
            <div className="cashier-header-ele" onClick={()=>{dispatch({ type: "CHANGE_CASHIER", payload: <CashierDeposit /> })}}>               
                <img src={deposit} />
                Deposit
            </div>
            <div className="cashier-header-ele" onClick={()=>{dispatch({ type: "CHANGE_CASHIER", payload: <CashierWithdrawal /> })}}>
            <img src={withdraw} />
                Withdraw
            </div>
            <div className="cashier-header-ele" onClick={()=>{dispatch({ type: "CHANGE_CASHIER", payload: <CashierTransfer /> })}}>
            <img src={transfer} />
                Transfer
            </div>
            <div className="cashier-header-ele" onClick={()=>{dispatch({ type: "CHANGE_CASHIER", payload: <Cashierp2p /> })}}>
            <img src={p2p} />
                P2P Exchange
            </div>
            <div className="cashier-header-ele" >
            <img src={history} />
                History
            </div>
        </div>
        )
}