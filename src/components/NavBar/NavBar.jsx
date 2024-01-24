import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { logout } from '../../store/mutation/userSlice';

const NavBar = () => {
    const { user, userToken, loading, checkAuthLoading ,isAuthenticated} = useSelector(
        (state) => state.user
      );
      const dispatch=useDispatch()
    return (
        <nav className="site-main-menu">
            <ul>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Home</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">About Us</span></NavLink>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Services</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/EducationService"}><span className="menu-text">Eduction Guidence</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/CareerService"}><span className="menu-text">Career Guidence</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/MicroService"}><span className="menu-text">Micro Business Guidence</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/SpiritualService"}><span className="menu-text">Spiritual Guidence</span></NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}><span className="menu-text">Contact Us</span></NavLink>
                </li>
                {user?

<li>
                    <NavLink onClick={()=>dispatch(logout())}><span className="menu-text">Logout </span></NavLink>
                </li>:null
                }
            </ul>
        </nav>
    )
}

export default NavBar
