export default function Cashierp2p () {
    return (
        <div class="p2p-snippet">
            <div class="p2p-left">
                <h2>Make an Offer</h2>
                <br />
                    <div class="make-an-offer">
                        <div class="p2p-left-row">
                            Offer to 
                            <div class="p2p-left-row-right">
                                <input type="text" class="offer-to-input" placeholder="Player's Username"></input>
                            </div>
                        </div>
                        <div class="p2p-left-row">
                            Send
                            <div class="p2p-left-row-right p2p-send-row">
                                <select placeholder="BTC">
                                    <option value="uBTC">uBTC</option>
                                    <option value="uBCH">uBCH</option>
                                </select>
                                <input type="text" class="p2p-send-input" placeholder="Send"></input>
                            </div>
                        </div>
                        <div class="p2p-left-row">
                            Recieve
                            <div class="p2p-left-row-right p2p-send-row">
                                <select placeholder="BTC">
                                    <option value="uBTC">uBTC</option>
                                    <option value="uBCH">uBCH</option>
                                </select>
                                <input type="text" class="p2p-send-input" placeholder="Recieve"></input>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="p2p-right">
                <h2>My Offers</h2>
            </div>
        </div>
    )    
}