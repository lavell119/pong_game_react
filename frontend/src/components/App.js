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

import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'




function App() {
  const middleThirdToggle=useSelector(state => state.middleThirdOptions)
  return (
    <>
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
      </Switch>
    </BrowserRouter>
    
</>
      
    
   
)
}

export default App;
