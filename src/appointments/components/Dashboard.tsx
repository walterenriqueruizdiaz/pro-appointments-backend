import type { Appointment } from "../../mock-data/appointments.mock";

// import React from 'react'
interface Props {
    appointments: Appointment[];
}

const Dashboard = ({ appointments }: Props) => {
    return (
        <>
            <div className="row text-center mt-2 mb-2">
                <h1>Dashboard</h1>
            </div>
            <div className="row mt-2 mb-2">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Crear Paciente</h5>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Ver Agenda</h5>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>


            {/* Turnos de hoy */}
            <div className="card mt-2 mb-2">
                <div className="card-body">
                    <h5 className="card-title text-center">Turnos de hoy</h5>
                    <p className="card-text">No hay turnos para hoy.</p>
                    <p className="card-text">{appointments.length} (total de turnos de hoy)</p>
                    <ul className="list-group list-group-flush">
                        {
                            appointments.map((appointment) => (
                                <li key={appointment.id} className="list-group-item">{appointment.patientId} (id del paciente)</li>
                            ))
                        }
                    </ul>
                </div>
            </div>


            {/* Esta semana */}
            <div className="card text-center mt-2 mb-2">
                <div className="card-header">
                    Esta semana
                </div>
            </div>
            <div className="card-group mt-2 mb-2">
                <div className="card text-center">
                    <div className="card-body bg-primary">
                        <h5 className="card-title">1</h5>
                        <p className="card-text">Total turnos</p>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-body bg-success">
                        <h5 className="card-title">1</h5>
                        <p className="card-text">Sesiones realizadas</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
