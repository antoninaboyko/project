import { useTranslation } from 'react-i18next';
import './card.scss';


const Card = (props) => {

    const { t } = useTranslation();
    
    return ( 
    <div className='card_line_block'>
        <img src={props.image} alt='apartments' />
        <div className='card_line_block_text'>
            <h4>{props.title}</h4>
            <p> {props.description}
            </p>
            <div className="card_line_block_arrows">
                <h5>{t('card.Learn more')}</h5>
                <div className="card_line_block_arrows_arrows"></div>
            </div>
        </div>
    </div>
    );
}
 
export default Card;