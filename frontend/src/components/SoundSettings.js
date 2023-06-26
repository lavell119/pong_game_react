export default function SoundSettings() {
    return (
        <div className="sound-settings-container">
            <div className="sound-section-1">
                <div><input type="checkbox"></input>Enable sound</div>
                <div>Master Volume<input type="range"></input></div>
            </div>
            <div className="sound-section-2">
                Individual Sound Settings
            </div>
            <div class="sound-section-3">
                <div className="sound-ele"><input type="checkbox"></input>Fold</div>
                <div className="sound-ele"><input type="checkbox"></input>Call</div>
                <div className="sound-ele"><input type="checkbox"></input>Bring-In</div>
                <div className="sound-ele"><input type="checkbox"></input>Big Blind</div>
                <div className="sound-ele"><input type="checkbox"></input>Raise</div>
                <div className="sound-ele"><input type="checkbox"></input>Muck</div>
                <div className="sound-ele"><input type="checkbox"></input>Check</div>
                <div className="sound-ele"><input type="checkbox"></input>Ante</div>
                <div className="sound-ele"><input type="checkbox"></input>Small Blind</div>
                <div className="sound-ele"><input type="checkbox"></input>Bet</div>
                <div className="sound-ele"><input type="checkbox"></input>Show Cards</div>
                <div className="sound-ele"><input type="checkbox"></input>Hide Winning Cards</div>          
            </div>
            <div className="sound-section-4">
                <button className="def-btn">Save</button>
                <button className="def-btn">Cancel</button> 

            </div>
        </div>
    )
}