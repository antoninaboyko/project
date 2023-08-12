import React, { useState } from 'react';import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {slickSettings, slickSettingsCenter } from '../../components/slickSettings';
import './home.scss';

import villas from "../../image/villas.webp";
import houses from "../../image/houses.webp";
import villa from "../../image/villas2.webp";
import video from "../../image/placeholder.webp";
import play from "../../image/play button.png";
import line from "../../image/Rectangle 3.png";
import apartment from "../../image/placeholder1.webp";
import basin from "../../image/placeholder2.webp";
import architecture from "../../image/architecture1.webp";
import architectures from "../../image/architecture2.webp";
import robert from "../../image/about10 2.webp";
import paul from "../../image/about10 1.webp";
import symbol from "../../image/”.png";

import Form from '../../components/Form/form';
import Header from '../../components/Header/header';
import { useTranslation } from 'react-i18next';

const Home = () => {

    const [largestActive, setLargestActive] = useState(true);
    const [hugeActive, setHugeActive]  = useState(true);
    const [fromActive, setFromActive]  = useState(true);
    const [readActive, setReadActive]  = useState(true);
    const [collectedActive, setCollectedActive]  = useState(true);

    const { t } = useTranslation();
    return ( 
        <>
        <Header />
        <main className="page_main">
            <section className="latest">
                <nav className="latest_menu">
                    <h3>{t('home.Latest projects')}</h3>
                    <ul className="latest_nav">
                        <li className="latest_all">
                            <a className="latest_link" href="/">{t('home.All')}</a>
                        </li>
                        <li className="latest_building">
                            <a className="latest_link" href="/">{t('home.Building')}</a>
                        </li>
                        <li className="latest_interior">
                            <a className="latest_link" href="/">{t('home.Interior')}</a>
                        </li>
                        <li className="latest_view">
                            <a className="latest_link_view" href="/">{t('home.View all projects')}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="latest_picture">
                <Slider {...slickSettings}>
                        <div className="latest_picture_three">
                            <img src={houses} alt="Houses" />
                            <p className="latest_name">{t('home.Houses')}</p>
                        </div>
                        <div className="latest_picture_one">
                            <img src={villas} alt="Villas" />
                            <p className="latest_name">{t('home.Villas')}</p>
                        </div>
                        <div className="latest_picture_four">
                            <img src={villa} alt="Villas" />
                            <p className="latest_name">{t('home.Villas')}</p>
                        </div>
                        <div className="latest_picture_one">
                            <img src={villas} alt="Villas" />
                            <p className="latest_name">{t('home.Villas')}</p>
                        </div>
                        <div className="latest_picture_two">
                            <div className="latest_picture2_container">
                            <h3>{t('home.Dubai')}</h3>
                            <p>
                                {t('home.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.')}</p>
                            <a href="/">{t('home.See project')}</a>
                            <div className='latest_picture2_arrows'></div>
                        </div>
                        </div>
                        </Slider>
                    </div>  
            </section>
            <section className="apartment">
                <div className="apartment_text">
                <p className="apartment_our">{t('home.Our expertise')}</p>
                <h2>{t('home."The best apartment')} <br />{t('home.in Dubai" we will find')} <br />{t('home.your dream')}</h2>
                <p>{t('home.Lorem ipsum dolor')}</p>
                </div>
                <div className="apartment_video">
                    <img className="apartment_video_img" src={video} alt='video'/>
                    <img className="apartment_video_play" src={play} alt='play' />
                </div>
                <div className="limit">
                    <div className="limit_dont">
                        <img src={line} alt='' />
                        <h4>{t('home.Don`t limit yourself. Many people limit themselves to what they')} 
                            <br />{t('home.think they can do. You can go as far as your mind lets you. What')} 
                            <br/>{t('home.you believe, remember, you can achieve.”')} <span>{t('home.— Mary Kay Ash')}</span>
                        </h4>
                    </div>
                    <div className="limit_colums">
                        <div className="limit_colums_one">
                            <img src={apartment} alt="apartment" />
                            <p className="colums_apaetment_text">
                                {t('home.Sed in sem')}
                            </p>
                        </div>
                        <div className="limit_colums_two">
                            <img src={basin} alt="basin" />
                            <p>
                                {t('home.Vivamus non')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Form />
            <section className="use">
                <div className="useful">
                    <div className="useful_title">
                        <h3>{t('home.Useful articles')}</h3>
                            <p>{t('home.View all articles')}</p>
                            <div className="useful_title_arrow"></div>
                    </div>
                    <div className="useful_picture">
                        <div className="useful_picture_1">
                            <img src={architecture} alt="basin" />
                            <p className="useful_picture_text">{t('home.Discover Architecture')}</p>
                        </div>
                        <div className="useful_picture_2">
                            <h4>{t('home.Jule 03, 2022')}</h4>
                            <h2>{t('home.Discover Architecture')}</h2>
                            <p>
                                {t('home.Projects for many large domestic')} <br /> 
                                {t('home.and foreign corporations,')} <br />
                                {t('home.enterprises in many elds such')}
                            </p>
                            <h5>{t('home.Learn more')}</h5>
                            <div className="useful_picture_2_arrows"></div>
                        </div>
                        <div className="useful_picture_3">
                            <img src={architectures} alt="arhitecture" />
                            <p className="useful_picture_text">{t('home.Discover Architecture')}</p>
                        </div>
                    </div>
                </div>
                <div className="comment">
                <Slider {...slickSettingsCenter} >
                    <div className="comment_container">
                        <div className="comment_img_user">
                            <img src={robert} alt="Robert" />
                        </div>
                        <div className="comment_img_symbol">
                            <img src={symbol} alt="" />
                        </div>
                        <div className="comment_container_text">
                            <h4>{t('home.Robert')}</h4>
                            <h5>{t('home.Founder in')} <span>{t('home.Apple inc.')}</span></h5>
                            <p>
                                {t('home.Founded in 2007')}
                            </p>
                        </div>
                    </div>
                
                    <div className="comment_container">
                        <div className="comment_img_user">
                            <img src={paul} alt="Paul" />
                        </div>
                        <div className="comment_img_symbol">
                            <img src={symbol} alt="" />
                        </div>
                        <div className="comment_container_text">
                            <h4>{t('home.Paul')}</h4>
                            <h5>{t('home.Owner in')} <span>Paul.com</span></h5>
                            <p>
                                {t('home.Projects for many')}
                            </p>
                        </div>
                    </div>
                    <div className="comment_container">
                        <div className="comment_img_user">
                            <img src={paul} alt="Paul" />
                        </div>
                        <div className="comment_img_symbol">
                            <img src={symbol} alt="" />
                        </div>
                        <div className="comment_container_text">
                            <h4>{t('home.Paul')}</h4>
                            <h5>{t('home.Owner in')} <span>Paul.com</span></h5>
                            <p>
                                {t('home.Projects for many')}
                            </p>
                        </div>
                    </div>
                    <div className="comment_container">
                        <div className="comment_img_user">
                            <img src={paul} alt="Paul" />
                        </div>
                        <div className="comment_img_symbol">
                            <img src={symbol} alt="" />
                        </div>
                        <div className="comment_container_text">
                            <h4>{t('home.Paul')}</h4>
                            <h5>{t('home.Owner in')} <span>Paul.com</span></h5>
                            <p>
                                {t('home.Projects for many')}
                            </p>
                        </div>
                    </div>
                    
                    </Slider>
                </div>

                <div className="faq">
                    <div className="faq_title">
                        <h5>FAQ</h5>
                    </div>
                    <div className="faq_question">
                        <div className="faq_arrow">
                            <p className="faq_question_question" onClick={() => setLargestActive(!largestActive)}>{t('home.The largest and oldest Quotations Page on the Web with about 30 categories')}</p>
                            <div className={largestActive ? 'faq_question_arrow' : 'faq_question_arrow active'} onClick={() => setLargestActive(!largestActive)} ></div>
                        </div>
                        <p className={largestActive ? 'faq_question_text' : 'faq_question_text active'} >{t('home.Sed in sem questions')}
                        </p>
                    </div>
                    <div className="faq_question">
                    <div className="faq_arrow">
                            <p className="faq_question_question" onClick={() => setHugeActive(!hugeActive)}>{t('home.A huge collection of inspirational quotes, thoughts of greatest minds in history')}</p>
                            <div className={hugeActive ? 'faq_question_arrow' : 'faq_question_arrow active'} onClick={() => setHugeActive(!hugeActive)}></div>
                        </div>
                        <p className={hugeActive ? 'faq_question_text' : 'faq_question_text active'}>{t('home.Sed in sem questions')}
                        </p>
                    </div>
                    <div className="faq_question">
                        <div className="faq_arrow">
                            <p className="faq_question_question" onClick={() => setFromActive(!fromActive)}>{t('home.Quotations from the great works of literature')}</p>
                            <div className={fromActive ? 'faq_question_arrow' : 'faq_question_arrow active'} onClick={() => setFromActive(!fromActive)}></div>
                        </div>
                        <p className={fromActive ? 'faq_question_text' : 'faq_question_text active'}>{t('home.Sed in sem questions')}
                        </p>
                    </div>
                    <div className="faq_question">
                        <div className="faq_arrow">
                            <p className="faq_question_question" onClick={() => setReadActive(!readActive)}>{t('home.Read quotes and sayings from famous people in history')}</p>
                            <div className={readActive ? 'faq_question_arrow' : 'faq_question_arrow active'} onClick={() => setReadActive(!readActive)}></div>
                        </div>
                        <p className={readActive ? 'faq_question_text' : 'faq_question_text active'}>{t('home.Sed in sem questions')}
                        </p>
                    </div>
                    <div className="faq_question">
                        <div className="faq_arrow">
                            <p className="faq_question_question" onClick={() => setCollectedActive(!collectedActive)}>{t('home.Collected quotes from Albert Einstein')}</p>
                            <div className={collectedActive ? 'faq_question_arrow' : 'faq_question_arrow active'} onClick={() => setCollectedActive(!collectedActive)}></div>
                        </div>
                        <p className={collectedActive ? 'faq_question_text' : 'faq_question_text active'}>{t('home.Sed in sem questions')}
                        </p>
                    </div>
                    
                </div>
            </section>    
        </main>
        </>
     );
}
 
export default Home;