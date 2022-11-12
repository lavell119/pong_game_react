import React from 'react'
import Header from './Header.js'
import Seperator from './Seperator.js'
import DisplayHeader from './DisplayHeader.js'
import MiddleThird from './MiddleThird.js'
import { useSelector } from 'react-redux'
import FooterWidget from './FooterWidget.js'

function App() {
  const middleThirdToggle=useSelector(state => state.middleThirdOptions)
  return (
    <>
  <div className="top-third">
  <Header />
  <Seperator />
  <DisplayHeader />
  </div>
  <MiddleThird />
  <div className="bottom-third">
    <FooterWidget />
  </div>
    </>
)
}

export default App;
