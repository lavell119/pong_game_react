export default function CashierOverview() {
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
            <th>0</th>
            <th>0</th>
            <th>0</th>
        </tr>
        <tr className="row-3">
            <th><div className="logo-icon green"></div></th>
            <th>uBCH</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
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