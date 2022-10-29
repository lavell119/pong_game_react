import React from 'react'
import Header from './Header.js'
import Seperator from './Seperator.js'
import DisplayHeader from './DisplayHeader.js'
import MiddleThird from './MiddleThird.js'

function AccountPage() {
  return (
    <>
  <div className="top-third">
  <Header />
  <DisplayHeader />
  </div>
  <MiddleThird />
  <div className="bottom-third">
  </div>
    </>
)
}

export default AccountPage;