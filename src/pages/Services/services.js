import Form from "../../components/Form/form";
import { useTranslation } from 'react-i18next';
import './services.scss';
import header from "../../image/Services/1920x1080.webp";
import dubai from "../../image/Services/1110x628.webp";
import symbol from "../../image/Services/”.png";
import city from "../../image/Services/city.webp";
import sea from "../../image/Services/sea.webp";
import seaTwo from "../../image/Services/sea_2.webp";
import martgage from "../../image/Services/martgage.webp";
import architecture from "../../image/Services/martgage_2.webp";


const Servises = () => {

    const { t } = useTranslation();

    return ( 
        <>
    <header className="page_header">
        <div className="header_picture">
            <div className="header_picture_img">
                <img src={header} alt="apartment" />
            </div>
            <div className="header_picture_title">
                <p>{t('services.Rent')}</p>
                <h3>{t('services.Furnished Apartments')} <br />
                <span>{t('services.in Dubai')}</span></h3>
            </div>
        </div>
            
    </header>
    <main className="page_main">
        <section className="servises">
            <nav className="services_menu">
            <ul className="services_nav">
                <li className="services_main">
                    <a className="services_link" href="/">{t('services.Main')}
                    <div className="services_arrows"></div></a>
                </li>
                    <li className="servises_servises">
                        <a className="services_link" href="/">{t('services.Servises')}
                        <div className="services_arrows"></div></a>
                    </li>
                    <li className="services_rent">
                        <a className="services_link" href="/">{t('services.Rent')}
                        <div className="services_arrows"></div></a>
                    </li>
                    <li className="servises_furnished">
                        <a className="services_link_furnished" href="/">{t('services.Furnished Apartment in Dubai')}
                        </a>
                        
                    </li>
                </ul>
            </nav>
            <div className="services_text">
                <div className="services_text_1">
                    <h2>{t('services.Real estate investment in Dubai, UAE')}</h2>
                    <p>{t('services.This response')}
                    </p>
                    <p>{t('services.One touch')}
                    </p>
                </div>
                <div className="services_text_2">
                    <p>{t('services.This response')}</p>
                        <p>{t('services.One touch')}</p>
                </div>
            </div>
            <div className="services_picture">
                <div className="services_picture_img">
                    <img src={dubai} alt="Dubai" />
                </div>
            </div>
        </section>
        <section className="methods">
            <div className="methods_text">
                <div className="methods_text_title">
                    <h4>{t('services.Methods for Everyone')}</h4>
                </div>
                <div className="methods_text_text">
                    <p>{t('services.Everything along')}</p>
                    <p> {t('services.One touch of')} </p>
                </div>
            </div>
            <div className="methods_block">
                <div className="methods_block_symbol">
                    <img src={symbol} alt="symbol" />
                </div>
                <div className="methods_block_text">
                    <h5>{t('services.Our greatest weakness lies in giving up. The most certain')} 
                    <br />{t('services.way to succeed is always to try just one more time.')} 
                    <br />{t('services.emotional sensation of stress from our firs')}
                    </h5>
                    <p>{t('services.Paul')}<br /><span>{t('services.Elite Author')}</span></p>
                </div>
            </div>
        </section>
        <section className="picture">
            <div className="picture_column">
                <div className="picture_column_one">
                    <div className="picture_column_one_img">
                        <img src={city} alt="city" />
                    </div>
                    <div className="picture_column_one_img">
                        <img src={sea} alt="sea" />
                    </div>
                </div>
                <div className="picture_column_two">
                    <div className="picture_column_two_img">
                        <img src={seaTwo} alt="sea" />
                    </div>
                </div>
            </div>
        </section>
        <section className="challenge">
            <div className="challenge_number">
                <div className="challenge_number_20">
                    <div className="challenge_20">20</div>
                    <div className="challenge_20_text">{t('services.YEARS')} <br />{t('services.WORKING')}</div>
                </div>
                <div className="challenge_number_7">
                    <div className="challenge_7">7</div>
                    <div className="challenge_7_text">{t('services.TALANTED')} <br />{t('services.MANAGERS')}</div>
                </div>
                <div className="challenge_number_100">
                    <div className="challenge_100">100<span>+</span></div>
                    <div className="challenge_100_text">{t('services.COMPLITLY')} <br />{t('services.PROJECTS')}</div>
                </div>
            </div>
            <div className="challenge_text">
                <div className="challenge_text_title">
                    <h4>{t('services.Challenge')}</h4>
                </div>
                <div className="challenge_text_text">
                    <p> {t('services.To and from')} </p>
                </div>
            </div>
            <div className="challenge_everything">
                <div className="challenge_everything_title">
                    <h5>{t('services.Everything along the way')}</h5>
                </div>
                <div className="challenge_everything_text">
                    <p> {t('services.One')} </p>
                </div>
            </div>
            <div className="challenge_list">
                <ul>
                    <li> {t('services.Everything')} </li>
                    <li> {t('services.Everything was')} </li>
                    <li> {t('services.One touch of a')} </li>
                        <li> {t('services.We quickly')} </li>
                </ul>
            </div>
        </section>
        <Form />
        <section className="included">
            <div className="included_table">
                <div className="included_table_one">
                    <div className="included_table_title inline-block">
                        <p className="included_table_title_1">{t('services.Included in the package')}</p>
                        <p className="included_table_title_2">{t('services.Complete management')}</p>
                        <p className="included_table_title_3">{t('services.Partial control')}</p>
                    </div>
                    <div className="included_table_gray">
                        <p>{t('services.Real estate advertising')}</p>
                        <div className="included_table_arrow_1">✓</div>
                        <div className="included_table_arrow_colum_1">✓</div>
                    </div>
                    <div className="included_table_black">
                        <p>{t('services.Search for tenants')}</p>
                        <div className="included_table_arrow_2">✓</div>
                        <div className="included_table_arrow_colum_2">✓</div>
                    </div>
                    <div className="included_table_gray">
                        <p>{t('services.Conclusion of a lease agreement')}</p>
                        <div className="included_table_arrow_3">✓</div>
                        <div className="included_table_arrow_colum_3">✓</div>
                    </div>
                    <div className="included_table_black">
                        <p>{t('services.Getting paid')}</p>
                        <div className="included_table_arrow_4">✓</div>
                        <div className="included_table_arrow_colum_4">✓</div>
                    </div>
                    <div className="included_table_gray">
                        <p> {t('services.Key handover')}</p>
                        <div className="included_table_arrow_5">✓</div>
                        <div className="included_table_arrow_colum_5">✓</div>
                    </div>
                    <div className="included_table_black">
                        <p>{t('services.Payment processing')}</p>
                        <div className="included_table_arrow_6">✓</div>
                        <div className="included_table_arrow_colum_6">✓</div>
                    </div>
                    <div className="included_table_gray">
                        <p>{t('services.Dealing with repair requests')}</p>
                        <div className="included_table_arrow_7">✓</div>
                        <div className="included_table_arrow_colum_7">✓</div>
                    </div>
                    <div className="included_table_black">
                        <p>{t('services.DEWA connection (electricity/water)')}</p>
                        <div className="included_table_arrow_8">✓</div>
                        <div className="included_table_arrow_colum_8">✓</div>
                    </div>
                    <div className="included_table_gray_e">
                        <p>{t('services.Registration of the rental agreement Ejari')}</p>
                        <div className="included_table_arrow_9">✓</div>
                        <div className="included_table_arrow_colum_9">✓</div>
                    </div>
                    <div className="included_table_black">
                        <p>{t('services.Separate administrator')}</p>
                        <div className="included_table_arrow_10">✓</div>
                        <div className="included_table_arrow_colum_10">✓</div>
                    </div>
                    <div className="included_table_gray">
                        <p>{t('services.Detailed inspection of the object')}</p>
                        <div className="included_table_arrow_colum_11">✓</div>
                    </div>
                    <div className="included_table_black">
                        <p>{t('services.Property preparation before arrival')}</p>
                        <div className="included_table_arrow_colum_12">✓</div>
                    </div>
                    <div className="included_table_gray">
                        <p>{t('services.Reporting')}</p>
                        <div className="included_table_arrow_colum_13">✓</div>
                    </div>
                    <div className="included_table_black">
                        <p>{t('services.Repair Request Management')}</p>
                        <div className="included_table_arrow_colum_14">✓</div>
                    </div>
                    <div className="included_table_gray">
                        <p>{t('services.Repair management')}</p>
                        <div className="included_table_arrow_colum_15">✓</div>
                    </div>
                </div>
                
            </div>
        </section>
        <section className="we">
            <div className="we_will">
                <div className="we_will_title">
                    <h3>{t('services.We will also propose')}</h3>
                        <a href="/">{t('services.View all articles')}</a>
                        <div className="we_will_title_arrow"></div>
                    
                </div>
                <div className="we_will_picture">
                    <div className="we_will_picture_1">
                        <img src={martgage} alt="martgage" />
                        <p className="we_will_picture_text">{t('services.Mortgage Registration')}</p>
                    </div>
                    <div className="we_will_picture_2">
                        <h4>{t('services.Mortgage Registration')}</h4>
                        <p>{t('services.A person applying for a mortgage in ')}
                            <br />{t('services.the United Arab Emirates must ')}
                            <br />{t('services.meet the following requirements')}
                        </p>
                        <div className="we_will_picture_arrows">
                        <h5>{t('services.Learn more')}</h5>
                        <div className="we_will_picture_2_arrows"></div>
                    </div>
                    </div>
                    <div className="we_will_picture_3">
                        <img src={architecture} alt="arhitecture" />
                        <p className="we_will_picture_text">{t('services.Mortgage Registration')}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
     );
}
 
export default Servises;