// import React from 'react'

const CustomHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pro Appointments</a>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/dashboard">
                            <i className="fa-solid fa-chalkboard"></i>
                            Dashboard</a>
                        <a className="nav-link" href="/patients">
                            <i className="fa-solid fa-users"></i>
                            Pacientes</a>
                        <a className="nav-link" href="/appointments" data-discover="true">
                            <i className="fa-solid fa-business-time"></i>
                            Agenda</a>
                        <a className="nav-link" href="/sessions" data-discover="true">
                            <i className="fa-regular fa-note-sticky"></i>
                            Sesiones</a>
                        <a className="nav-link" href="/admin" data-discover="true">
                            <i className="fa-solid fa-users-gear"></i>
                            Administración</a>
                    </div>
                    <button>
                        <i className="fas fa-sign-out-alt"></i>Salir</button>
                </div>
                <div>
                    <span>Walter Enrique Ruiz Diaz</span>
                </div>
            </div>
        </nav>
    )
}

export default CustomHeader
