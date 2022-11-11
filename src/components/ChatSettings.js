export default function ChatSettings() {
    return (
    <div className="chat-settings">
            <div className="chat">
                <text><input type="checkbox"></input>Disable Dealer chat messages</text>
                <text><input type="checkbox"></input>Disable messages from all players in the chat</text>
                <text><input type="checkbox"></input>Disable pop-up messages</text>
                <text><input type="checkbox"></input>Disable emoticons</text>
                <text><input type="checkbox"></input>Change text color</text>               
            </div>
            <div className="chat-setting-btns">
                <button className="chat-btn">Save</button>
                <button className="chat-btn">Cancel</button>
            </div>
        </div>
    )
}