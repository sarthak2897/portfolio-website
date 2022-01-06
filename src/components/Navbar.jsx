import './Navbar.css'
import { Link } from 'react-router-dom'
import profileImg from '../images/profileImg3.JPG'
import {BsFillPersonFill,BsGraphUp} from 'react-icons/bs'
import {AiFillProject,AiOutlineStar,AiOutlineMail} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {MdCastForEducation} from 'react-icons/md'
import {IconContext} from 'react-icons'
import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaGithubSquare,FaLinkedin} from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="navbar">
          {/* <img src={drawerImg} className="drawer_img" alt='drawer'/> */}
          <div className='drawer_content'>
              <img src={profileImg} className="profile_img" alt="profile"/>
              <h2 style={{fontWeight : '700',color : '#fff'}}>SARTHAK NAGPAL</h2>
              <h4 style={{color : '#fff'}}>SOFTWARE ENGINEER</h4>
              <nav>
                <ul className='list'>
                        <li><Link className="link" to='/'><BsFillPersonFill/><span>About</span></Link></li>
                        <li><Link className="link" to='/expr'><BsGraphUp/><span>Work Experience</span></Link></li>
                        <li><Link className="link" to='/skills'><GiSkills/><span>Skills</span></Link></li>
                        <li><Link className="link" to='/projects'><AiFillProject/><span>Personal Projects</span></Link></li>
                        <li><Link className="link" to='/education'><MdCastForEducation/><span>Education</span></Link></li>
                        <li><Link className="link" to='/recommendations'><AiOutlineStar/><span>Recommendations</span></Link></li>
                        <li><Link className="link" to='/contact'><AiOutlineMail/><span>Contact Me</span></Link></li>                
                </ul>
            </nav>
            <div className="social_media">
                <p>GET IN TOUCH</p>
                <div className='social_icons'>
                    <IconContext.Provider value={{className:'icons'}}>
                    <a href='mailto:nagpal97.sarthak@gmail.com'><AiOutlineMail/></a>
                    <a href='https://www.facebook.com/sarthak.nagpal.140'  target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
                    <a href='https://www.instagram.com/srtknagpal/'  target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
                    <a href='https://twitter.com/sarthak28nagpal'  target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></a>
                    <a href='https://github.com/sarthak2897'  target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
                    <a href='https://www.linkedin.com/in/sarthak-nagpal-161475b2/'  target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                    </IconContext.Provider>
                </div>
            </div>
          </div>
          
        </div>
       
    )
}

export default Navbar
