import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
import SideBar from './SideBar'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);
  const linksContainersRef = useRef(null);
  const linkRef = useRef(null)

  useEffect(()=>{
    
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    if(showLinks){
      linksContainersRef.current.style.height = `${linksHeight}px`
    }else{
      linksContainersRef.current.style.height = `0px`
    }
    // console.log(linksHeight);

  },[showLinks])
  return <nav  >

    <div className='nav-center'>
      <div className='nav-header'>

        <img className="logo"
          src={logo}
          alt="main_logo"
        />

        <button
          className='nav-toggle'
          onClick={() => setShowLinks(!showLinks)}
        >
          <FaBars />
        </button>

      </div>


          <div className="links-container" ref={linksContainersRef}>
            <ul className='links' ref={linkRef}>
              {
                links.map((item) => {
                  return <li key={item.id}><a href={item.url}> {item.text}</a></li>
                })
              }

            </ul>
          </div>

      <ul className='social-icons '>
        {social.map((item) => {
          return <li key={item.id}><a href={item.url}>{item.icon}</a></li>

        })
        }

      </ul>

    </div>

  </nav >
}

export default Navbar
