import React from 'react'
import './PageContent.css'
import me from '../../assets/me.png'

export default function PageContent() {
  return (
    <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
        <h1 className="w3-jumbo">
          <span className="w3-hide-small">I'm</span> Asad Kahloon.
        </h1>
        <h3><span className="change-content"></span> Developer.</h3>
        <img
          src={me}
          alt="boy"
          className="w3-image"
          width="992"
          height="1108"
        />
      </header>
  )
}
