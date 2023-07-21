import { useSelector } from 'react-redux'
import { useState } from 'react'


export default function ChangeEmail() {
    const [newEmail, setNewEmail] = useState('')
    const user = useSelector(state => state.pong_user)
    const email_address=user.email
    console.log('user email: ',email_address)

    const changeEmail = function(e){
        e.preventDefault()
        console.log('new email: ', newEmail)
    }

    return (
        <div className="display-element change-email">
            <div className="change-email-row">
                <form onSubmit={changeEmail}>
                <label>New E-mail:</label>
                <input onChange={(e)=>setNewEmail(e.target.value)}className="change-email-input" />
                <button className="default-btn">Save</button>   

                </form>       
            </div>    
        </div>
    )
}