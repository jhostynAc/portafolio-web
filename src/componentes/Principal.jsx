import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";


export default function Principal() {
    return (
        <div className="flex justify-center items-center flex-col border-2">
            <div className="w-xl h-1/4 flex justify-center items-center flex-col border-2">
                <nav className="w- h-20 text-white flex justify-end items-center mr-20 ">
                    <ul className="flex flex-row gap-4">
                        <li><a href="">Experiencia</a></li>
                        <li><a href="">Trabajos</a></li>
                        <li><a href="">Sobre mí</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </nav>
                <div className="w-full flex justify-center items-center gap-12">
                    <div className="w-8/12 h-64 m-8 p-16 flex flex-row gap-48 items-center text-white">
                        <img
                            className="w-32 h-32 bg-white rounded-full"
                            src="https://static.vecteezy.com/system/resources/previews/020/911/740/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
                            alt=""
                        />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold">Jhoss</h3>
                            <p className="max-w-2xl mt-4">Estudiante de ingeniería de software en segundo semestre, auxiliar técnico en desarrollo de software</p>
                            <a href="" className="text-black hover:bg-blue-500 hover:text-white bg-white border-2 rounded-tl-lg rounded-br-lg w-24 h-10 flex justify-center items-center mt-2">proyectos</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-xl h-1/4 flex justify-center items-center flex-col border-2">
                <h3 className="text-2xl font-bold text-white mt-4 " >Tecnologías</h3>
                <div>
                    <div className="flex gap-10 text-white mt-6 mb-4 mr-4 ml-4">
                        <FontAwesomeIcon icon={faReact} size="7x" />
                        <FontAwesomeIcon icon={faJs} size="7x" />
                        <FontAwesomeIcon icon={faDatabase} size="7x" />
                        <FontAwesomeIcon icon={faHtml5} size="7x" />
                        <FontAwesomeIcon icon={faCss3} size="7x" />
                    </div>
                </div>
            </div>
            <div className="w-full h-[34rem] flex justify-center items-center flex-col border-2 padding-6">
                <h3 className="text-2xl font-bold text-white mt-4 mb-4">Proyectos</h3>
                <div className="w-xs flex justify-center items-center flex-row  mt-4 gap-4">
                    <div className="w-80 h-[28rem] hover:shadow-lg hover:scale-105 transition duration-200 bg-gray-700 flex justify-center items-center flex-col rounded-lg  gap-2 mb-4">
                        <img src="https://th.bing.com/th/id/OIP.mvzga4Ds94xEv8erKhlhwQHaHa?rs=1&pid=ImgDetMain" className="w-64 h-40" alt="" />
                        <div className=" w-64 flex flex-row justify-between  intems-center gap-4 bg-gray-700">
                            <h4 className="text-white text-2xl font-bold bg-gray-700">Nombre</h4>
                            <div className="bg-gray-700 text-white gap-2 flex flex-row justify-center items-center">
                                <FontAwesomeIcon icon={faHtml5} className="bg-gray-700" size="1x" />
                                <FontAwesomeIcon icon={faCss3} className="bg-gray-700" size="1x" />
                                <FontAwesomeIcon icon={faJs} className="bg-gray-700" size="1x" />
                            </div>
                        </div>
                        <p className="max-w-64 text-white bg-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sapiente ducimus quibusdam assumenda iste praesentium doloribus excepturi a maiores nulla qui mollitia suscipit quae aliquam, minima corrupti non tempora temporibus!</p>
                    </div>
                    <div className="w-80 h-[28rem] hover:shadow-lg hover:scale-105 transition duration-200 bg-gray-700 flex justify-center items-center flex-col rounded-lg  gap-2 mb-4">
                        <img src="https://th.bing.com/th/id/OIP.mvzga4Ds94xEv8erKhlhwQHaHa?rs=1&pid=ImgDetMain" className="w-64 h-40" alt="" />
                        <div className=" w-64 flex flex-row justify-between  intems-center gap-4 bg-gray-700">
                            <h4 className="text-white text-2xl font-bold bg-gray-700">Nombre</h4>
                            <div className="bg-gray-700 text-white gap-2 flex flex-row justify-center items-center">
                                <FontAwesomeIcon icon={faHtml5} className="bg-gray-700" size="1x" />
                                <FontAwesomeIcon icon={faCss3} className="bg-gray-700" size="1x" />
                                <FontAwesomeIcon icon={faJs} className="bg-gray-700" size="1x" />
                            </div>
                        </div>
                        <p className="max-w-64 text-white bg-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sapiente ducimus quibusdam assumenda iste praesentium doloribus excepturi a maiores nulla qui mollitia suscipit quae aliquam, minima corrupti non tempora temporibus!</p>
                    </div>
                </div>

            </div>
        </div>

    );
}