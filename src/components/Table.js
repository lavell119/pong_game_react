export default function Table() {
    return (
            <div className="display-table">
                <div className="tble-header">
                    <text>Stakes</text>
                    <text className="stakes">$1 / $2</text>
                </div>
                <div className="tble">
                    <div className="tble-plyrs-wrapper">
                        <div className="plyr plyr1"></div>
                        <div className="plyr plyr2"></div>
                        <div className="plyr plyr3"></div>
                        <div className="plyr plyr4"></div>
                    </div>
                </div>
                <div className="tble-footer">
                    <div className="join-btn">
                        JOIN TABLE
                    </div>
                    <div className="number-of-players-ele">
                        Waiting for Players...
                    </div>
                </div>

            </div>
    )
    
}