import React, { useState, useEffect } from 'react';
import logo from "../../image/Logo.webp";
import './nav.scss';
import { NavLink } from "react-router-dom";
import PopUP from '../PopUp/popUp';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const Navigation = () => {
   
    
    const [menuActive, setMenuActive]  = useState(true);
    const [windowActive, setWindowActive]  = useState(true);
    const [enLanguage, setEnLanguage] = useState(true);
    const [uaLanguage, setUaLanguage] = useState(false);
   
   
    useEffect(() => {
        const lockBody = () => {
            document.body.style.overflow = menuActive ? 'auto' : 'hidden';
        };
        lockBody();
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuActive]);



    const { t } = useTranslation();


    return (
    <nav className="navbar">
        <div  className={menuActive ? 'navbar_burger ' : 'navbar_burger active'} onClick={() => setMenuActive(!menuActive)}>
            <span></span>
        </div>
        <NavLink to="/" className="navbar_logo">
            <img className="navbar_logo_img" alt="logo" src={logo}/>
            <p>DubaiRealty</p>
            <span>Real Estate</span>
        </NavLink>
        
        <div className={menuActive ? 'navbar_content ' : 'navbar_content active'} onClick={() => setMenuActive(true)}>
            <ul className="navbar_nav">
                <li className="navbar_buy">
                    <NavLink className="navbar_link" to="/category">{t('navbar.BUY')}</NavLink>
                    <span className="navbar_arrow"></span>
                    <ul className="navbar_sub-menu">
                        <li className="navbar_sub-menu_buy">
                        <NavLink className="navbar_sub-menu_link" to="/category">{t('navbar.Category number one')}</NavLink>
                        </li>
                        <li className="navbar_sub-menu_buy">
                        <NavLink className="navbar_sub-menu_link" to="/category">{t('navbar.Apartments in Dubai')}</NavLink>
                        </li>
                        <li className="navbar_sub-menu_buy">
                        <NavLink className="navbar_sub-menu_link" to="/">{t('navbar.Category number twenty five')}</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="navbar_blog">
                    <NavLink className="navbar_link" to="/blog">{t('navbar.BLOG')}</NavLink>
                    <ul className="navbar_sub-menu_blog">
                        <li className="navbar_sub-menu_buy">
                        <NavLink className="navbar_sub-menu_link" to="/blog">{t('navbar.Blog apartments')}</NavLink>
                        </li>
                        <li className="navbar_sub-menu_buy">
                        <NavLink className="navbar_sub-menu_link" to="/blog">{t('navbar.BLog in Dubai')}</NavLink>
                        </li>
                        <li className="navbar_sub-menu_buy">
                        <NavLink className="navbar_sub-menu_link" to="/blog">{t('navbar.Category number twenty five')}</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="navbar_about">
                    <NavLink className="navbar_link" to="/services">{t('navbar.ABOUT')}</NavLink>
                    <ul className="navbar_sub-menu_about">
                        <li className="navbar_sub-menu_buy">
                        <NavLink className="navbar_sub-menu_link" to="/services">{t('navbar.Services')}</NavLink>
                        </li>
                        <li className="navbar_sub-menu_buy">
                        <NavLink className="navbar_sub-menu_link" to="/services">{t('navbar.Real estate in Dubai')}</NavLink>
                        </li>
                        
                    </ul>
                </li>
                <li className="navbar_contact">
                    <NavLink className="navbar_link" to="/contact">{t('navbar.CONTACT')}</NavLink>
                </li>
            </ul>
        </div>
        <button className= {menuActive ? 'navbar_button ' : 'navbar_button active'} onClick={() => setWindowActive(!windowActive)}><p>{t('navbar.Book a consultation')}</p></button>
        < PopUP windowActive={windowActive} setWindowActive={setWindowActive}/>
        <div className= {menuActive ? 'navbar_language ' : 'navbar_language active'}>
            <button onClick={() => {i18next.changeLanguage('en');  setEnLanguage(true); setUaLanguage(false)}} className={enLanguage ? 'en active' : 'en'} >EN</button>
            <button onClick={() => {i18next.changeLanguage('ua');  setUaLanguage(true); setEnLanguage(false)}} className={uaLanguage ? 'ua active' : 'ua'} >UA</button>
        </div>
        <NavLink className= {menuActive ? 'navbar_phone ' : 'navbar_phone active'} to="/contact">+3(099) 111-11-11</NavLink>
        
       
    </nav>  
     
);
}
 
export default Navigation;