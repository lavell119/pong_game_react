import {React, useEffect} from 'react'
import Header from './Header.js'
import Seperator from './Seperator.js'
import DisplayHeader from './DisplayHeader.js'
import MiddleThird from './MiddleThird.js'
import { useSelector } from 'react-redux'
import Home from './pages/Home.js'
import Signup from './pages/Signup.js'
import Login from './pages/Login.js'
// import Pong_Table from './PongComponents/Pong_Tables.js'
import { BrowserRouter, Link,  Route, Switch, Routes, Navigate } from 'react-router-dom'
import Navbar from './Navbar.js'
import {useDispatch} from 'react-redux'
import Pong_Table from '../PongComponents/Pong_Table.js'
import LobbyTest from './LobbyTest.js'



function App() {
  const user = useSelector(state => state.pong_user)
  console.log('user state: ', user)
  const dispatch= useDispatch()
  useEffect(() => {
    //check if user exists in local storage
    const user = JSON.parse(localStorage.getItem('user'))

    if(user) {
      console.log('user exists in local storage')

      dispatch({ type: 'LOGIN', payload: user.user})
    }
  }, [])

  const middleThirdToggle=useSelector(state => state.middleThirdOptions)
  return (
    <>
    <Navbar />
         {/* <button>{user}</button> */}

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home />: <Navigate to="/login" />}>
        </Route>
        <Route exact path ="/login" element ={!user ? <Login /> : <Navigate to= "/" />}>
        </Route>
        <Route exact path ="/signup" element = {!user ? <Signup /> : <Navigate to= "/" />}>
        </Route>
        <Route exact path ="/table/:id" element = {<Pong_Table />}>
        </Route>
        <Route exact path ="/lobbytest" element = {<LobbyTest />}>
        </Route>
        {/* <Route exact path ="/table" element = {<Pong_Table />}>
        </Route> */}
      </Routes>
    </BrowserRouter>
    
</>
      
    
   
)
}

export default App;
