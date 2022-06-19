import { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import LinkToHome from '../../components/LinkToHome'

import { links, social } from './data'
import logo from './logo.svg'
import './nav.css'

const Nav = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)
    const navMain = useRef(null)

    // Set the height auto adjusted when we add more items
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = `0px`
        }
    }, [showLinks])

    return (
        <>
            <nav className='navbar-main' useRef={navMain}>
                <div className="nav-center">
                    {/* Logo */}
                    <div className="nav-header">
                        <div className="logo">
                            <img src={logo} alt='logo' />
                        </div>
                        <button className="btn-toggle" onClick={() => setShowLinks(!showLinks)}>
                            <FaBars />
                        </button>
                    </div>

                    {/* Links */}
                    <div className={`links-container`} ref={linksContainerRef} >
                        <ul className="links" ref={linksRef}>
                            {links.map(link => {
                                const { text, url, id } = link
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>


                    {/* Social Icons */}
                    <ul className="social-icons">
                        {social.map(item => {
                            const { id, url, icon } = item
                            return (
                                <li key={id}><a href={url}>{icon}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </nav >
            <LinkToHome />
        </>
    )
}

export default Nav
