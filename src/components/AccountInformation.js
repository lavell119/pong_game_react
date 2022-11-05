export default function AccountInformation() {
    return (
        <>
        <div className="display-element account-information">
                <div class="ai-row">
                <div className="personal-info">
                    <h4>Personal Info</h4>
                        
                    <div className="widget">
                        <div className="personal-info-text bold">
                            <div className="nick-key">Nick:</div>
                            <div className="email-key">Email:</div>
                        </div>
                        <div className="personal-info-text">
                            <div className="nick-key">Username</div>
                            <div className="email-key">superman@gmail.com</div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="ai-row">
                <div className="personal-info">
                    <h4>Account Status</h4>
                    <div className="widget between flex-start">
                        <div className="personal-info-text split bold">
                            <div class="bigger-txt">Rating Info</div>
                            <br />
                            <div>Ranking:</div>
                        </div>
                        <div className="personal-info-text flex-end">
                            <div class>Beginner</div>
                        </div>
                    </div>
                </div>
                <div className="personal-info">
                    <div className="widget between">
                        <div className="personal-info-text bold">
                            <div>uBTC</div>
                            <div>uBCH</div>
                        </div>
                        <div className="personal-info-text">
                            <div class="green-txt">0</div>
                            <div class="orange-txt">0</div>
                        </div>
                    </div>
                    <div className="widget between">
                        <div className="personal-info-text bold">
                            <div>Krill</div>
                        </div>
                        <div className="personal-info-text">
                            <div>3219</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </>
    )
}