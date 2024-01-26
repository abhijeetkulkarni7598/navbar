import React from 'react';
import {NavLink} from 'react-router-dom';
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from "../../../utils";

const MobileNavMenu = () => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-toggle") ||
            target.classList.contains("menu-toggle")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <nav className="site-mobile-menu">
            <ul>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Home</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">About Us</span></NavLink>
                </li>
                <li className="has-childern">
                    <NavLink><span className="menu-text">Services</span></NavLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon fa fa-angle-down"></i></span>
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
            </ul>
        </nav>
    )
}

export default MobileNavMenu;
