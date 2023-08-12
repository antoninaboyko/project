import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import './popUp.scss';

const PopUP = ({windowActive, setWindowActive}) => {

    const { t } = useTranslation();


    useEffect(() => {
        const lockBody = () => {
            document.body.style.overflow = windowActive ? 'auto' : 'hidden';
        };
        lockBody();
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [windowActive]);

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
        <div className={windowActive ? "window" : "window active"} onClick={() => setWindowActive(!windowActive)}>
            <div className='close'><div className={windowActive ? "window_close" : "window_close"}></div></div>
            <div className='window_content'onClick={e => e.stopPropagation()}>
                <h2>{t('pop.Leave your contacts')}</h2>
                <h5>{t('pop.we will contact you within three hours')}</h5>
                <form className='window_content_form' onSubmit={handleSubmit(submit)}>
                    <div className='window_content_form_name'><input placeholder={`${t('pop.Name')}`} {...register('name',{
                                    required: "Required",
                                    minLength: {
                                    value: 2,
                                    message: "Minimum 2 characters"},
                                    pattern:{
                                    value: /^\D*$/,
                                    message: "Invalid name"
                                    }})} 
                                className={errors.name ? "window_content_form_name_input invalid" : "window_content_form_name_input"}/>
                                {errors.name && <p className="window_content_form_name_input_p">{errors.name.message}</p>} </div>
                    <div className='window_content_form_phone'><input placeholder={`${t('pop.Phone')}`} type="tel" {...register('phone',{
                                    required: "Required",
                                    minLength: {
                                    value: 10,
                                    message: "Enter your phone number"},
                                    pattern:{
                                    value: /^[0-9()+-\s]*$/,
                                    message: "Invalid phone number"
                                    }})} 
                                className={errors.phone ? "window_content_form_phone_input invalid" : "window_content_form_phone_input"}/>
                                {errors.phone && <p className="window_content_form_phone_input_p">{errors.phone.message}</p>}</div>
                    <div className='window_content_form_button'><button className='window_content_form_button_input' type='submit'>{t('pop.Send')}</button></div>
                </form>
            </div>
        </div>
     );
}
 
export default PopUP;