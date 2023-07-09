import { useSelector } from "react-redux"

export default function CashierOverview() {

    const chipCount=useSelector(state => state.pong_user.chipcount)
    const krill=useSelector(state => state.pong_user.krill)


    return(
    <div className="cashier-content slide-display-element">
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
            <th>Chips:</th>
            <th>{ chipCount }</th>
            <th>0</th>
        </tr>
        <tr className="row-4">
            <th><div className="logo-icon pink"></div></th>
            <th>Krill</th>
            <th>{ krill }</th>
            <th>0</th>
            <th>{ krill }</th>
        </tr>
        </table>
    </div>
    )
}