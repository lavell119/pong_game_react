import { useDispatch } from "react-redux"
import {useSelector } from "react-redux"

export default function Sidebar () {
    let sideBarActive = useSelector(state=>state.sideBarActive)
    let changingSideBar = useSelector(state=>state.changingSideBar)
    let dispatch = useDispatch()

    return (
    <div className="sidebar">
        <div className={`sidebar-ele ${sideBarActive[0]}`} onClick={()=>
            {dispatch({ type: "render-sidebar-ele", payload: { display: changingSideBar[0].display, title: changingSideBar[0].title }})
            dispatch({ type: "CHANGE_SIDEBAR_1"})
            //CHECK SIDEBAR
            if(changingSideBar[0].sidebar){
                {dispatch({ type: changingSideBar[0].sidebar })}
            }
            }}>{ changingSideBar[0].title }
        </div>

        <div className={`sidebar-ele ${sideBarActive[1]}`} onClick={()=>
            {dispatch({ type: "render-sidebar-ele", payload: { display: changingSideBar[1].display, title: changingSideBar[1].title }})
            dispatch({ type: "CHANGE_SIDEBAR_2"})
            //CHECK SIDEBAR
            if(changingSideBar[1].sidebar){
                {dispatch({ type: changingSideBar[1].sidebar })}
            }
            }}>{ changingSideBar[1].title }
        </div>

        <div className={`sidebar-ele ${sideBarActive[2]}`} onClick={()=>
            {dispatch({ type: "render-sidebar-ele", payload: { display: changingSideBar[2].display, title: changingSideBar[2].title }})
            dispatch({ type: "CHANGE_SIDEBAR_3"})
            //CHECK SIDEBAR
            if(changingSideBar[2].sidebar){
                {dispatch({ type: changingSideBar[2].sidebar })}
            }
            }}>{ changingSideBar[2].title }
        </div>

        <div className={`sidebar-ele ${sideBarActive[3]}`} onClick={()=>
            {dispatch({ type: "render-sidebar-ele", payload: { display: changingSideBar[3].display, title: changingSideBar[3].title }})
            dispatch({ type: "CHANGE_SIDEBAR_4"})
            //CHECK SIDEBAR
            if(changingSideBar[3].sidebar){
                {dispatch({ type: changingSideBar[3].sidebar })}
            }
            }}>{ changingSideBar[3].title }
        </div>

        <div className={`sidebar-ele ${sideBarActive[4]}`} onClick={()=>
            {dispatch({ type: "render-sidebar-ele", payload: { display: changingSideBar[4].display, title: changingSideBar[4].title }})
            dispatch({ type: "CHANGE_SIDEBAR_5"})
            //CHECK SIDEBAR
            if(changingSideBar[4].sidebar){
                {dispatch({ type: changingSideBar[4].sidebar })}
            }
            }}>{ changingSideBar[4].title }
        </div>  
    </div>
    )
}