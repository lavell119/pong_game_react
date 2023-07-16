import AccountMiddleThird from "../components/Account/AccountMiddleThird"
import MiddleThird from "../components/MiddleThird"
import ChangePassword from "../components/Account/ChangePassword"
import Tables from "../components/Tables"
import AccountInformation from "../components/Account/AccountInformation"
import ChangeEmail from "../components/Account/ChangeEmail"
import Cashier from "../components/Cashier/Cashier"
import CashierOverview from "../components/Cashier/CashierOverview"
import Cashierp2p from "../components/Cashier/Cashierp2p"
import CashierHistory from "../components/Cashier/CashierHistory"
import Avatar from "../components/Account/AccountAvatar"
import AccountSecurity from "../components/Account/AccountSecurity"
import ChatSettings from "../components/ChatSettings"
import SoundSettings from "../components/SoundSettings"


let serverState = {
    numPlayers: 19,
    numPlayersOnline: 11,
    numTournaments: 3
}

let user = {
    username: "afrosamurai",
    password: "password",
    UBTCchipCount: 0,
    UBCHchipCount: 0,
    rank: "Beginner",
    email: "afrosamurai119@gmail.com",
    krill: 0
}

/////--
/////--SIDEBARS

let accountSidebar=
[
{title: 'Account Information', display: <AccountInformation /> },                                
{title: 'Change Password', display: <ChangePassword /> },
{title: 'Account Security', display: <AccountSecurity /> },
{title: 'Change E-mail', display: <ChangeEmail /> }, 
{title: 'Change Avatar', display: <Avatar /> }
] 

let homeSideBar= 
[ 
{title: 'Lobby', display: <Tables />}, 
{title: 'Settings', display: '', sidebar: "LOAD_SETTING_SIDEBAR"}, 
{title: 'Account', display: '', sidebar: "LOAD_ACCOUNT"} , 
{title: 'Cashier', display: <Cashier />}, 
{title: 'About', display: ''} 
] 

let settingsSideBar= 
[ 
{title: 'Chat Settings', display: <ChatSettings />}, 
{title: 'Sound Settings', display: <SoundSettings />}, 
{title: 'Language', display: ''}, 
{title: 'Cashier', display: <Cashier />}, 
{title: 'Table Skins', display: ''} 
] 

/////--Pong Tables
let pongTables = {
    table1: {
        player1: null,
        player2: null
    },
    table2: {
        player1: null,
        player2: null
    },
    table3: {
        player1: null,
        player2: null
    },
    table4: {
        player1: null,
        player2: null
    },
    table5: {
        player1: null,
        player2: null
    },
    table6: {
        player1: null,
        player2: null
    },
    table7: {
        player1: null,
        player2: null
    },
    table8: {
        player1: null,
        player2: null
    },
    table9: {
        player1: null,
        player2: null
    },
    table10: {
        player1: null,
        player2: null
    }
}
   

/////--INITSTATE

const initState = {
    numOfTables: 0,
    pongTables: pongTables,
    display: <Tables />,
    middleThirdOptions: <MiddleThird />,
    title: 'Lobby',
    accountDisplay: <AccountInformation />,
    cashierContent: <CashierOverview />,
    cashierHeader: [null, null, null, null, null, null],
    sideBarActive: ['activ', null, null, null, null],
    slidePosition: 0, 
    changingSideBar: homeSideBar,
    currentUser: null,
    chatState: '',
    serverState: serverState,
    pong_user: null
}


/////--ROOTREDUCER

const rootReducer = (state = initState, action) => {

    switch(action.type) {
        case "LOAD_TABLES":
            return {
                ...state,
                middleThirdOptions: <MiddleThird />,
                display: <Tables />,
                title: 'Lobby',
                sideTitle: 'Lobby',
                changingSideBar: homeSideBar,
                sideBarActive: ['activ', null, null, null, null],

                
            }
        //ACCOUNT
        case "LOAD_ACCOUNT":
            return {
                ...state,
                middleThirdOptions: <AccountMiddleThird />,
                display: <AccountInformation />,
                title: 'Account',
                sideTitle: 'Account',
                sideBarActive: ['activ', null, null, null, null],
                changingSideBar: accountSidebar
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
                cashierContent: <CashierOverview />,
                changingSideBar: homeSideBar   

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
        //SIDEBAR ACTIVE CLASS
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
                sideBarActive: [null, null, 'activ', null, null] 
            }
        case "CHANGE_SIDEBAR_4":
            return {
                ...state,
                sideBarActive: [null, null, null, 'activ', null] 
            }
        case "CHANGE_SIDEBAR_5":
            return {
                ...state,
                sideBarActive: [null, null, null, null, 'activ'] 
            }
        case "RESET_SIDEBAR_ACTIVE":
        return {
            ...state,
            sideBarActive: [null, null, null, null, null] 
        }

        //CHANGING SIDEBAR 
        case "LOAD_ACCOUNT_SIDEBAR":
        return {
            ...state,
            changingSideBar: accountSidebar
        }

        case "LOAD_SETTING_SIDEBAR":
        return {
            ...state,
            changingSideBar: settingsSideBar,
            title: 'Chat Settings',
            sideTitle: 'Settings',
            sideBarActive: ['activ', null, null, null, null],
            display: <ChatSettings />

        }


        //TABLE SLIDER
        case "SLIDE-TABLES-RIGHT":
        return {
            ...state,
            slidePosition: state.slidePosition-300
        } 
        case "SLIDE-TABLES-LEFT":
            if(state.slidePosition<-1)
        return {
            ...state,
            slidePosition: state.slidePosition+300
        }   
        case "render-sidebar-ele":
        return {
            ...state,
                display: action.payload.display,
                title: action.payload.title           
        }  

        //TOGGLE-CHAT
        case "open-chat-popup":
        return {
            ...state,
            chatState: 'open-chat'
        }

        case "close-chat-popup":
        return {
            ...state,
            chatState: ''
        }
        

        case "toggle-chat":
        return {
            ...state,
            openChat: current=>!current 

            }

        //authentication
        case "UPDATE_USER_STATE":
            return {
                ...state,
                pong_user: 'user logged in'
            }

        case "LOGOUT":
            return {
                ...state,
                pong_user: null
            }

        case "LOGIN":
            return {
                ...state,
                pong_user: action.payload
            
            }
        

        default: 
            return state
    } 
    
}

export default rootReducer