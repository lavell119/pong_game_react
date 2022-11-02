import CashierOverview from "./CashierOverview"
import CashierDeposit from './CashierDeposit.js'
import CashierWithdrawal from './CashierWithdrawal.js'
import { useSelector } from 'react-redux'

export default function CashierContent() {
    let cashierState= useSelector(state=>state.cashierContent)
    return(
    <div className="cashier-content">
        {cashierState}
    </div>
    )
}