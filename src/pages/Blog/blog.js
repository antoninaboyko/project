import React, { useState } from 'react';
import './blog.scss';
import search from "../../image/Blog/search.svg";
import Card from '../../components/Card/card';
import { cards } from '../../components/Helpers/cardList';
import { useTranslation } from 'react-i18next';


const Blog = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const itemsPerPage = 12;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageBlocks = cards.slice(startIndex, endIndex);

    const { t } = useTranslation();


    const handlePrevPage = () => {
        setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
    };

    const handleNextPage = () => {
        setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, Math.ceil(cards.length / itemsPerPage)));
    };

    return ( 
        <>
        <main className="blog_main">
            <section className="blog_header">
                <div className="blog_header_title">
                    <h2>{t('blog.Blog')}</h2>
                </div>
                <div className='blog_header_search'>
                    <input className='blog_header_search_text' id='search' type="text" placeholder={`${t('blog.Seach...')}`} />
                    <button className="blog_header_search_button" type="submit"><img src={search} alt='search' /></button>
                </div>
            </section>
            <section className='card' id='content'>
                <div className='card_line'>
                    {currentPageBlocks.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} image={card.image} />
                    ))}
                </div>
            
                 <div className="pagination">
                    <button className="pagination_arrow_left" onClick={handlePrevPage} disabled={pageNumber === 1}>
                    </button>
                    {Array.from({ length: Math.ceil(cards.length / itemsPerPage) }, (_, index) => (
                        <button
                            key={index}
                            className={`pagination_button ${pageNumber === index + 1 ? 'active' : ''}`}
                            onClick={() => setPageNumber(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                    <button className="pagination_arrow" onClick={handleNextPage} disabled={pageNumber === Math.ceil(cards.length / itemsPerPage)}>
                    </button>
                </div>
            </section>
        </main>
        </>
     );
}
 
export default Blog;