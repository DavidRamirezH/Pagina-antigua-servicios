import "./inicio.css";
import Fondo from "../../assets/fondo/fondo.jpg"

import { Link } from "react-router-dom";

import chico from "../../assets/img-interactive/chico.png"
import chica from "../../assets/img-interactive/chica.png"
import chico_top from "../../assets/img-interactive/chico_top.png"
import banner_bg from "../../assets/img-interactive/banner_bg.png"
import plan from "../../assets/img-interactive/plan.png"
import profecionales from "../../assets/img-interactive/profesionales.png"
import publicidad from "../../assets/img-interactive/publicidad.png"
import estudios from "../../assets/img-interactive/estudios.png"
import junta from "../../assets/img-interactive/junta.png"
import { useState } from "react";

import flecha from "../../assets/svg/flecha.svg"

import send from "../../assets/svg/send.svg"
import up from "../../assets/svg/up.svg"
import heart from "../../assets/svg/heart.svg"

import engranaje from "../../assets/svg/engranaje.svg"

import portafolio from "../../assets/svg/portafolio.svg"
import audifonos from "../../assets/svg/audifonos.svg"
import tienda from "../../assets/svg/tienda.svg"
import Footer from "../../Components/footer/footer";



export default function Inicio(){
    
    const [abierto, setAbierto] = useState(null);

    const toggleDesplegable = (index) => {
        if (index === abierto) {
            // Si se hace clic en el mismo elemento, lo cerramos
            setAbierto(null);
        } else {
            // Si se hace clic en un nuevo elemento, lo abrimos
            setAbierto(index);
        }
    };

    const [mostrarReparacion, setMostrarReparacion] = useState(false);

    const [animacionEnCurso, setAnimacionEnCurso] = useState(false);

    const mostrarReparacionHandler = () => {
        // Si la animación ya está en curso, no ejecutar la función nuevamente
        if (animacionEnCurso) return;

        // Establecer el estado de animación en curso a true
        setAnimacionEnCurso(true);

        // Mostrar el mensaje de reparación
        setMostrarReparacion(true);

        // Establecer un temporizador para ocultar el mensaje después de 3500 milisegundos
        setTimeout(() => {
            setMostrarReparacion(false);
            // La animación ha terminado, establecer el estado de animación en curso a false
            setAnimacionEnCurso(false);
        }, 3500);
    };
    return( 
        <>
        <div className={`${mostrarReparacion ? "mostrar-reparacion" : "reparacion"}`}>
            <img src={engranaje} alt="" />
            <p>Nuestro equipo está ocupado creando contenido fresco para nuestro blog. ¡Gracias por tu comprensión y apoyo!</p>
        </div>
        <section className="cont-general aparecer" style={{ animationDelay: '0.1s' }}>
            <section  style={{backgroundImage: `url(${Fondo})`}} className="cont-inicio">
                <section className="contenedor-img-principal">
                    <img className="banner-bg" src={banner_bg} alt="banner" />
                    <img className="chica" src={chica} alt="chica" />
                    <img className="chico" src={chico} alt="chico" />
                    <img className="chico-top" src={chico_top} alt="top-chico" />
                </section>
                <section className="">
                    <h2 className="titulo">¡Brilla en la Red! <span>Destaca tu Negocio</span> con Nuestro Marketing y Desarrollo Web</h2>
                    <p className="texto-slogan">Eleva tu Marca en el Mundo Digital: Estrategias Innovadoras, Resultados Comprobados</p>
                    <Link to="/Precios" className="btn-empieza">Empieza ahora</Link>
                </section>
            </section>
            <section className="cont-tecnicas">
                <h2 className="titulo-tecnicas">Técnicas Eficaces para un Marketing de Calidad</h2>
               <section className="cont-tarjetas">
                <section className="tarjeta t-uno">
                        <h2>Creación de Sitios Web para Aumentar Ventas:</h2>
                        <p>Desarrollamos sitios web optimizados que convierten visitantes en clientes, destacando los beneficios de tus productos o servicios para impulsar tus ventas.</p>
                        <div>
                            <Link to="#" onClick={mostrarReparacionHandler} className="btn-empieza">Aprende mas</Link>
                            <img src={profecionales} alt="" />
                        </div>
                    </section>
                    <section className="tarjeta t-dos">
                        <h2>Publicidad y Manejo de Redes Sociales para Incrementar Ventas:</h2>
                        <p>Implementamos estrategias de publicidad en redes sociales dirigidas a tu audiencia objetivo, gestionando activamente tus perfiles para promover tus productos de manera efectiva.</p>
                        <div>
                            <Link to="#" onClick={mostrarReparacionHandler} className="btn-empieza">Aprende mas</Link>
                            <img src={publicidad} alt="" />
                        </div>
                    </section>
                    <section className="tarjeta t-tres">
                        <h2>Diferenciación de Otros Negocios:</h2>
                        <p>Destacamos tus puntos fuertes y lo que te hace único en un mercado competitivo, posicionándote como líder en tu industria a través de estrategias de marketing y diseño web.</p>
                        <div>
                            <Link to="#" onClick={mostrarReparacionHandler} className="btn-empieza">Aprende mas</Link>
                            <img src={estudios} alt="" />
                        </div>
                    </section>
                    <section className="tarjeta t-cuatro">
                        <h2>Publicidad Segmentada para Alcanzar tu Audiencia Ideal:</h2>
                        <p>Utilizamos técnicas de segmentación avanzadas en nuestras campañas publicitarias para llegar a tu audiencia ideal, maximizando el retorno de tu inversión publicitaria.</p>
                        <div>
                            <Link to="#" onClick={mostrarReparacionHandler} className="btn-empieza">Aprende mas</Link>
                            <img src={plan} alt="" />
                        </div>
                    </section>
               </section>
            </section>
            <section className="cont-elegirnos">
                <h2>¿Por qué elegirnos?</h2>
                <section>
                    <img className="junta" src={junta} alt="" />
                    <section className="cont-abs">
                        <section className="contenedor-desplegable">
                            <section className={`item ${abierto === 1 && "abierto"}`} onClick={() => toggleDesplegable(1)}>
                                <div>
                                    <h2>Experiencia en Marketing:</h2>
                                    <img src={flecha} alt="" className={`flecha ${abierto === 1 && "rotada"}`} />
                                </div>
                                {abierto === 1 && (
                                    <p>Contamos con un equipo experimentado en marketing que conoce las estrategias más efectivas para hacer crecer tu negocio y alcanzar tus objetivos comerciales.</p>
                                )}
                            </section>
                            <section className={`item ${abierto === 2 && "abierto"}`} onClick={() => toggleDesplegable(2)}>
                                <div>
                                    <h2>Enfoque Estratégico</h2>
                                    <img src={flecha} alt="" className={`flecha ${abierto === 2 && "rotada"}`} />
                                </div>
                                {abierto === 2 && (
                                    <p>Analizamos a fondo tus necesidades y objetivos para crear soluciones web personalizadas que impulsen el éxito de tu negocio en línea.</p>
                                )}
                            </section>
                            <section className={`item ${abierto === 3 && "abierto"}`} onClick={() => toggleDesplegable(3)}>
                                <div>
                                    <h2>Creatividad Innovadora</h2>
                                    <img src={flecha} alt="" className={`flecha ${abierto === 3 && "rotada"}`} />
                                </div>
                                {abierto === 3 && (
                                    <p>Transformamos tus ideas en soluciones web únicas y vanguardistas que destacan en un mercado digital en constante evolución.</p>
                                )}
                            </section>
                            <section className={`item ${abierto === 4 && "abierto"}`} onClick={() => toggleDesplegable(4)}>
                                <div>
                                    <h2>Compromiso con el Éxito del Cliente</h2>
                                    <img src={flecha} alt="" className={`flecha ${abierto === 4 && "rotada"}`} />
                                </div>
                                {abierto === 4 && (
                                    <p>Nos dedicamos a entender tus metas y necesidades para ofrecerte soluciones web que impulsen el crecimiento y el éxito de tu negocio en línea.</p>
                                )}
                            </section>
                        </section>
                    </section>
                </section>
                <section className="contenedor-anuncio">
                    <div>
                        <div className="item-anuncio">
                            <p>Maximiza tu Potencial</p>
                        </div>
                        <div className="item-anuncio">
                            <p>Conquista el Mercado</p>
                        </div>
                        <div className="item-anuncio">
                            <p>Brilla en el Mundo Digital</p>
                        </div>
                        <div className="item-anuncio">
                            <p>Desata tu Poder de Venta</p>
                        </div>
                    </div>
                </section>
                <h2 className="h2-espaciado">Impulsa tu Presencia en Internet: Tres Pasos para el Éxito Digital</h2>
                <section className="pasos">
                    <div>
                        <div className="pasos-img">
                            <img src={up} alt="" />
                        </div>
                        <h3>Descubre tu Solución Perfecta</h3>
                        <p>Explora nuestra gama de servicios de diseño web y marketing digital. Selecciona el paquete que mejor se adapte a tus necesidades y objetivos comerciales.</p>
                        <p className="pasos-p">Paso 1</p>
                    </div>
                    <div>
                        <div className="pasos-img">
                            <img src={send} alt="" />
                        </div>
                        <h3>Conéctate con Nosotros</h3>
                        <p>Ponte en contacto con nuestro equipo experto para discutir tus requisitos específicos y comenzar a trabajar en tu proyecto. Estamos aquí para responder a todas tus preguntas y ayudarte en cada paso del proceso.</p>
                        <p className="pasos-p">Paso 2</p>
                    </div>
                    <div>
                        <div className="pasos-img">
                            <img src={heart} alt="" />
                        </div>
                        <h3>Celebra tus Logros</h3>
                        <p>Una vez que implementemos nuestras estrategias y soluciones, podrás disfrutar de los resultados. Observa cómo tu presencia en internet se fortalece y cómo tu negocio comienza a crecer gracias a nuestra colaboración.</p>
                        <p className="pasos-p">Paso 3</p>
                    </div>
                </section>
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
           <section className="descuentos">
                <section className="texto-descuentos">
                    <h2>Obtén <span>15% De Descuento</span> En Tu Primer Mes</h2>
                    <Link to={"/precios"}>EMPIEZA AHORA</Link>
                </section>
                <section className="experiencias-banner">
                    <div>
                        <img src={portafolio} alt="" />
                        <p>+20</p>
                        <p>Proyectos realizados</p>
                    </div>
                    <div>
                        <img src={audifonos} alt="" />
                        <p>+15</p>
                        <p>servicios en linea</p>
                    </div>
                    <div>
                        <img src={tienda} alt="" />
                        <p>+3</p>
                        <p>años de experiencia</p>
                    </div>
                </section>
           </section>
           <Footer></Footer>
        </section>
        </>
    )
}