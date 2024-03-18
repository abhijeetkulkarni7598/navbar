import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { logout } from '../../store/mutation/userSlice';
import './Navbar.css';

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
                    <NavLink ><span className="menu-text">Services</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <div className="sub-menu">
                     <div className="services-card">
                            <div className="services-content">
                                <div className="links-section">
                                    <h3 style={{color:'white'}}>Links</h3>
                                      <div className="links-container">
                                            <div className="column">
                                                <ul>
                                                    <li><NavLink to={process.env.PUBLIC_URL + "/EducationService"}>Education </NavLink></li>
                                                    <li><NavLink to={process.env.PUBLIC_URL + "/CareerService"}>Career </NavLink></li>
                                                </ul>
                                            </div>
                                            <div className="column">
                                                <ul>
                                                    <li><NavLink to={process.env.PUBLIC_URL + "/MicroService"}>Micro </NavLink></li>
                                                    <li><NavLink to={process.env.PUBLIC_URL + "/SpiritualService"}>Spiritual </NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                </div>
                                <div className="images-section">
                                    <h3 style={{color:'white'}}>Images</h3>
                                    <div className="image-container">
                                        <a href='#'> <img src={`${process.env.PUBLIC_URL}/images/about/about-3.jpg`} alt="Image 1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
