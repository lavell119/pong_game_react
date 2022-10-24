import React from 'react'
import Header from './Header.js'
import Seperator from './Seperator'
import DisplayHeader from './DisplayHeader.js'
import MiddleThird from './MiddleThird.js'




function App() {
  return (
    <>
  <div className="top-third">
  <Header />
  <Seperator />
  <DisplayHeader />
  </div>
  <MiddleThird />
  <div className="bottom-third">
  </div>
    </>
)
}

export default App;
