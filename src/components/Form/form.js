import React from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import './form.scss';

const Form = () => {
    const { t } = useTranslation();
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
        <section className="form">
            <div className="form_contact">
                <h5>{t('form.Do you have any questions?')}</h5>
                <h2>{t('form.Contact us')}</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="form_contact_email">
                        <input  placeholder={`${t('form.Enter your mail')}`}  {...register('email',{
                                    required: "Required",
                                    pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address"
                                    }
                                })}
                            className={errors.email ? "form_email invalid" : "form_email"}/>
                            {errors.email && <p>{errors.email.message}</p> }
                        <button type='submit' className="form_button">{t('form.Send')}</button>
                    </div>
                </form>
            </div>
        </section>
     );
}
 
export default Form;