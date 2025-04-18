import React from "react";
import { ContactUs } from "./ContactUs.jsx";
import Andressierra from "../img/Andressierra.png";
import perfil from "../img/perfil.png";
import Calculdora from "../img/Calculadora.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Principal() {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="w-full flex justify-center items-center flex-col">
                <nav className="w-full h-20 text-white flex justify-center items-center border-b-2 border-gray-700">
                    <ul className="flex flex-row gap-4">
                        <li><a href="#tecnologia">Tecnologias</a></li>
                        <li><a href="#proyecto">Proyectos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>

                <div className="w-full flex justify-center items-center flex-col md:flex-row gap-10 px-6 py-12 text-white">
                    <img
                        className="w-40 h-40 rounded-full"
                        src={perfil}
                        alt="Perfil"
                    />
                    <div className="flex flex-col gap-4 max-w-xl text-center md:text-left">
                        <h3 className="text-3xl font-bold">Jhostyn Albira</h3>
                        <p className="text-lg leading-relaxed">
                        Soy estudiante de Ingeniería de Software con experiencia como auxiliar técnico en desarrollo de software. He ido adquiriendo conocimientos en desarrollo frontend y backend, lo que me ha permitido abordar proyectos de manera integral. Me motiva aprender continuamente y crear soluciones tecnológicas innovadoras y funcionales.                        </p>
                    </div>
                </div>


            </div>

            <div className="w-full flex justify-center items-center flex-col py-6">
                <h3 className="text-2xl font-bold text-white mt-4" id="tecnologia">Tecnologías</h3>
                <div className="flex flex-wrap justify-center gap-10 text-white mt-6 mb-4 px-4">
                    <FontAwesomeIcon icon={faReact} size="6x" />
                    <FontAwesomeIcon icon={faJs} size="6x" />
                    <FontAwesomeIcon icon={faDatabase} size="6x" />
                    <FontAwesomeIcon icon={faHtml5} size="6x" />
                    <FontAwesomeIcon icon={faCss3} size="6x" />
                </div>
            </div>

            <div className="w-full flex justify-center items-center flex-col py-6">
                <h3 className="text-2xl font-bold text-white mt-4 mb-4" id="proyecto">Proyectos</h3>
                <div className="flex flex-wrap justify-center items-center gap-6 px-4">
                    <a href="https://github.com/jhostynAc/Carniceria-andres-sierra">
                        <div className="w-80 h-[28rem] hover:shadow-lg hover:scale-105 transition duration-200 bg-gray-700 flex justify-center items-center flex-col rounded-lg gap-2 mb-4">
                            <img src={Andressierra} className="w-64 h-40" alt="Andres Sierra" />
                            <div className="w-64 flex flex-row justify-between items-center gap-4 bg-gray-700">
                                <h4 className="text-white text-2xl font-bold bg-gray-700">Andres Sierra</h4>
                                <div className="text-white gap-2 flex flex-row justify-center items-center bg-gray-700">
                                    <FontAwesomeIcon icon={faReact} className="bg-gray-700" size="1x" />
                                    <FontAwesomeIcon icon={faCss3}  className="bg-gray-700" size="1x" />
                                    <FontAwesomeIcon icon={faJs} className="bg-gray-700" size="1x" />
                                    <FontAwesomeIcon icon={faDatabase} className="bg-gray-700" size="1x" />
                                </div>
                            </div>
                            <p className="max-w-64 text-white text-sm px-4 bg-gray-700">Este proyecto utiliza React, CSS, JavaScript y bases de datos para gestionar la venta de carnes y el manejo de inventarios. Incluye funcionalidades como visualización de productos, actualización del inventario y registro de ventas.</p>
                        </div>
                    </a>
                    <a href="https://github.com/jhostynAc/calculadora">
                        <div className="w-80 h-[28rem] hover:shadow-lg hover:scale-105 transition duration-200 bg-gray-700 flex justify-center items-center flex-col rounded-lg gap-2 mb-4">
                            <img src={Calculdora} className="w-64 h-40" alt="Calculadora" />
                            <div className="w-64 flex flex-row justify-between items-center gap-4 bg-gray-700">
                                <h4 className="text-white text-2xl font-bold bg-gray-700">Calculadora</h4>
                                <div className="text-white gap-2 flex flex-row justify-center items-center bg-gray-700">
                                    <FontAwesomeIcon icon={faHtml5} className="bg-gray-700" size="1x" />
                                    <FontAwesomeIcon icon={faCss3} className="bg-gray-700" size="1x" />
                                    <FontAwesomeIcon icon={faJs} className="bg-gray-700" size="1x" />
                                </div>
                            </div>
                            <p className="max-w-64 text-white text-sm px-4 bg-gray-700">Calculadora desarrollada con HTML, CSS y JavaScript que permite realizar operaciones básicas como suma, resta, multiplicación y división. Su diseño es responsivo e intuitivo.</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="w-full flex justify-center items-center flex-col py-6">
                <h3 className="text-2xl font-bold text-white mb-4" id="contacto">Contacto</h3>
                <ContactUs />
            </div>

            <footer className="flex justify-center items-center h-12 w-full">
                <p className="text-sm text-white text-center">© 2025 Jhoss. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
