import AccountMiddleThird from "../components/AccountMiddleThird"
import MiddleThird from "../components/MiddleThird"
import ChangePassword from "../components/ChangePassword"
import Tables from "../components/Tables"
import AccountInformation from "../components/AccountInformation"
import ChangeEmail from "../components/ChangeEmail"
import Cashier from "../components/Cashier"
import CashierOverview from "../components/CashierOverview"
import Cashierp2p from "../components/Cashierp2p"
import CashierHistory from "../components/CashierHistory"

const initState = {
    display: <Tables />,
    middleThirdOptions: <MiddleThird />,
    title: 'Lobby',
    accountDisplay: <AccountInformation />,
    cashierContent: <CashierOverview />,
    cashierHeader: [null, null, null, null, null, null],
    sideBarActive: [null, null, null, null, null, null]

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
        //ACCOUNT
        case "LOAD_ACCOUNT":
            return {
                ...state,
                middleThirdOptions: <AccountMiddleThird />,
                display: <AccountInformation />,
                title: 'Account',
                sideTitle: 'Account',
                sideBarActive: ['activ', null, null, null, null]               

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
                sideTitle: 'Cashier',
                cashierHeader: ['active', null, null, null, null, null],
                cashierContent: <CashierOverview />
            }
        //CASHIER
        case "CHANGE_CASHIER":
            return {
                ...state,
                cashierContent: action.payload
                }
        case "CHANGE_CASHIER_OVERVIEW":
            return {
                ...state,
                cashierHeader: ['active', null, null, null, null, null]
            }
        case "CHANGE_CASHIER_DEPOSIT":
            return {
                ...state,
                cashierHeader: [null, 'active', null, null, null, null]
            }
        case "CHANGE_CASHIER_TRANSFER":
            return {
                ...state,
                cashierHeader: [null, null, null, 'active', null, null]
                }
        case "CHANGE_CASHIER_WITHDRAWAL":
            return {
                ...state,
                cashierHeader: [null, null, 'active', null, null, null]
            }
        case "CHANGE_CASHIER_P2P":
            return {
                ...state,
                cashierHeader: [null, null, null, null, 'active', null] 
            }
        case "CHANGE_CASHIER_HISTORY":
            return {
                ...state,
                cashierHeader: [null, null, null, null, null, 'active'] 
            }
        //SIDEBAR 
        case "CHANGE_SIDEBAR_1":
            return {
                ...state,
                sideBarActive: ['activ', null, null, null, null] 
            }
        case "CHANGE_SIDEBAR_2":
            return {
                ...state,
                sideBarActive: [null, 'activ', null, null, null] 
            }
        case "CHANGE_SIDEBAR_3":
            return {
                ...state,
                sideBarActive: [null, null, 'activ', null] 
            }
        case "CHANGE_SIDEBAR_4":
            return {
                ...state,
                sideBarActive: [null, null, null, 'activ'] 
            }
        case "RESET_SIDEBAR_ACTIVE":
        return {
            ...state,
            sideBarActive: [null, null, null, null] 
        }
        default: 
            return state
    } 
    
}

export default rootReducer