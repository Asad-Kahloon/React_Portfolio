import React from 'react'
import './About.css'
import Contact from '../contactform/ContactForm'
import Footer from '../footer/Footer'
import p1 from '../../assets/1.jpg'
import p2 from '../../assets/2.jpg'
import p3 from '../../assets/3.jpg'
import p4 from '../../assets/4.jpg'
import p5 from '../../assets/5.PNG'
import p6 from '../../assets/6.PNG'
import p7 from '../../assets/7.PNG'
import c1 from '../../assets/8.PNG'
import c2 from '../../assets/9.PNG'
import c3 from '../../assets/10.PNG'
import c4 from '../../assets/11.PNG'
import c5 from '../../assets/12.PNG'
import c6 from '../../assets/13.PNG'
import c7 from '../../assets/14.PNG'
import c8 from '../../assets/15.PNG'
export default function About() {
  return (
    <div>
      

      <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
        <h2 className="w3-text-light-grey">About</h2>
        <hr className="w3-opacity hr" />
        <p>
          I'm Asad Kahloon, a dedicated MERN Stack web developer with a passion
          for turning innovative ideas into exceptional digital experiences.
          Over the course of my journey, I've had the privilege of bringing
          numerous projects to life, each a testament to my commitment to
          excellence and my insatiable curiosity for cutting-edge technologies.
        </p>
        <p>
          With a strong foundation in MongoDB, Express.js, React, and Node.js, I
          thrive in the world of web development. My projects stand as a fusion
          of functionality and aesthetics, where user-centered design meets
          seamless functionality. Through every line of code I write, my goal is
          to create solutions that not only solve problems but also elevate user
          experiences.
        </p>
        <p>
          Welcome to my portfolio, where you'll find a showcase of my projects,
          each a testament to my dedication and creativity. Join me on this
          journey of innovation, and let's shape the future of web development
          together.
        </p>
        <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
        <p className="w3-wide">Frontend Development (React)</p>
        <div className="w3-white">
          <div className="w3-dark-grey w90" ></div>
        </div>
        <p className="w3-wide">Backend Development (Node.js and Express.js)</p>
        <div className="w3-white">
          <div className="w3-dark-grey w85" ></div>
        </div>
        <p className="w3-wide">Database Management (MongoDB)</p>
        <div className="w3-white">
          <div className="w3-dark-grey w80"></div>
        </div>
        <p className="w3-wide">Testing and Quality Assurance</p>
        <div className="w3-white">
          <div className="w3-dark-grey w85" ></div>
        </div>
        <p className="w3-wide">Deployment and Hosting</p>
        <div className="w3-white">
          <div className="w3-dark-grey w80" ></div>
        </div>
        <p className="w3-wide">Agile Methodologies</p>
        <div className="w3-white">
          <div className="w3-dark-grey w80" ></div>
        </div>
        <p className="w3-wide">Problem Solving and Learning</p>
        <div className="w3-white">
          <div className="w3-dark-grey w85" ></div>
        </div>
        <br />

        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">2</span><br />
            Partners
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">15+</span><br />
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">10</span><br />
            Happy Clients
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">15+</span><br />
            Meetings
          </div>
        </div>

        <a href="./Asad Javed.pdf" download="Asad-Kahloon.pdf">
          <button className="w3-button w3-light-grey w3-padding-large w3-section">
            <i className="fa fa-download"></i> Download Resume
          </button></a
        >

        <h3 className="w3-padding-16 w3-text-light-grey">My Price</h3>
        <div className="w3-row-padding priceBox" >
          <div className="w3-half w3-margin-bottom">
            <ul
              className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off"
            >
              <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">FrontEnd</li>
              <li className="w3-padding-16">5GB Storage</li>
              <li className="w3-padding-16">Mail Support</li>
              <li className="w3-padding-16">
                <h2>$ 10</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <a
                  href="mailto:asadkahloon77@gmail.com?subject=Sign Up&body=Basic Package"
                >
                  <button
                    className="w3-button w3-white w3-padding-large w3-hover-black"
                  >
                    Sign Up
                  </button></a
                >
              </li>
            </ul>
          </div>

          <div className="w3-half">
            <ul
              className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off"
            >
              <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Full Stack</li>
              <li className="w3-padding-16">50GB Storage</li>
              <li className="w3-padding-16">Endless Support</li>
              <li className="w3-padding-16">
                <h2>$ 25</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <a
                  href="mailto:asadkahloon77@gmail.com?subject=Sign Up&body=Want Pro Package"
                  ><button
                    className="w3-button w3-white w3-padding-large w3-hover-black"
                  >
                    Sign Up
                  </button></a
                >
              </li>
            </ul>
          </div>
        </div>

        <h3 className="w3-padding-24 w3-text-light-grey">My Clients</h3>
        <div className="clients">
          <div className="client">
        <img
          src="https://www.w3schools.com/w3images/bandmember.jpg"
          alt="Avatar"
          className="w3-left w3-circle w3-margin-right clients_img"
          
        />
        <p>
          <span className="w3-large w3-margin-right">Zain ul Abideen</span> FrontEnd
          Developer
        </p>
        <p>Asad Kahloon saved me from late delivery</p>
        </div>
        
<div className="client">
        <img
          src="https://www.w3schools.com/w3images/avatar_g2.jpg"
          alt="Avatar"
          className="w3-left w3-circle w3-margin-right clients_img"
          
        />
        <p>
          <span className="w3-large w3-margin-right">Bisma Akbar.</span> Student.
        </p>
        <p>He is a good developer as well as designer.</p>
      </div>
      </div>
      </div>

      <div className="w3-padding-64 w3-content" id="projects">
        <h2 className="w3-text-light-grey">My Projects</h2>
        <hr className="w3-opacity hr" />

        <div className="w3-row-padding Gallery" >
          <div className="w3-half">
            <img src={p1} alt='project image1'/>
            <img src={p2} alt='project image2' />
            <img src={p3} alt='project image3' />
          </div>

          <div className="w3-half">
            <img src={p4} alt='project image4'  />
            <img src={p5} alt='project image5' />
            <img src={p6} alt='project image6' />
            <img src={p7} alt='project image7'  />
          </div>
       
        </div>
      
      </div>


      <div className="w3-padding-64 w3-content" id="certifications">
        <h2 className="w3-text-light-grey">My Certifications</h2>
        <hr className="w3-opacity hr" />

        <div className="w3-row-padding Gallery">
          <div className="w3-half">
            <img src={c1} alt='certificate1' />
            <img src={c2} alt='certificate2'  />
            <img src={c3} alt='certificate3' />
            <img src={c4} alt='certificate4' />
          </div>

          <div className="w3-half">
            <img src={c5} alt='certificate5' />
            <img src={c6} alt='certificate6'  />
            <img src={c7} alt='certificate7'  />
            <img src={c8} alt='certificate8' />
          </div>
        </div>
      </div>

      <Contact />
      <Footer />



    </div>
  )
}
