import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { jobMenuAPI } from "../../redux/jobMenuReducer/jobMenuReducer";
import { DispatchType, StateType } from "../../redux/configStore";
import { useDispatch, useSelector } from 'react-redux'
import { DsChiTietLoai, DsNhomChiTietLoai, JobMenuModel } from "../../Models/jobMenu/jobMenuModel";

type Props = {};

const Navbar = (props: Props) => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const location = useLocation();
  const dispatch:DispatchType = useDispatch();
  const { arrJobMenu } = useSelector((state: StateType) => state.jobMenuReducer)

  const showNavbar = () => {
    window.scrollY >= 150 ? setNavbar(true) : setNavbar(false);
  };

  useEffect(() => {
    const nav = document.querySelector(".nav__wrapper");

    if (location.pathname === "/") {
      window.addEventListener("scroll", showNavbar);
    } else if (location.pathname !== "/") {
      nav?.classList.add("nav-sticky");
    }
  }, [location.pathname]);

  useEffect(() => {
    getJobMenu();
  }, [])

  const getJobMenu = () => {
    const actionJobMenu = jobMenuAPI();
    dispatch(actionJobMenu);
  }

  return (
    <nav className={navbar ? "nav__wrapper navbar-active" : "nav__wrapper"}>
      <div className="navbar__container width-container">
        <ul className="navbar-list">
          {arrJobMenu.map((job:JobMenuModel, t:number) => {
            return <li key={t}>
            <NavLink to={`/type/${job.id}`} onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}}>{job.tenLoaiCongViec}</NavLink>
            <div className="navbar-menu">
              <div className="navbar__wrap">
                
                {job.dsNhomChiTietLoai.map((jb: DsNhomChiTietLoai, i: number) => {
                  return <div className="navbar__content" key={i}>
                    <h6>{jb.tenNhom}</h6>
                    <ul>
                      {jb.dsChiTietLoai.map((j:DsChiTietLoai, l:number) => {
                        return <li key={l}>
                          <NavLink to={`/category/${j.id}`} onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}}>
                            {j.tenChiTiet}
                          </NavLink>
                        </li>
                      })}
                    </ul>
                  </div>
                  })}
                </div> 
            </div>
          </li>
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
