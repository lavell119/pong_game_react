import chat from './images/comment4.png'
import trophy from './images/first-place-trophy.png'
import table from './images/pokertable.png'
import { useDispatch } from 'react-redux'



export default function FooterWidget () {
    let dispatch = useDispatch()
    return (
        <div className="footer-widget">
            <div className="ftr-widget" onClick={()=>
            {dispatch({ type: "toggle-chat-popup" }) }}><img src={chat}></img>0</div>
            <div className="ftr-widget"><img src={trophy}></img>0</div>
            <div className="ftr-widget"><img src={table}></img>0</div>
        </div>
    )
}