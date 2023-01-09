import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {

    const [navbar,setNavbar] = useState<boolean>(false);

    const showNavbar = () => {
        window.scrollY >= 150 ? setNavbar(true) : setNavbar(false);
      }
      window.addEventListener('scroll', showNavbar)

  return (
    <nav className={navbar ? 'nav__wrapper navbar-active' : 'nav__wrapper'}>
        <div className="navbar__container width-container">
            <ul className="navbar-list">
                <li>
                    <NavLink to='/'>Graphics & Design</NavLink>
                    <div className="navbar-menu">
                        <div className="navbar__wrap">
                            <div className="navbar__content">
                                <h6>Logo & Brand Identity</h6>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Style Guides</li>
                                    <li>Fonts & Typography</li>
                                    <li>Business Cards & Stationery</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Web & App Design</h6>
                                <ul>
                                    <li>Website Design</li>
                                    <li>App Design</li>
                                    <li>UX Design</li>
                                    <li>Landing Page Design</li>
                                    <li>Icon Design</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Visual Design</h6>
                                <ul>
                                    <li>Image Editing</li>
                                    <li>Presentation Design</li>
                                    <li>Infographic Design</li>
                                    <li>Vector Tracing</li>
                                    <li>Resume Design</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Print Design</h6>
                                <ul>
                                    <li>Flyer Design</li>
                                    <li>Brochure Design</li>
                                    <li>Poster Design</li>
                                    <li>Catalog Design</li>
                                    <li>Menu Design</li>
                                    <li>Invitation Design</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Web & App Design</h6>
                                <ul>
                                    <li>Website Design</li>
                                    <li>App Design</li>
                                    <li>UX Design</li>
                                    <li>Graphics for Streamers</li>
                                    <li>Icon Design</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Web & App Design</h6>
                                <ul>
                                    <li>Website Design</li>
                                    <li>App Design</li>
                                    <li>UX Design</li>
                                    <li>Landing Page Design</li>
                                    <li>Icon Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink to='/'>Digital Marketing</NavLink>
                    <div className="navbar-menu">
                        <div className="navbar__wrap">
                            <div className="navbar__content">
                                <h6>Logo & Brand Identity</h6>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Style Guides</li>
                                    <li>Fonts & Typography</li>
                                    <li>Business Cards & Stationery</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Web & App Design</h6>
                                <ul>
                                    <li>Website Design</li>
                                    <li>App Design</li>
                                    <li>UX Design</li>
                                    <li>Landing Page Design</li>
                                    <li>Icon Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink to='/'>Writing & Translation</NavLink>
                    <div className="navbar-menu">
                        <div className="navbar__wrap">
                            <div className="navbar__content">
                                <h6>Logo & Brand Identity</h6>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Style Guides</li>
                                    <li>Fonts & Typography</li>
                                    <li>Business Cards & Stationery</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Web & App Design</h6>
                                <ul>
                                    <li>Website Design</li>
                                    <li>App Design</li>
                                    <li>UX Design</li>
                                    <li>Landing Page Design</li>
                                    <li>Icon Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink to='/'>Video & Animation</NavLink>
                    <div className="navbar-menu">
                        <div className="navbar__wrap">
                            <div className="navbar__content">
                                <h6>Logo & Brand Identity</h6>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Style Guides</li>
                                    <li>Fonts & Typography</li>
                                    <li>Business Cards & Stationery</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Web & App Design</h6>
                                <ul>
                                    <li>Website Design</li>
                                    <li>App Design</li>
                                    <li>UX Design</li>
                                    <li>Landing Page Design</li>
                                    <li>Icon Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink to='/'>Music & Audio</NavLink>
                    <div className="navbar-menu">
                        <div className="navbar__wrap">
                            <div className="navbar__content">
                                <h6>Logo & Brand Identity</h6>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Style Guides</li>
                                    <li>Fonts & Typography</li>
                                    <li>Business Cards & Stationery</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Web & App Design</h6>
                                <ul>
                                    <li>Website Design</li>
                                    <li>App Design</li>
                                    <li>UX Design</li>
                                    <li>Landing Page Design</li>
                                    <li>Icon Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink to='/'>Programming & Tech</NavLink>
                    <div className="navbar-menu">
                        <div className="navbar__wrap">
                            <div className="navbar__content">
                                <h6>Logo & Brand Identity</h6>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Style Guides</li>
                                    <li>Fonts & Typography</li>
                                    <li>Business Cards & Stationery</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Web & App Design</h6>
                                <ul>
                                    <li>Website Design</li>
                                    <li>App Design</li>
                                    <li>UX Design</li>
                                    <li>Landing Page Design</li>
                                    <li>Icon Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink to='/'>Business</NavLink>
                    <div className="navbar-menu">
                        <div className="navbar__wrap">
                            <div className="navbar__content">
                                <h6>Logo & Brand Identity</h6>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Style Guides</li>
                                    <li>Fonts & Typography</li>
                                    <li>Business Cards & Stationery</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Web & App Design</h6>
                                <ul>
                                    <li>Website Design</li>
                                    <li>App Design</li>
                                    <li>UX Design</li>
                                    <li>Landing Page Design</li>
                                    <li>Icon Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink to='/'>Lifestyle</NavLink>
                    <div className="navbar-menu">
                        <div className="navbar__wrap">
                            <div className="navbar__content">
                                <h6>Logo & Brand Identity</h6>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Style Guides</li>
                                    <li>Fonts & Typography</li>
                                    <li>Business Cards & Stationery</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Web & App Design</h6>
                                <ul>
                                    <li>Website Design</li>
                                    <li>App Design</li>
                                    <li>UX Design</li>
                                    <li>Landing Page Design</li>
                                    <li>Icon Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink to='/'>Trending</NavLink>
                    <div className="navbar-menu">
                        <div className="navbar__wrap">
                            <div className="navbar__content">
                                <h6>Logo & Brand Identity</h6>
                                <ul>
                                    <li>Logo Design</li>
                                    <li>Brand Style Guides</li>
                                    <li>Fonts & Typography</li>
                                    <li>Business Cards & Stationery</li>
                                </ul>
                            </div>
                            <div className="navbar__content">
                                <h6>Web & App Design</h6>
                                <ul>
                                    <li>Website Design</li>
                                    <li>App Design</li>
                                    <li>UX Design</li>
                                    <li>Landing Page Design</li>
                                    <li>Icon Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar