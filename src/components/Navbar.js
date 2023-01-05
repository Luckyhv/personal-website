import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <div className='navbar '>
                <div className="nav">
                    <div className="logo">@Harsha</div>
                    <div className="links">
                        <ul>
                            <li>
                                <Link to="home" activeClass='active' smooth={true} duration={500}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="about" smooth={true} duration={500}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="skills" smooth={true} duration={500} offset={-350}>
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="works" smooth={true} offset={-50} duration={500}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="contact" smooth={true} duration={500}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="floatnav">
                <Link to="home" smooth={true} duration={500}><i className="fa-solid fa-house"></i></Link>
                <Link to="about" smooth={true} duration={500}><i className="fa-solid fa-user"></i></Link>
                <Link to="skills" smooth={true} duration={500} offset={-210}><i className="fa-solid fa-book"></i></Link>
                <Link to="works" smooth={true} duration={500} offset={-30}><i className="fa-solid fa-briefcase"></i></Link>
                <Link to="contact" smooth={true} duration={500}><i className="fa-solid fa-address-card"></i></Link>
            </div>
        </>
    )
}

export default Navbar
