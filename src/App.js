
import './App.css';
import React from 'react'
import Navbar from './portfolio/components/navbar/Navbar.jsx'
import PageContent from './portfolio/components/pagecontent/PageContent';
import About from './portfolio/components/about/About';

export default function App() {
  return (
    <appBody className="w3-black">
      <Navbar />
      <div className="w3-padding-large" id="main">
        <PageContent />
        <About/>
      </div>
    </appBody>

  )
}
