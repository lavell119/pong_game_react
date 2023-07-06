import React from 'react'
import { useDispatch } from 'react-redux'

export function useLogout() {
    const dispatch = useDispatch()

    const logout = () => {
        //remove user from local storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({ type: 'LOGOUT' })

    }
  return {logout}
}
