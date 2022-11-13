import { useSelector } from "react-redux"

export default function CashierOverview() {

    const ubtc=useSelector(state => state.currentUser.UBTCchipCount)
    const ubch=useSelector(state => state.currentUser.UBCHchipCount)

    return(
    <div className="cashier-content">
        <table className="cashier-overview-table">
        <tr className="row-1">
            <th></th>
            <th></th>
            <th>Available</th>
            <th>In Game</th>
            <th>Total</th>
        </tr>
        <tr className="row-2">
            <th><div className="logo-icon orange"></div></th>
            <th>uBTC</th>
            <th>{ ubtc }</th>
            <th>0</th>
            <th>{ ubtc }</th>
        </tr>
        <tr className="row-3">
            <th><div className="logo-icon green"></div></th>
            <th>uBCH</th>
            <th>{ ubch }</th>
            <th>0</th>
            <th>{ ubch }</th>
        </tr>
        <tr className="row-4">
            <th><div className="logo-icon pink"></div></th>
            <th>Krill</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
        </tr>
        </table>
    </div>
    )
}