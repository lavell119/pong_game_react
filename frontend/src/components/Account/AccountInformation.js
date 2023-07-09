import { useSelector } from "react-redux"

export default function AccountInformation() {

    
    const username=useSelector(state => state.pong_user.username)
    const rank=useSelector(state => state.pong_user.rank)
    const chips=useSelector(state => state.pong_user.chipcount)

    const krill=useSelector(state => state.pong_user.krill)
    const email=useSelector(state => state.pong_user.email)


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
                            <div className="nick-key">{ username }</div>
                            <div className="email-key">{ email }</div>
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
                            <div class>{ rank }</div>
                        </div>
                    </div>
                </div>
                <div className="personal-info">
                    <div className="widget between">
                        <div className="personal-info-text bold">
                            <div>Chip Balance:</div>
                        </div>
                        <div className="personal-info-text">
                            <div class="green-txt">{ chips }</div>
                        </div>
                    </div>
                    <div className="widget between">
                        <div className="personal-info-text bold">
                            <div>Krill</div>
                        </div>
                        <div className="personal-info-text">
                            <div>{ krill }</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </>
    )
}