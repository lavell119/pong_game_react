import ChangePassword from "../components/ChangePassword"
import Tables from "../components/Tables"

const initState = {
    display: <Tables />
}

const rootReducer = (state = initState, action) => {
    if (action.type === "CHANGE_DISPLAY") {
        return {
            ...state,
            display: <ChangePassword />
        }
    }
    if (action.type === "TEST") {
        console.log('test')
        return {
            ...state,
        }
    }
}

export default rootReducer