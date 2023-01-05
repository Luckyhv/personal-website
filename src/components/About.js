import React from 'react'
import './About.css'
import { Link } from 'react-scroll'

function About() {
    return (
        <div className='about'>
            <div className="hh"><h2>About Me</h2></div>
            <div className="acont">
                <div className="aimgcon">
                    <img src="https://wallpapers.com/images/featured/s52z1uggme5sj92d.jpg" alt="" className='imgabout' />
                </div>
                <div className="cardscont">
                    <div className="cardcc">
                        <div className="singlecard">
                            <i className="fa-solid fa-briefcase"></i>
                            <h5 className='ch'>Completed</h5>
                            <small>20 + Projects</small>
                        </div>
                        <div className="singlecard">
                            <i className="fa-solid fa-medal"></i>
                            <h5 className='ch'>Completed</h5>
                            <small>10 + Certifications</small>
                        </div>
                    </div>
                    <p className='aboutp'>Hi, I'm Harsha, nice to meet you.
                        I am a Web developer with experience in building websites and web applications. I specialize in JavaScript and have experience working with ReactJS and Python.
                    </p>
                    <div className="lk"><Link to="contact" smooth={true} duration={500} className='lka'>Contact <i className="fa-solid fa-paper-plane planeimg"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
