import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const dispatch = useDispatch()
    const user = useSelector(state => state.pong_user)

    const signup = async(email, password, username) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch("/signup", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, username})
        })
        const json = await response.json()
        console.log("json: ", json)

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok) {
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            console.log(user)
            //upddate the auth context with
            dispatch({type: 'LOGIN', payload: json.user})
            console.log(user)

            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}

