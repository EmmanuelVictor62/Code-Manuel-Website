import {useState} from "react";
import { contactField } from "../../Utils/constants";
import './_contact.scss'
import emailjs from 'emailjs-com'

export interface ContactProps{
    name?:string
    toggle?:boolean
}

export const Contact = (props:ContactProps) => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Subject, setSubject] = useState('');
    const [Message, setMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState("");


    const sendEmail = (e:any) => {
        e.preventDefault()

        setName('');
        setEmail('')
        setSubject('')
        setMessage('')

        emailjs.sendForm(
            'service_ydox7am',
            'template_qzlo23p',
            e.currentTarget,
            '3Kp0OppuErcqCxX2C'
        ).then(res => {
            console.log(res)
            setStatusMessage("Thank you for contacting me, I would reply in no time");
        }).catch(err => {
            console.log(err)
            setStatusMessage(`${err.text} happened`);
        })
    }

    // const emailMessage =  

    return(
        <div 
        className="contact" 
        id="contact" 
        data-toggle={props.toggle}
        >
            <div className="contact-sidebar">
                <h3 className="contact-sidebar__heading">
                    Let's get in touch
                </h3>
                <p className="contact-sidebar__subheading">
                    We're open for any suggestion or just to have a chat
                </p>
                {contactField.map((element,index) => {
                    return(
                        <div className="contact-sidebar__info-container" key={index + 1}>
                            <div className="contact-sidebar__icon-wrapper">
                                <i className={`${element.className}`}></i>
                            </div>
                            <div className="contact-sidebar__info">
                                {element.name}: <span>{element.content}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <form className="contact__form-container" onSubmit={sendEmail}>
                <h2>Get in touch</h2>
                <div className="contact__form">
                    <div className="contact__form-name-container">
                        
                        <input 
                            type="text" 
                            className="contact__form-input" 
                            name="name" 
                            id="name" 
                            placeholder="Name"
                            onChange={event => setName(event.target.value)} 
                            value={Name}
                            required
                        />
                    
                        <input 
                            type="text" 
                            className="contact__form-input " 
                            name="user-email" 
                            id="user-email" 
                            placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                            value={Email} 
                            required 
                        />
                    </div>
                    
                    <input 
                        type="text" 
                        className="contact__form-input contact__form-input--subject" 
                        name="Subject" 
                        id="Subject" 
                        placeholder="Subject" 
                        onChange={event => setSubject(event.target.value)}
                        value={Subject}  
                    />
                    
                        
                    <textarea  
                        className="contact__form-input contact__form-input--textarea" 
                        name="Message" 
                        id="Message" 
                        placeholder="Message" 
                        cols={30}
                        rows={7}
                        onChange={event => setMessage(event.target.value)}
                        value={Message} 
                        required 
                    />
                    <p 
                    className={statusMessage}
                    >
                        {statusMessage}
                    </p>
                    <button type="submit" value='send' className="contact__form-button">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}