import React from 'react'
import Header from './Header.js'
import Seperator from './Seperator.js'
import DisplayHeader from './DisplayHeader.js'
import MiddleThird from './MiddleThird.js'
import AccountMiddleThird from './AccountMiddleThird.js'
import { useSelector } from 'react-redux'

function App() {
  const middleThirdToggle=useSelector(state => state.middleThirdOptions)
  return (
    <>
  <div className="top-third">
  <Header />
  <Seperator />
  <DisplayHeader />
  </div>
  {middleThirdToggle}
  <div className="bottom-third">
  </div>
    </>
)
}

export default App;
