export default function CashierHistory() {
    return (
        <div className="history">
            <div className="history-row-1">
                <div className="history-row-1-part-1">
                <select class="cash-history-select-1" placeholder="BTC">
                    <option value="uBTC">uBTC</option>
                    <option value="uBCH">uBCH</option>
                </select>
                <select class="cash-history-select-2" placeholder="Deposit">
                    <option value="uBTC">Deposit</option>
                    <option value="uBCH">Withdraw</option>
                    <option value="uBTC">Transfer</option>
                </select>
                </div>
                <div className="history-row-1-part-2">
                    <input placeholder="6/10/2022"></input>
                    <input placeholder="5/11/2022"></input>
                </div>
            </div>
        </div>
    )
}