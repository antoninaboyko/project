import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../image/Logo.webp";
import messangerFooter from "../../image/social icons footer.svg";
import PopUP from '../PopUp/popUp';
import { useTranslation } from 'react-i18next';
import './footer.scss';

const Footer = () => {

    const { t } = useTranslation();

    const [buyActive, setBuyActive]  = useState(true);
    const [servicesActive, setServicesActive] = useState(true);
    const [informationActive, setInformationActive] = useState(true);
    const [aboutsActive, setAboutActive] = useState(true);

    const [windowActive, setWindowActive]  = useState(true);

    return ( 
        <footer className="page_footer">
        <div className="footer_logo">
            <NavLink to="/" className="footer_logo_link">
            <img className="footer_logo_img" alt="logo" src={logo} />
                <p>DubaiRealty</p>
                <span>Real Estate</span>
            </NavLink>
        </div>
        <div className="footer_colum">
            <div className="footer_colum_buy">
                <div className='footer_colum_title_arrow'>
                    <button className="footer_colum_title_link" type="button" onClick={() => setBuyActive(!buyActive)}><NavLink to="/category">{t('footer.Buy')}</NavLink></button>
                    <div className={buyActive ? 'footer_colum_buy_arrow' : 'footer_colum_buy_arrow active'} onClick={() => setBuyActive(!buyActive)}></div>
                </div>
                <div className={buyActive ? 'footer_colum_link_block' : 'footer_colum_link_blok active'}>
                    <div className="footer_colum_link"><NavLink to="/category">{t('footer.Apartment in Dubai')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink to="/category">{t('footer.House in Dubai')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink to="/category">{t('footer.Apartment in Dubai')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink to="/category">{t('footer.Loft in Dubai')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink to="/category">{t('footer.Penthouse in Dubai')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink to="/category">{t('footer.Villa in Dubai')}</NavLink></div>
                </div>
            </div>
            <div className="footer_colum_services">
            <div className='footer_colum_title_arrow'>
                    <button className="footer_colum_title_link" type="button" onClick={() => setServicesActive(!servicesActive)}><NavLink to="/services">{t('footer.Services')}</NavLink></button>
                    <div className={servicesActive ? 'footer_colum_buy_arrow' : 'footer_colum_buy_arrow active'} onClick={() => setServicesActive(!servicesActive)}></div>
                </div>
                <div className={servicesActive ? 'footer_colum_link_block' : 'footer_colum_link_block active'}>
                    <div className="footer_colum_link"><NavLink to="/services">{t('footer.Property management in Dubai, UAE')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink to="/services">{t('footer.Sell ​​property in Dubai, UAE')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink to="/services">{t('footer.Rent property in Dubai, UAE')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink to="/services">{t('footer.Investments in Dubai, UAE')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink to="/services">{t('footer.Real estate for cryptocurrency in Dubai')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink to="/services">{t('footer.Moving to Dubai, UAE')}</NavLink></div>
                </div>
            </div>
            <div className="footer_colum_information">
            <div className='footer_colum_title_arrow'>
                    <button className="footer_colum_title_link" type="button" onClick={() => setInformationActive(!informationActive)}><NavLink to="/">{t('footer.Information')}</NavLink></button>
                    <div className={informationActive ? 'footer_colum_buy_arrow' : 'footer_colum_buy_arrow active'} onClick={() => setInformationActive(!informationActive)}></div>
                </div>
                <div className={informationActive ? 'footer_colum_link_block' : 'footer_colum_link_block active'}>
                    <div className="footer_colum_link"><NavLink href="/">{t('footer.Video')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink href="/">{t('footer.Podcasts')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink href="/">{t('footer.Laws')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink href="/">{t('footer.Questions and answers')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink href="/">{t('footer.Books')}</NavLink></div>
                    <div className="footer_colum_link"><NavLink href="/">{t('footer.Articles')}</NavLink></div>
                </div>
            </div>
            <div className="footer_colum_about">
            <div className='footer_colum_title_arrow'>
                    <button className="footer_colum_title_link" type="button" onClick={() => setAboutActive(!aboutsActive)}><NavLink to="/">{t('footer.About company')}</NavLink></button>
                    <div className={aboutsActive ? 'footer_colum_buy_arrow' : 'footer_colum_buy_arrow active'} onClick={() => setAboutActive(!aboutsActive)}></div>
                </div>
                <div className={aboutsActive ? 'footer_colum_link_block' : 'footer_colum_link_block active'}>
                    <div className="footer_colum_link"><a href="/">{t('footer.Jobs')}</a></div>
                    <div className="footer_colum_link"><a href="/">{t('footer.Story')}</a></div>
                    <div className="footer_colum_link"><a href="/">{t('footer.Licenses')}</a></div>
                    <div className="footer_colum_link"> <a href="/">{t('footer.Why are we')}</a></div>
                    <div className="footer_colum_link"><a href="/">{t('footer.Real estate agency')}</a></div>
                </div>
            </div>
            <div className="footer_colum_contact">
                <button className="footer_colum_title_link" type='button'> <a href="/">{t('footer.Contact')}</a></button>
                <div className="footer_colum_link_contact" >
                    <div className="footer_colum_link">
                        <a href="/">
                        964 Worthington Drive<br />
                        Dubai, UAE</a>
                        </div>
                    <div className="footer_colum_link"><a href="/">dubairealty@mail.com</a></div>
                    <button className="footer_button" onClick={() => setWindowActive(!windowActive)}>{t('footer.Book a consultation')}</button>
                    < PopUP windowActive={windowActive} setWindowActive={setWindowActive}/>
                </div>
            </div>
        </div>
        <div className="footer_copyright">
            <div className="footer_copyright_text">
                <p>Copyright © 2023 Dubai Realty</p>
            </div>
            <div className="footer_copyright_messenger">
                <a href="/"><img src={messangerFooter} alt='messangers' /></a>
            </div>
        </div>
        </footer> 
     );
}
 
export default Footer;
