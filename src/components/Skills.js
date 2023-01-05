import React from 'react'
import './Skills.css'
import VerifiedIcon from '@mui/icons-material/Verified';

function Skills() {
    return (
        <div className='skillscomp'>
            <h5 className='h5'>What Skills I Have</h5>
            <h2 className='h2'>My Experience</h2>
            <div className="skillcon">
                <div className="front">
                    <h3>Frontend Development</h3>
                    <div className="skills">
                        <div className="skill">
                            <VerifiedIcon className='verimg'/>
                            <div className="sklearn">
                                <h4 className='h4'>HTML</h4>
                                <small className="light-text">Experienced</small>
                            </div>
                        </div>
                        <div className="skill">
                            <VerifiedIcon className='verimg'/>
                            <div className="sklearn">
                                <h4 className='h4'>CSS</h4>
                                <small className="light-text">Experienced</small>
                            </div>
                        </div>
                        <div className="skill">
                            <VerifiedIcon className='verimg'/>
                            <div className="sklearn">
                                <h4 className='h4'>JavaScript</h4>
                                <small className="light-text">Intermediate</small>
                            </div>
                        </div>
                        <div className="skill">
                            <VerifiedIcon className='verimg'/>
                            <div className="sklearn">
                                <h4 className='h4'>ReactJS</h4>
                                <small className="light-text">Intermediate</small>
                            </div>
                        </div>
                        <div className="skill">
                            <VerifiedIcon className='verimg'/>
                            <div className="sklearn">
                                <h4 className='h4'>Bootstrap</h4>
                                <small className="light-text">Intermediate</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back">
                    <h3>Backend Development</h3>
                    <div className="skills">
                        <div className="skill">
                            <VerifiedIcon className='verimg'/>
                            <div className="sklearn">
                                <h4 className='h4'>NodeJS</h4>
                                <small className="light-text">Intermediate</small>
                            </div>
                        </div>
                        <div className="skill">
                            <VerifiedIcon className='verimg'/>
                            <div className="sklearn">
                                <h4 className='h4'>ExpressJS</h4>
                                <small className="light-text">Intermediate</small>
                            </div>
                        </div>
                        <div className="skill">
                            <VerifiedIcon className='verimg'/>
                            <div className="sklearn">
                                <h4 className='h4'>MongoDB</h4>
                                <small className="light-text">Intermediate</small>
                            </div>
                        </div>
                        <div className="skill">
                            <VerifiedIcon className='verimg'/>
                            <div className="sklearn">
                                <h4 className='h4'>MySQL</h4>
                                <small className="light-text">Intermediate</small>
                            </div>
                        </div>
                        <div className="skill">
                            <VerifiedIcon className='verimg'/>
                            <div className="sklearn">
                                <h4 className='h4'>Firebase</h4>
                                <small className="light-text">Intermediate</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
