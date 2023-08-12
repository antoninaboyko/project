import { useTranslation } from 'react-i18next';
import './offers.scss';


const Offer = (props) => {
    
    const { t } = useTranslation();

    return ( 
    <div className='offer_line_block'>
        <img src={props.image} alt='apartments' />
        <div className='offer_line_block_text'>
            <p className='offer_block_text'>{props.text}</p>
            <h4>{props.title}</h4>
            <p> {props.description}
            </p>
            <div className="offer_line_block_arrows">
                <h5>{t('card.Learn more')}</h5>
                <div className="offer_line_block_arrows_arrows"></div>
            </div>
        </div>
    </div>
    );
}
 
export default Offer;