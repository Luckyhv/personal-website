import React from 'react'
import './Works.css'
import netflix from '../images/netflix.webp'
import spotify from '../images/spotify.png'
import corona from '../images/corona.png'
import portfolio from '../images/portfolio.png'
import ecommerce from '../images/ecommerce.png'

const data = [
    {
        id: 1,
        image: netflix,
        title: "Netflix Clone",
        github: "https://github.com/Luckyhv/netflix-clone",
        demo: "https://luckyhv.github.io/netflix-clone/"
    },
    {
        id: 2,
        image: spotify,
        title: "Spotify Clone",
        github: "https://github.com/Luckyhv/spotify-clone",
        demo: ""
    },
    {
        id: 3,
        image: corona,
        title: "Corona Tracker",
        github: "https://github.com/Luckyhv/corona-tracker",
        demo: "https://covid-tracker-19a0e.web.app/"
    },
    {
        id: 4,
        image: portfolio,
        title: "Portfolio-Website",
        github: "https://github.com/Luckyhv/portfolio-app",
        demo: "https://luckyhv.github.io/portfolio-app"
    },
    {
        id: 5,
        image: ecommerce,
        title: "Ecommerce-Website",
        github: "https://github.com/Luckyhv/ecommerce-app",
        demo: ""
    },
]
function Works() {
    return (
        <div className='works'>
            <h5 className='h5'>My Works</h5>
            <h2 className='h2'>Projects</h2>
            <div className="allp">
                {data.map((item) => {
                    return (
                        <div className="singlep" key={item.id}>
                            <div className="allimgs">
                                <img src={item.image} alt="" className="pimg" />
                            </div>
                            <h3 className='h3'>{item.title}</h3>
                            <div className="plinks">
                                <a href={item.github} className='gitlink' target="_blank" rel="noreferrer">Github</a>
                                <a href={item.demo} className="demolink" target="_blank" rel='noreferrer'>Demo</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Works
