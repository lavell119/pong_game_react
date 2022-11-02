import AccountMiddleThird from "../components/AccountMiddleThird"
import MiddleThird from "../components/MiddleThird"
import ChangePassword from "../components/ChangePassword"
import Tables from "../components/Tables"
import AccountInformation from "../components/AccountInformation"
import ChangeEmail from "../components/ChangeEmail"
import Cashier from "../components/Cashier"
import CashierOverview from "../components/CashierOverview"

const initState = {
    display: '',
    middleThirdOptions: <MiddleThird />,
    title: 'Lobby',
    accountDisplay: <AccountInformation />,
    cashierContent: <CashierOverview />
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
                display: <AccountInformation />,
                title: 'Account'
            }
        case "LOAD_ACCOUNT_SNIP":
            return {
                ...state,
                display: action.payload.snippet,
                title: action.payload.title
            }
        
        case "LOAD_CASHIER":
            return {
                ...state,
                display: <Cashier />,
                title: 'Cashier'
            }

        case "CHANGE_CASHIER":
            return {
                ...state,
                cashierContent: action.payload
                }

        default: 
            return state
    } 
    
}

export default rootReducer