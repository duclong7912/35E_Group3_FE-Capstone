import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { DispatchType, StateType } from '../../redux/configStore'
import { ToastContainer, toast } from 'react-toastify';
import { ACCESS_TOKEN, ROLE, USER_LOGIN, eraseCookie, getStore, removeLocalStorage } from '../../util/config';
import { history } from '../..';
import { getArrUserAPI } from '../../redux/adminReducer/adminReducer';
type Props = {}

const AdminTemplate = (props: Props) => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const { userLogin } = useSelector((state:StateType) => state.userReducer)
  const dispatch:DispatchType = useDispatch()
  useEffect(() => {
    const option = document.querySelector(".profile-action");
    const role = getStore(ROLE);
    if(role?.toLowerCase().trim() !== 'admin'){
      toast.error("Not enough permissions to access.", { autoClose: 3000 });
      navigate("/")
    }

    window.addEventListener("click", (e:any) => {
      if(!e?.target.matches(".avatar")){
        option?.classList.remove("active")
      }
    })
  }, [])

  const handleAvatarClick = () => {
    const option = document.querySelector(".profile-action");
    option?.classList.toggle("active");
  }

  const handleOpenSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar?.classList.toggle("active");
  }

  const handleLogout = () => {
    eraseCookie(ACCESS_TOKEN)
    eraseCookie(ROLE)
    removeLocalStorage(USER_LOGIN);
    removeLocalStorage(ROLE);
    removeLocalStorage(ACCESS_TOKEN)
    navigate("/")
    window.location.reload();
  }


  return (
    <div className="admin">
      <ToastContainer />
      <div className="sidebar">
        <div className="logo__content">
          <div className="sidebar__logo">
            <NavLink to="/">
              <svg
                width="89"
                height="27"
                viewBox="0 0 89 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#404145">
                  <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#1dbf73">
                  <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                </g>
              </svg>
            </NavLink>
          </div>
          <i
            className="bx bx-menu"
            id="btnToggle"
            onClick={handleOpenSidebar}
          ></i>
        </div>
        <ul className="sidebar__list">
          <li
            className={
              location.pathname === "/admin"
                ? "sidebar-name active"
                : "sidebar-name"
            }
          >
            <NavLink to="/admin">
              <i className="bx bx-home-alt"></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === "/admin/users"
                ? "sidebar-name active"
                : "sidebar-name"
            }
          >
            <NavLink to="/admin/users">
              <i className="bx bxs-user-detail"></i>
              <span>User manager</span>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === "/admin/job"
                ? "sidebar-name active"
                : "sidebar-name"
            }
          >
            <NavLink to="/admin/job">
              <i className="bx bxs-briefcase-alt-2"></i>
              <span>Job manager</span>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === "/admin/jobtype"
                ? "sidebar-name active"
                : "sidebar-name"
            }
          >
            <NavLink to="/admin/jobtype">
              <i className="bx bx-layer"></i>
              <span>Job type manager</span>
            </NavLink>
          </li>
          <li
            className={
              location.pathname === "/admin/service"
                ? "sidebar-name active"
                : "sidebar-name"
            }
          >
            <NavLink to="/admin/service">
              <i className="bx bx-chart"></i>
              <span>Manage Service</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="home__content">
        <header>
          <div className="dashboard">
            <i
              className="bx bxs-grid"
              id="openSidebar"
              onClick={handleOpenSidebar}
            ></i>
            <span>Dashboard</span>
          </div>
          <div className="admin__profile">
            {userLogin?.avatar ? (
              <img src={userLogin.avatar} alt="avatar" className="avatar" onClick={handleAvatarClick}/>
            ) : (
              <label className="avatar" onClick={handleAvatarClick}>
                <span className="avatar">{userLogin?.name.slice(0, 1)}</span>
              </label>
            )}
            <ul className="profile-action">
              <li
                onClick={() => {
                  const option = document.querySelector(".profile-action");
                  option?.classList.remove("active");
                }}
              >
                <i className="fa-solid fa-user"></i>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
              <li onClick={handleLogout}>
                <i className="bx bx-log-out-circle"></i>
                <span>Log out</span>
              </li>
            </ul>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminTemplate