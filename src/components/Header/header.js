import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './header.scss';
import slider1 from "../../image/slider1.webp";
import slidesTitle from "../../image/Rectangle 14.webp";
import messanger from "../../image/social icons.png";
import { useTranslation } from 'react-i18next';



const Header = () => {
    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0); 

  const handleSlideClick = (slideIndex) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(slideIndex);
      setActiveSlide(slideIndex);
    }
  };
  const slickHeader = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    const { t } = useTranslation(); 
    return ( 
        <header className="page_header">
            <div className="slides">
                <div className="slides_image">
                    <Slider {...slickHeader}>
                    <img className="slides_img" src={slider1} alt="slide" />
                    <img className="slides_img" src={slider1} alt="slide" />
                    <img className="slides_img" src={slider1} alt="slide" />
                    </Slider>
                <div className="slides_title">
                        <img className="slides_img_title" src={slidesTitle} alt='slider_title' />
                        <p>{t('header.Lorem ipsum')}</p>
                        <h1>{t('header.Welcome Home')} <br/><span>{t('header.To')}</span> {t('header.Luxury')}</h1>
                        <h4 className='slides_title_h4'>{t('header.Book a consultation')}</h4>
                    </div>
                    <div className="slides_messenger">
                        <a className="messenger" href="/"><img src={messanger} alt='messangers'/></a>
                    </div>
                    <div className="slides_button">
                        <a className="slides_button_prev" href="/">{t('header.Prev')}</a>
                        <a className="slides_button_next" href="/" >{t('header.Next')}</a>
                    </div>
                    <div className="slides_container">
                        <button className={`number_one ${activeSlide === 0 ? 'active' : ''}`} onClick={() =>  handleSlideClick(0)}>
                            <h5 className="one">01</h5>
                            <p className="number_text_one">{t('header.Lorem Ipsum')}<br/>{t('header.Dolorem apset')}</p>
                        </button>
                        <div className={`number_two ${activeSlide === 1 ? 'active' : ''}`} onClick={() => handleSlideClick(1)}>
                            <h5 className="two">02</h5>
                            <p className="number_text_two">{t('header.Lorem Ipsum')}<br/>{t('header.Dolorem apset')}</p>
                        </div>
                        <div className={`number_three ${activeSlide === 2 ? 'active' : ''}`} onClick={() => handleSlideClick(2)}>
                            <h5 className="three">03</h5>
                            <p className="number_text_three">{t('header.Lorem Ipsum')}<br/>{t('header.Dolorem apset')}</p>
                        </div>
                    </div>
                </div> 
            </div>
        </header>
     );
}
 
export default Header;