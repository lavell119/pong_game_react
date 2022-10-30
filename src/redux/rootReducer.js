import AccountMiddleThird from "../components/AccountMiddleThird"
import MiddleThird from "../components/MiddleThird"
import ChangePassword from "../components/ChangePassword"
import Tables from "../components/Tables"

const initState = {
    display: '',
    middleThirdOptions: <MiddleThird />
}

const rootReducer = (state = initState, action) => {
      
    if (action.type === "LOAD_TABLES") {
        console.log('load tables')
        return {
            ...state,
            display: <Tables />
        }
    }
    else return state
}

export default rootReducer