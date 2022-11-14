import chat from './images/comment4.png'
import trophy from './images/first-place-trophy.png'
import table from './images/pokertable.png'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


export default function FooterWidget () {
    let chatPopupState = useSelector(state=>state.chatState)

    let dispatch = useDispatch()
    return (
        <div className="footer-widget">
            <div className="ftr-widget" onClick={()=>
            { 
                if(chatPopupState===''){
                dispatch({ type: "open-chat-popup" }) }
                
            }
                }><img src={chat}></img>0</div>
            <div className="ftr-widget"><img src={trophy}></img>0</div>
            <div className="ftr-widget"><img src={table}></img>0</div>
        </div>
    )
}