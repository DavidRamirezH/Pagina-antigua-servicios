import "./Contactanos.css"
import junta from "../../assets/img-interactive/precios-bg.png"
import { Link } from "react-router-dom"

import send from "../../assets/svg/send-contacto.svg"
import call from "../../assets/svg/call.svg"
import whatsapp from "../../assets/svg/whatsapp-contacto.svg"

import Footer from "../../Components/footer/footer";


import emailjs from "@emailjs/browser"

import { useRef } from "react"

export default function Contactanos(){


    // correo
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_g6aqbjf', 'template_3huz4ee', form.current, {
          publicKey: 'ZuYxjqYl2TtEA4_oY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            window.location.reload();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    
    return(
        <section className="cont-nosotros aparecer" style={{ animationDelay: '0.1s' }}>
        <section className="cont-info-nosotros">
            <h2 className="titulo">Contáctanos</h2>
            <p className="pg-ruta">HOGAR &gt; <span>CONTÁCTANOS</span></p>
            <div className="contactar" >
                <div>
                    <img src={whatsapp} alt="" />
                    <h2>Habla con nosotros</h2>
                    <p>Tenemos expertos sociales en vivo esperando para ayudarte de lunes a viernes de 9 a.m. a 5 p.m. EST.</p>
                    <a className="" href="http://wa.me/3115776485?text=¡Hey! ¡Quiero llevar mi presencia digital al siguiente nivel con un sitio web impactante! " target="_blank" rel="noopener noreferrer">
                          EMPIEZA AHORA
                    </a>
                </div>
                <div>
                    <img src={send} alt="" />
                    <h2>Envíanos un correo electrónico</h2>
                    <p>Simplemente envíenos un correo electrónico a interstarweb.services@gmail.com y recibirá una respuesta dentro de las 24 horas.</p>
                    <a href="mailto:interstarweb.services@gmail.com">Habla con nosotros</a>
                </div>
                <div>
                    <img src={call} alt="" />
                    <h2>Haz una llamada</h2>
                    <p>Llámenos. Nuestros expertos están disponibles de lunes a viernes de 9 a.m. a 5 p.m. EST.</p>
                    <a href="tel:+57 3115776485">Habla con nosotros</a>
                </div>
            </div>
        </section>
        <form ref={form} onSubmit={sendEmail}>
        <section className="cont-form">
            <h2>¿Preguntas o comentarios? Ponerse en contacto</h2>
        
            <div>
                <input type="text" name="user_name" required placeholder="Tu Nombre Completo" id="" />
                <input type="email"  name="user_email" required placeholder="Su Direccion De Correo Electronico" id="" />
            </div>
            <textarea  name="message" id=""  required cols="30" rows="10" placeholder="Escribe Tu Mensaje..."></textarea>
            <button type="submit" className="btn-empieza" value="Send" >Enviar Mensaje</button>
        </section>
        </form>
        <Footer></Footer>
    </section>
    )
}