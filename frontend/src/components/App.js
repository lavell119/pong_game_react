import React from 'react'
import Header from './Header.js'
import Seperator from './Seperator.js'
import DisplayHeader from './DisplayHeader.js'
import MiddleThird from './MiddleThird.js'
import { useSelector } from 'react-redux'
import FooterWidget from './FooterWidget.js'
import Table1 from './tables/Table1.js'
import Home from './pages/Home.js'
import Signup from './pages/Signup.js'
import Login from './pages/Login.js'
import Pong_Table from './PongComponents/Pong_Table.js'
import AddTableButton from './PongComponents/AddTableButton.js'

import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'



function App() {
  const user = useSelector(state => state.pong_user)

  const middleThirdToggle=useSelector(state => state.middleThirdOptions)
  return (
    <>
         <button>{user}</button>

    <BrowserRouter>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path ="/login">
        <Login />
      </Route>
      <Route exact path ="/signup">
        <Signup />
      </Route>
      <Route exact path ="/table">
        <Pong_Table />
      </Route>
      </Switch>
    </BrowserRouter>
    
</>
      
    
   
)
}

export default App;
