import chat from './images/comment4.png'
import trophy from './images/first-place-trophy.png'
import table from './images/pokertable.png'



export default function FooterWidget () {
    return (
        <div className="footer-widget">
            <div className="ftr-widget"><img src={chat}></img>0</div>
            <div className="ftr-widget"><img src={trophy}></img>0</div>
            <div className="ftr-widget"><img src={table}></img>0</div>
        </div>
    )
}