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
import {useState} from 'react'
import { useSelector } from 'react-redux'
        
export default function CashierHeader () {

        let activeClass=useSelector(state=>state.cashierHeader)
        console.log(activeClass)

        let dispatch = useDispatch()
        
        let str='background-color'
        return(
        <div className="cashier-header">
            <div className="cashier-header-ele">
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