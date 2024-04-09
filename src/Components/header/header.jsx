import React, { useState, useEffect } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Inicio from "../../pages/Inicio/Inicio";
import Servicios from "../../pages/Servicios/Servicios";
import SobreNosotros from "../../pages/SobreNosotros/SobreNosotros";
import Precios from "../../pages/Precios/Precios";
import Contactanos from "../../pages/Contactanos/contactanos";
import Logo from "../../assets/logo/logito.png";
import BtnMenu from "../../assets/svg/menu.svg";
import "./header.css";
import Whatsapp from "../../assets/svg/whatsapp-verde.svg";

export default function Header() {
    const [menu, setMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar al principio de la página cuando cambie la ubicación
    }, [location.pathname]);

    // Función para activar el menú y forzar la recarga de la página al hacer clic en un enlace
    function handleClick(event) {
        if (event.currentTarget.href === window.location.href) {
            event.preventDefault();
            window.location.reload();
        } else {
            setMenu(false); // Cierra el menú al hacer clic en un enlace
        }
    }

    return (
        <section>
            <header>
                <Link className="logo-web" onClick={handleClick} to="/">
                    <img src={Logo} alt="Logo" />
                    <h2>INTERSTARWEB</h2>
                </Link>
                <img className="btn-menu" onClick={() => setMenu(!menu)} src={BtnMenu} alt="" />
                <nav className={`${menu ? "menu" : "ocultar"}`}>
                    <NavLink onClick={handleClick} to="/" className={location.pathname === "/" ? "activo" : ""}>Inicio</NavLink>
                    <NavLink onClick={handleClick} to="/sobre-nosotros" className={location.pathname === "/sobre-nosotros" ? "activo" : ""}>¿Quiénes Somos?</NavLink>
                    {/* <NavLink onClick={handleClick} to="/servicios" className={location.pathname === "/servicios" ? "activo" : ""}>Servicios</NavLink> */}
                    <NavLink onClick={handleClick} to="/precios" className={location.pathname === "/precios" ? "activo" : ""}>Precios</NavLink>
                    <NavLink onClick={handleClick} to="/contactanos" className={location.pathname === "/contactanos" ? "activo" : ""}>Contáctanos</NavLink>
                </nav>
            </header>
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/3115776485?text=¡Hola! Estoy interesado en saber más sobre tus increíbles productos y servicios! ¿Podrías brindarme más información?">
            <div className="btn-contactos">
                <img className="btn-whatsapp" src={Whatsapp} alt="" />
            </div>
            </a>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/precios" element={<Precios />} />
                <Route path="/contactanos" element={<Contactanos />} />
            </Routes>
        </section>
    );
}
