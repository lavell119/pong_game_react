import React from 'react'
import Header from './Header.js'
import Seperator from './Seperator.js'
import DisplayHeader from './DisplayHeader.js'
import MiddleThird from './MiddleThird.js'
import { useSelector } from 'react-redux'
import FooterWidget from './FooterWidget.js'
import Table1 from './tables/Table1.js'
import Home from './pages/Home.js'

import { BrowserRouter, Route, ROutes } from 'react-router-dom'




function App() {
  const middleThirdToggle=useSelector(state => state.middleThirdOptions)
  return (
    

      <Home />
    
   
)
}

export default App;
