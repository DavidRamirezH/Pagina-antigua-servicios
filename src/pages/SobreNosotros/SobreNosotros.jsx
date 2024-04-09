import "./SobreNosotros.css"
import junta from "../../assets/img-interactive/junta.png"
import { Link } from "react-router-dom"

import send from "../../assets/svg/send.svg"
import up from "../../assets/svg/up.svg"
import heart from "../../assets/svg/heart.svg"

import portafolio from "../../assets/svg/portafolio.svg"
import audifonos from "../../assets/svg/audifonos.svg"
import tienda from "../../assets/svg/tienda.svg"

import Footer from "../../Components/footer/footer";



export default function SobreNosotros(){
    return(
        <section className="cont-nosotros aparecer" style={{ animationDelay: '0.1s' }}>
            <section className="cont-info-nosotros">
                <h2 className="titulo">¿Quienes Somos?</h2>
                <p className="pg-ruta">HOGAR &gt; <span>¿QUIENES SOMOS?</span></p>
                <div className="cont-principal-nosotros">
                    <img src={junta} alt="" />
                    <div className="cont-info-principal">
                        <h2 className="titulo">Descubre <span>interstarweb</span>: Tu Socio Digital para el Éxito Online</h2>
                        <p>En interstarweb, somos tu socio digital para el éxito en línea.</p>
                        <p>Con pasión y experiencia, creamos sitios web sorprendentes y ofrecemos servicios de hosting de alto rendimiento.</p>
                        <p>Nuestro objetivo es impulsar tu presencia en línea y llevar tu negocio al siguiente nivel. ¿Listo para destacarte en el mundo digital? ¡Únete a nosotros y haz que tus ideas brillen en la web!</p>
                        <Link to={"/precios"} className="btn-empieza">Empieza Ahora</Link>
                    </div>
                </div>
            </section>
            <section className="cont-pasos">
            <h2 className="">Impulsa tu Presencia en Internet: Tres Pasos para el Éxito Digital</h2>
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
            <section className="descuentos">
                <section className="texto-descuentos">
                    <h2>Obtén <span>15% De Descuento</span> En Tu Primer Mes</h2>
                    <Link to={"/precios"} className="btn-empieza">Empieza Ahora</Link>
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
    )
}