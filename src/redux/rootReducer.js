import AccountMiddleThird from "../components/AccountMiddleThird"
import MiddleThird from "../components/MiddleThird"
import ChangePassword from "../components/ChangePassword"
import Tables from "../components/Tables"

const initState = {
    display: '',
    middleThirdOptions: <MiddleThird />,
    title: 'Lobby',
    accountDisplay: 'pppppp'
}

const rootReducer = (state = initState, action) => {
      
  /*if (action.type === "LOAD_TABLES") {
        console.log('load tables')
        return {
            ...state,
            display: <Tables />
        }
    }
    else return state */
    switch(action.type) {
        case "LOAD_TABLES":
            return {
                ...state,
                middleThirdOptions: <MiddleThird />,
                display: <Tables />,
                title: 'Lobby'
            }
        case "LOAD_ACCOUNT":
            return {
                ...state,
                middleThirdOptions: <AccountMiddleThird />,
                title: 'Account'
            }
        default: 
            return state
    } 
    
}

export default rootReducer