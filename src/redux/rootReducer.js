import AccountMiddleThird from "../components/AccountMiddleThird"
import MiddleThird from "../components/MiddleThird"
import ChangePassword from "../components/ChangePassword"
import Tables from "../components/Tables"
import AccountInformation from "../components/AccountInformation"
import ChangeEmail from "../components/ChangeEmail"
import Cashier from "../components/Cashier"
import CashierOverview from "../components/CashierOverview"
import Cashierp2p from "../components/Cashierp2p"

const initState = {
    display: '',
    middleThirdOptions: <MiddleThird />,
    title: 'Lobby',
    accountDisplay: <AccountInformation />,
    cashierContent: <CashierOverview />,
    cashierHeader: [null, null, null, null, null, null]
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
                title: 'Lobby',
                sideTitle: 'Lobby'
            }
        case "LOAD_ACCOUNT":
            return {
                ...state,
                middleThirdOptions: <AccountMiddleThird />,
                display: <AccountInformation />,
                title: 'Account',
                sideTitle: 'Account'
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
                title: 'Cashier',
                sideTitle: 'Cashier'
            }

        case "CHANGE_CASHIER":
            return {
                ...state,
                cashierContent: action.payload
                }
        case "CHANGE_CASHIER_DEPOSIT":
            return {
                ...state,
                cashierHeader: [null, 'active', null, null, null, null]
            }
        case "CHANGE_CASHIER_WITHDRAWAL":
            return {
                ...state,
                cashierHeader: [null, null, 'active', null, null, null]
            }

        default: 
            return state
    } 
    
}

export default rootReducer