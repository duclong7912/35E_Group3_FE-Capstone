import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { StateType } from '../../redux/configStore'

type Props = {}

const Sidebar = (props: Props) => {

    const { userLogin } = useSelector((state:StateType) => state.userReducer)
    const { arrJobMenu } = useSelector((state:StateType) => state.jobMenuReducer)


    const handleCategory = (className:string) => {
        const category = document.querySelector(className);
        category?.classList.toggle("show")
    }
    
    const handleToggleMenu = (i:number) => {
        const listCategory = document.querySelectorAll(".categories-list")
        listCategory[i].classList.toggle("show")
    }

    const handleCloseSidebar = () => {
        const body = document.querySelector("body")
        body?.classList.remove("show-sidebar")
    }

  return (
    <div className="sidebar">
        <div className="sidebar__main">
            <div className="sidebar__header">
                { userLogin ? 
                <div className="sidebar__info">
                    <img src={userLogin.avatar} alt='avatar'></img>
                    <h4>{userLogin.name}</h4>
                </div>
                :
                <NavLink to='/users/register'>
                    Join Fiverr
                </NavLink>
                }
            </div>
            <div className="sidebar__wrapper">
                <div className="sidebar__menu">
                    {!userLogin && <NavLink to='/users/login'>Sign In</NavLink>}
                    <div className="sidebar__categories">
                        <div className="sidebar__wrap">
                            <div className="categories-title" onClick={() => handleCategory(".sidebar__categories")}>
                                <span>Browse Categories</span>
                                <span><i className="fa-solid fa-chevron-down"></i></span>
                            </div>
                            <ul className='sidebar-content'>
                                {arrJobMenu?.map((jobs, i) => {
                                    return <li className='categories-list' key={i}>
                                    <div className="list-job" onClick={() => {handleToggleMenu(i)}}>
                                        <span>{jobs.tenLoaiCongViec}</span>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <ul>
                                        {jobs.dsNhomChiTietLoai.map((job, t) => {
                                            return <li className='categories-list-name' key={t}>
                                                {job.dsChiTietLoai.map((item, j) => {
                                                    return <NavLink to={`/category/${item.id}`} key={j}>{item.tenChiTiet}</NavLink>
                                                })}
                                            </li>
                                        })}
                                    </ul>
                                </li>
                                })}
                            </ul>
                        </div>
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
        </div>
        <div className="sidebar__overlay" onClick={handleCloseSidebar}></div>
    </div>
  )
}

export default Sidebar