import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


export default function ChatPopup() {
    let dispatch = useDispatch()
    let chatState = useSelector(state => state.chatState)
    const [isActive, setIsActive] = useState(false)

    const handleClick = event => {
        setIsActive(current => !current)
    }
    return (
        <div className={`chat-popup ${chatState}`}>        
        </div>
    )
}