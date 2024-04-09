import { Link } from "react-router-dom"

import "./footer.css"

import Facebook from "../../assets/svg/facebook.svg"
import Instagram from "../../assets/svg/instagram.svg"
import Whatsapp from "../../assets/svg/whatsapp.svg"

import send from "../../assets/svg/sendBlanco.svg"


export default function Footer(){
    return(
        <footer>
            <div>
                +57 3115776485
                <p>interstarweb.services@gmail.com</p>
                <p>pamplona, norte de santander</p>
                <div className="icons-footer">
                    <Link to="">
                        <img src={Facebook} alt="" />
                    </Link>
                    <Link to="">
                        <img src={Whatsapp} alt="" />
                    </Link>
                    <Link to="">
                        <img src={Instagram} alt="" />
                    </Link>
                </div>
            </div>
            <div className="links-footer">
                <h2>ENLACES RÁPIDOS</h2>
                <p>SOBRE NOSOTROS</p>
                <p>ESTUDIOS DE CASO</p>
                <p>TÉRMINOS Y CONDICIONES</p>
                <p>POLÍTICA DE PRIVACIDAD</p>
                <p>CONTÁCTENOS</p>
            </div>
            <div className="links-footer">
                <h2>NUESTROS SERVICIOS</h2>
                <p>DISEÑO WEB</p>
                <p>ALOJAMIENTO WEB (HOSTING)</p>
                <p>MANTENIMIENTO DE SITIO WEB</p>
                <p>SEO (OPTIMIZACIÓN DE MOTORES DE BÚSQUEDA)</p>
                <p>MARKETING POR CORREO ELECTRÓNICO</p>
                <p>SEGURIDAD WEB</p>
            </div>
            <div>
                <div className="suscripcion-footer">
                    <div>
                        <img src={send} alt="" />
                        <input type="text" placeholder="Su dirección de correo electrónico" name="" id="" />
                    </div>
                    <button className="btn-empieza">Suscríbase ahora</button>
                    <p><span>*</span> No te preocupes, no hacemos spam</p>
                </div>
            </div>
        </footer>
    )
}