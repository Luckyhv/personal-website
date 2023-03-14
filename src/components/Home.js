import React from 'react'
import './Home.css'
import resume from "../HARSHAVARDHAN's Resume.pdf"

function Home() {
    return (
        <div className='home'>
            <div className="left">
                <a href="https://www.linkedin.com/in/harsha-vardhan-6a3429209?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BK6bepavxSC2%2BbUJi9t4oZg%3D%3D" target="_blank" rel='noreferrer'>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Luckyhv" target="_blank" rel='noreferrer'>
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="mailto:harshavardhan9680@gmail.com" target="_blank" rel='noreferrer'>
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>
            <div className="right">
            </div>
            <div className="center">
                <p className='p1'>Hi, my name is</p>
                <h1 className='h11'>Harshavardhan Reddy</h1>
                <h2 className='h21'>Web Developer</h2>
                <p className='p2'>I specialize in developing Web based Applications
                    using Html, CSS, Javascript and ReactJS.
                </p>
                <div className="butt">
                <a href={resume} className='bo' target={'_blank'} rel="noreferrer"> Resume <i className="fa-solid fa-download"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Home
