// import React from 'react'

const CustomHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation"></button>
                <span className="navbar-toggler-icon"></span>
                <span>Pro Therapists Portal</span>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a aria-current="page" href="/dashboard" data-discover="true">
                            Dashboard</a>
                        <a href="/patients" data-discover="true">
                            <i className="fa-solid fa-users"></i>
                            Pacientes</a>
                        <a href="/appointments" data-discover="true">
                            Agenda</a>
                        <a href="/sessions" data-discover="true">
                            Sesiones</a>
                        <a href="/admin" data-discover="true">
                            Administración</a>
                    </div>
                    <button>
                        Salir</button>
                </div>
                <div>
                    <span>Walter Enrique Ruiz Diaz</span>
                </div>
            </div>
        </nav>
    )
}

export default CustomHeader
