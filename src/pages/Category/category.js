import React, { useState } from 'react';
import "./category.scss";
import slider1 from "../../image/slider1.webp";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slickCategory } from '../../components/slickSettings';
import townhous from "../../image/Category/townhous.webp";
import villaCategory from "../../image/Category/villa.webp";
import commercial from "../../image/Category/comercial.webp";
import { offers } from '../../components/Helpers/offersList';
import Offer from '../../components/Offers/offers';
import Form from '../../components/Form/form';
import { useTranslation } from 'react-i18next';

const Category = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const itemsPerPage = 12;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageBlocks = offers.slice(startIndex, endIndex);

    const { t } = useTranslation();

    
    const handlePrevPage = () => {
        setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
    };

    const handleNextPage = () => {
        setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, Math.ceil(offers.length / itemsPerPage)));
    };


    return ( 
        <>
        <header className="category_header">
            <div className="category_picture">
                <div className="category_image">
                    <img className="category_img" src={slider1} alt="slide" />
                    <div className="category_title">
                        <h1>{t('category.Apartments')} <span> <br />{t('category.in Dubai')}</span></h1>
                    </div>
                </div> 
            </div>
        </header>
        <main className="category_main">
            <section className="category_all">
                <div className="all_title">
                    <h2>{t('category.All Apartments')} <br />{t('category.Category')}</h2>
                </div>
                <div className="all_slides">
                <Slider {...slickCategory}>
                        <div className="all_slides_img">
                            <img src={townhous} alt="Townhous" />
                            <p className="all_slides_name">{t('category.Townhous')}</p>
                            <div className="all_slides_arrows">
                                <h5>{t('category.Learn more')}</h5>
                                <div className="all_slides_arrows_arrows"></div>
                            </div>
                        </div>
                        <div className="all_slides_img">
                            <img src={villaCategory} alt="Villa" />
                            <p className="all_slides_name">{t('category.Villa')}</p>
                            <div className="all_slides_arrows">
                                <h5>{t('category.Learn more')}</h5>
                                <div className="all_slides_arrows_arrows"></div>
                            </div>
                        </div>
                        <div className="all_slides_img">
                            <img src={commercial} alt="Commercial" />
                            <p className="all_slides_name">{t('category.Commercial')}</p>
                            <div className="all_slides_arrows">
                                <h5>{t('category.Learn more')}</h5>
                                <div className="all_slides_arrows_arrows"></div>
                            </div>
                        </div>
                        <div className="all_slides_background">
                            <div className="all_slides_background_container">
                            <h3>{t('category.Apartments')}</h3>
                            <p> {t('category.Lorem ipsum')} </p>
                                <div className="all_slides_background_arrows">
                                <h5>{t('category.Learn more')}</h5>
                                <div className="all_slides_background_arrows_arrows"></div>
                            </div>
                        </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="category_offer">
                <div className="offer_title">
                    <h3>{t('category.Best Offers')}</h3>
                </div>
                <div className="offer_picture">
                <div className='offer_picture_line'>
                    {currentPageBlocks.map((offer, index) => (
                        <Offer key={index} text={offer.text} title={offer.title} description={offer.description} image={offer.image} />
                    ))}
                </div>
                 <div className="pagination">
                    <button className="pagination_arrow_left" onClick={handlePrevPage} disabled={pageNumber === 1}>
                    </button>
                    {Array.from({ length: Math.ceil(offers.length / itemsPerPage) }, (_, index) => (
                        <button
                            key={index}
                            className={`pagination_button ${pageNumber === index + 1 ? 'active' : ''}`}
                            onClick={() => setPageNumber(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                    <button className="pagination_arrow" onClick={handleNextPage} disabled={pageNumber === Math.ceil(offers.length / itemsPerPage)}>
                    </button>
                </div>
                </div>
            </section>
            <section className='category_apartments'>
                <div className='category_apartments_title'>
                    <h2>{t('category.Apartments')}</h2>
                </div>
                <div className='category_apartments_text'>
                    <p> {t('category.To and from')} </p>
                </div>
                <div className='category_apartments_along'>
                    <h4>{t('category.Everything along the way')}</h4>
                </div>
                <div className='category_apartments_along_text'>
                    <p> {t('category.One touch')} </p>
                </div>
            </section>
                 <Form />
        </main>
        </>
     );
}
 
export default Category;