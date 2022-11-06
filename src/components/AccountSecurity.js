export default function AccountSecurity() {
    return (
       <div className="account-security">
            <div className="authentication-container">
                <div className="auth-top">
                    Two-Factor Authentication
                </div>
                <div className="auth-bottom">
                    <div className="auth-bottom-1">
                        Please select authentication method:
                    </div>
                    <div className="auth-bottom-1"><input type="radio" class="radio"></input>
                        Google Authenticator
                    </div>
                </div>
            </div>
            <div className="authentication-container2">
                <button class="default-btn auth-btn">Enable two-factor authentication</button>
            </div>
       </div>
    )
    
}