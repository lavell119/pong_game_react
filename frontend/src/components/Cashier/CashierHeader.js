import overview from '../images/overview.png'
import deposit from '../images/deposit.png'
import withdraw from '../images/withdraw.png'
import transfer from '../images/transfer.png'
import p2p from '../images/p2p.png'
import history from '../images/history.png'
import { useDispatch } from 'react-redux'
import CashierOverview from './CashierOverview.js'
import CashierDeposit from './CashierDeposit.js'
import CashierWithdrawal from './CashierWithdrawal.js'
import CashierTransfer from './CashierTransfer'
import Cashierp2p from './Cashierp2p'
import { useSelector } from 'react-redux'
import CashierHistory from './CashierHistory'

export default function CashierHeader () {

        let activeClass=useSelector(state=>state.cashierHeader)
        console.log(activeClass)

        let dispatch = useDispatch()
        
        let str='background-color'
        return(
        <div className="cashier-header slide-display-element">
            <div className={`cashier-header-ele ${activeClass[0]}`} onClick={()=>{
                dispatch({ type: "CHANGE_CASHIER", payload: <CashierOverview /> })
                dispatch({ type: "CHANGE_CASHIER_OVERVIEW"})
                }}>
                <img src={overview} />
                Overview
            </div>
            <div className={`cashier-header-ele ${activeClass[1]}`} onClick={()=>{
                dispatch({ type: "CHANGE_CASHIER", payload: <CashierDeposit /> })
                dispatch({ type: "CHANGE_CASHIER_DEPOSIT"})
                }}>               
                <img src={deposit} />
                Deposit
            </div>
            <div className={`cashier-header-ele ${activeClass[2]}`} onClick={()=>{
                dispatch({ type: "CHANGE_CASHIER", payload: <CashierWithdrawal /> })
                dispatch({ type: "CHANGE_CASHIER_WITHDRAWAL"})
                }}>
            <img src={withdraw} />
                Withdraw
            </div>
            <div className={`cashier-header-ele ${activeClass[3]}`} onClick={()=>{
                dispatch({ type: "CHANGE_CASHIER", payload: <CashierTransfer /> })
                dispatch({ type: "CHANGE_CASHIER_TRANSFER"})
                }}>
                <img src={transfer} />

                Transfer
            </div>
            <div className={`cashier-header-ele ${activeClass[4]}`} onClick={()=>{
                dispatch({ type: "CHANGE_CASHIER", payload: <Cashierp2p /> })
                dispatch({ type: "CHANGE_CASHIER_P2P"})
                }}>
            <img src={p2p} />
                P2P Exchange
            </div>
            <div className={`cashier-header-ele ${activeClass[5]}`} onClick={()=>{
                dispatch({ type: "CHANGE_CASHIER", payload: <CashierHistory /> })
                dispatch({ type: "CHANGE_CASHIER_HISTORY"})
                }}>
            <img src={history} />
                History
            </div>
        </div>
        )
}