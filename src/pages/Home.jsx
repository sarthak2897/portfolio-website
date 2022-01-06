import React from 'react'
import './Home.css'
import resume from '../resume.pdf'
import {AiOutlineDownload} from 'react-icons/ai'

const Home = () => {
    return (
       <div className='home'>
        <div className='home_content'>
            <h2>Hi, I'm Sarthak</h2>
            <p>I am an experienced software engineer with skills in a wide variety of web technologies, both <b>client-side and server-side</b>. </p>
            {/* <p>I have more than 3 years experience in IT industry in object-oriented analysis,development, testing and integration of multi-tier business applications.</p> */}
            <p>I am mission driven full stack developer who expresses my creativity through technology and enjoy creating innovative solutions to problems. </p>
            <p>I am able to adapt to new ideas, methodologies and technologies to expand my knowledge.I also have experience in working with real time distributed systems.</p>
            {/* <p>I also have experience in working with real time distributed systems.</p> */}
            <button className='resume-button'><a href={resume} download><AiOutlineDownload/>Download Resume</a></button>
        </div>
       </div>
    )
}

export default Home

//About page