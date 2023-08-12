import { useJsApiLoader } from "@react-google-maps/api";
import { useForm } from "react-hook-form";
import "./contact.scss";
import Map from './map';
import { useTranslation } from 'react-i18next';

const APIKey = process.env.REACT_APP_API_KEY;
const defaultCenter = {
    lat: 55.11862718142539,
    lng: 25
  };



const Contact = () => {

    const { t } = useTranslation();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: APIKey
      });

    const {
        register, 
        formState: {errors},
        handleSubmit,
        reset
    } = useForm({mode: "onTouched"});

    const submit = (value) => {
        console.log(value)
        reset();
    }
    
    
     

    return ( 
        <>
        <main className="contact">
            <section className="contact_map">
                <div className="contact_map_tite">
                    <h2>{t('contact.Contact')}</h2>
                </div>
                <div className="contact_map_map">
                    {isLoaded ? <Map center={defaultCenter}/> : <h2>Loading...</h2>} 
                    
                </div>
                <div className="contact_map_information">
                        <h3>{t('contact.Dubai,')} <span>{t('contact.UAE')}</span></h3>
                        <p>{t('contact.269 King Str')}</p>
                        <h4>+99 (0) 344 956 4050</h4>
                        <h5>{t('contact.Email')}: <span>info@sparch.co</span></h5>
                        <h5>{t('contact.Follow us:')}</h5>
                        <h5>{t('contact.Work Hours:')} <span>{t('contact.Monday')}</span></h5>
                    </div>
            </section>
            <section className="contact_form">
                <div className="contact_form_center">
                    <div className="contact_form_title">
                        <h4>{t('contact.Be in touch')}</h4>
                        <h4><span>{t('contact.with us')}</span></h4>
                    </div>
                    <form onSubmit={handleSubmit(submit)} className="contact_form_place">
                        <div className="contact_form_place_line">
                            <input  placeholder={`${t('contact.Name')}`} {...register('name',{
                                    required: "Required",
                                    minLength: {
                                    value: 2,
                                    message: "Minimum 2 characters"},
                                    pattern:{
                                    value: /^\D*$/,
                                    message: "Invalid name"
                                    }})} 
                                className={errors.name ? "contact_form_place_line_name invalid" : "contact_form_place_line_name"}/>
                                {errors.name && <p className="contact_form_place_line_name_p">{errors.name.message}</p>} 
                            <input  placeholder={`${t('contact.Email *')}`} {...register('email',{
                                    required: "Required",
                                    pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address"
                                    }
                                })}
                            className={errors.email ? "contact_form_place_line_email invalid" : "contact_form_place_line_email"}/>
                            {errors.email && <p className="contact_form_place_line_email_p">{errors.email.message}</p> }
                            <input className="contact_form_place_line_subject" placeholder={`${t('contact.Subject')}`}></input>
                        </div>
                        <input placeholder={`${t('contact.Message *')}`} {...register('message',{
                                    required: "Required",
                                    minLength: {
                                    value: 5,
                                    message: "Minimum 5 characters"}})} 
                            className={errors.message ? "contact_form_place_message invalid" : "contact_form_place_message"}/>
                            {errors.message && <p className="contact_form_place_message_p">{errors.message.message}</p>}
                        <div><button className="contact_form_place_button" type="submit">{t('contact.SUBMIT')}</button></div>
                    </form>
                </div>
            </section>
        </main>
        </>
     );
}
 
export default Contact;