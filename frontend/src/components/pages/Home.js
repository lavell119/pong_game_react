import Header from '../Header.js'
import Seperator from '../Seperator.js'
import DisplayHeader from '../DisplayHeader.js'
import MiddleThird from '../MiddleThird.js'
import FooterWidget from '../FooterWidget.js'

import React from 'react'

export default function Home() {
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
