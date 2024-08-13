export default function Principal() {
    return (
        <body className="flex justify-center items-center flex-col">
            <nav className="w-1/3 h-20 text-white flex justify-center items-center ">
                <ul className=" flex flex-row gap-4 ">
                    <li><a href="">Experiencia</a></li>
                    <li><a href="">Trabajos</a></li>
                    <li><a href="">Sobre mí</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
            <div className="w-full flex  justify-center intems-center">
                <div className="w-8/12 h-64 m-8 p-16 flex flex-col gap-6 justify-center intems-center text-white">
                    <img className="w-16 h-16 bg-white rounded-full" src="https://static.vecteezy.com/system/resources/previews/020/911/740/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" alt="" />
                    <h3>Jhoss</h3>
                    <p>Estudiante de ingenieria de software en segundo semestre, auxiliar tecnico en desarrollo de
                        software
                    </p>
                    <a href="">Contactame</a>
                </div>
            </div>

        </body>

    )
}