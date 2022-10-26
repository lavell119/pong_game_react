import ChangePassword from "../components/ChangePassword"
import Tables from "../components/Tables"

const initState = {
    display: '',
    sidebarElements: [
        'Account Information',
        'Change Password', 
        'Account Security',
        'Change email', 
        'Change Avatar'
    ]
}

const rootReducer = (state = initState, action) => {
    /*if (action.type === "CHANGE_DISPLAY") {
        return {
            ...state,
            display: <ChangePassword />
        }
    }*/
    if (action.type === "LOAD_TABLES") {
        console.log('load tables')
        return {
            display: <Tables />
        }
    }
}

export default rootReducer