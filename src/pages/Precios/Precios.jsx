import "./Precios.css"
import junta from "../../assets/img-interactive/precios-bg.png"
import { Link } from "react-router-dom"

import send from "../../assets/svg/send.svg"
import up from "../../assets/svg/up.svg"
import heart from "../../assets/svg/heart.svg"

import portafolio from "../../assets/svg/portafolio.svg"
import audifonos from "../../assets/svg/audifonos.svg"
import tienda from "../../assets/svg/tienda.svg"

import Footer from "../../Components/footer/footer";

export default function Precios(){
    return(
        <section className="cont-nosotros aparecer" style={{ animationDelay: '0.1s' }}>
        <section className="cont-info-nosotros">
            <h2 className="titulo">Precios</h2>
            <p className="pg-ruta">HOGAR &gt; <span>PRECIOS</span></p>
            <div className="cont-principal-nosotros">
                <img src={junta} alt="" />
                <div className="cont-info-principal">
                    <h2 className="titulo"> Descubre Nuestros Precios: Tu Socio Digital para el <span>Éxito Online </span></h2>
                    <p>Descubre una variedad de opciones adaptadas a tus necesidades en línea.</p>
                    <p>Desde diseño web excepcional hasta hosting confiable, en Interstarweb nos comprometemos a ser tu aliado digital en el viaje hacia el éxito en línea.</p>
                    <p>Sumérgete en nuestros planes y deja que tus ambiciones digitales tomen vuelo con nosotros.</p>
                    <a className="btn-empieza" href="http://wa.me/3115776485?text= Quiero destacarme de los demás!" target="_blank" rel="noopener noreferrer">
                        Contactar Ahora
                    </a>
                </div>
            </div>
        </section>
        <section className="precios">
                <h2>Nuestro Plan de precios</h2>
                <section className="planes">
                    <div className="tarjeta-plan">
                        <div className="oferta-etiqueta">
                            <h4>¡OFERTA!</h4>
                        </div>
                        <p className="tipo-plan">MENSUAL</p>
                        <div className="oferta">
                            <h2 className="precio">$9.99</h2>
                            <p>$29.99</p>
                        </div>
                        <p>Ideal para startups y pequeñas empresas. Proporciona una presencia rápida y económica en línea con alojamiento web básico y plantillas prediseñadas.</p>
                        <a className="btn-empieza" href="http://wa.me/3115776485?text=¡Hey! ¡Quiero llevar mi presencia digital al siguiente nivel con un sitio web impactante! " target="_blank" rel="noopener noreferrer">
                          EMPIEZA AHORA
                        </a>
                        <h3>Destaca con nuestra oferta exclusiva</h3>
                        <p>✓ Alojamiento web básico.</p>
                        <p>✓ Acceso a plantillas prediseñadas.</p>
                        <p>✓ Herramientas de diseño web simples.</p>
                        <p>✓ Integración con redes sociales básicas.</p>
                        <p>✓ Soporte técnico básico por correo electrónico.</p>
                        <p>✓ Actualizaciones de seguridad regulares.</p>
                    </div>
                    <div className="tarjeta-plan">
                        <p className="tipo-plan">MENSUAL</p>
                        <div className="oferta">
                            <h2 className="precio">$11.99</h2>
                        </div>
                        <p>Hosting seguro con mantenimiento completo. Soporte prioritario y actualizaciones automáticas para tu sitio web</p>
                        <a className="btn-empieza" href="http://wa.me/3115776485?text=¡Hey! ¡Es hora de llevar mi presencia en línea al siguiente nivel con un hosting de alto rendimiento y confiabilidad!" target="_blank" rel="noopener noreferrer">
                          EMPIEZA AHORA
                        </a>
                        <h3>Hosting - mantenimiento</h3>
                        <p>✓ Alojamiento web básico.</p>
                        <p>✓ Soporte técnico básico por correo electrónico.</p>
                        <p>✓ Actualizaciones de seguridad regulares.</p>
                        <p>✓ Soporte técnico prioritario por correo electrónico y teléfono.</p>
                        <p>✓ Copias de seguridad diarias.</p>
                        <p>✓ Actualizaciones automáticas de software.</p>
                        <p>✓ Monitoreo de seguridad continuo.</p>
                    </div>
                    <div className="tarjeta-plan">
                        <p className="tipo-plan">EXCEPCIONAL</p>
                        <div className="oferta">
                            <h2 className="precio">$89.91</h2>
                        </div>
                        <p>"¡Tú eliges! Diseño web exclusivo, tienda online completa, blog integrado o soporte prioritario. ¡Haz que tu presencia en línea sea única con nosotros!"</p>
                        <a className="btn-empieza" href="http://wa.me/3115776485?text= Quiero destacarme de los demás con un sitio web que refleje mi singularidad y estilo, ¡totalmente personalizado para mí!" target="_blank" rel="noopener noreferrer">
                          EMPIEZA AHORA
                        </a>
                        <h3>Web al gusto, creado para ti </h3>
                        <p>✓ Diseño web personalizado y exclusivo.</p>
                        <p>✓ Integración de plantillas modificadas y adaptadas a tu marca.</p>
                        <p>✓ Tienda en línea completa con funcionalidades de e-commerce avanzadas.</p>
                        <p>✓ Blog integrado para compartir contenido y mejorar el SEO.</p>
                        <p>✓ Formularios de contacto avanzados y suscripción a boletines.</p>
                        <p>✓ Integración con redes sociales y análisis de visitantes.</p>
                        <p>✓ Soporte técnico prioritario por correo electrónico y teléfono.</p>
                        <p>✓ Actualizaciones y mantenimiento regulares del sitio web.</p>
                    </div>
                </section>
           </section>
        <Footer></Footer>
    </section>
    )
}