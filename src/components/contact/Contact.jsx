import React from "react";
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
 
  const notify = () => {
    toast.success("Your message has been sent successfully.", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored"
      });
    };
  const notifyerror = () => {
    toast.error("A problem has been occurred while sending your message.", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored"
      });
    };
    const form = useRef();
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_du3a1gl', 'template_tnizgf6', form.current, 'G3aA81qHvx41t5W7c')
        .then((result) => {
            console.log(result.text);
            notify();
        }, (error) => {
            console.log(error.text);
            notifyerror()
            
        });
        e.target.reset()
    }
        

    return ( 
        <section id='contact' className="contact-container">
           <h5>Get in Touch</h5>
           <h2>Contact</h2>
           <div  className="img__box">
             
            <div className="box__comp">
              <Box  sx={{width:{xs:'95vh',md:'100vh'}, maxWidth:{xs:'95%',md:'100%'},height:{xs:'75vh',md:'95vh'},maxHeight:{xs:'75%',md:'95%'},minHeight:{xs:'75vh',md:'95%'}}}>
                <img style={{width:'15%',marginLeft:'15px'}} src="./edu_img/email.png" alt="" />
                <div className="input__box">
                <form   ref={form} onSubmit={sendEmail} >
                <div className="inputs">

                <div className="input__bar">
                  <input required className="same"  type="text"  placeholder="Name*" name='name'/><br />
                </div>

                <div className="input__bar">
                  <input  required  className="same" type="email"  placeholder="E-mail*" name='email'/><br />
                </div>

                <div className="input__bar">
                  <input required className="same" type="text"  placeholder="Subject*" name='subject'/><br />
                </div>

                <div className="input__bar">
                  <textarea required className="ur-msg" type="text"  placeholder="Your Message*" name='message'/><br />
                </div>

                <div className="input__bar">
                  <input  type='submit' className="send-bt" value='SEND MESSAGE'></input>
                </div>

                </div>
                </form>
                <ToastContainer />
                </div>
                
              </Box>
            </div>
            </div>
         </section>

);
}
 
export default Contact;