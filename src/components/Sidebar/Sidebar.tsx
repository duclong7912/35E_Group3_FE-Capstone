import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {

    const handleCategory = (className: string) => {
        const category = document.querySelector(className);
        category?.classList.toggle("show");
    }

    useEffect(() => {
        const body = document.querySelector("body")
        window.onclick = (e:any) => {
            if(e.target.matches(".sidebar__overlay")){
                body?.classList.remove("show-sidebar")
            }
        }
    }, [])

  return (
    <div className="sidebar">
        <div className="sidebar__main">
            <div className="sidebar__header">
                <NavLink to='/users/register'>
                    Join Fiverr
                </NavLink>
            </div>
            <div className="sidebar__menu">
                <NavLink to='/users/login'>Sign In</NavLink>
                <div className="sidebar__categories">
                    <div className="categories-title" onClick={() => handleCategory(".sidebar__categories")}>
                        <span>Browse Categories</span>
                        <span><i className="fa-solid fa-chevron-down"></i></span>
                    </div>
                    <ul className='sidebar-content'>
                        <li className='categories-list'>
                            <div className="list" onClick={() => handleCategory(".categories-list")}>
                                <span>Graphics & Design</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                            <ul>
                                <li className="categories-list-name">
                                    <NavLink to={''}>Logo Design</NavLink>
                                </li>
                                <li className="categories-list-name">
                                    <NavLink to={''}>Brand Style Guides</NavLink>
                                </li>
                                <li className="categories-list-name">
                                    <NavLink to={''}>Game Art</NavLink>
                                </li>
                                <li className="categories-list-name">
                                    <NavLink to={''}>Graphics for Streamers</NavLink>
                                </li>
                                <li className="categories-list-name">
                                    <NavLink to={''}>Business Cards & Stationery</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="sidebar__explore" onClick={() => handleCategory(".sidebar__explore")}>
                    <div className="explore-title">
                        <span>Explore</span>
                        <span><i className="fa-solid fa-chevron-down"></i></span>
                    </div>
                    <ul>
                        <li className="explore">Discover</li>
                        <li className="explore">Guides</li>
                        <li className="explore">Learn</li>
                        <li className="explore">Logo Maker</li>
                        <li className="explore">Community</li>
                        <li className="explore">Podcast</li>
                        <li className="explore">Blog</li>
                        <li className="explore">Fiverr Workspace</li>
                    </ul>
                </div>
                <NavLink to=''>Fiverr Business</NavLink>
            </div>
            <div className="sidebar__general">
                <div className="general">
                    General
                </div>
                <div className="general-home">
                    Home
                </div>
                <div className="general-language">
                    Language
                </div>
                <div className="general-money">
                    US$ USD
                </div>
                <p>Open In App</p>
            </div>
        </div>
        <div className="sidebar__overlay"></div>
    </div>
  )
}

export default Sidebar