import type { Appointment } from "../../mock-data/appointments.mock";

// import React from 'react'
interface Props {
    appointments: Appointment[];
}

const Dashboard = ({ appointments }: Props) => {
    return (
        <main className="grow p-2">
            <div className="text-xl">
                <h1>Dashboard</h1>
            </div>
            <div className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <h5 className="">Crear Paciente</h5>
                            {/* <p className="">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <div className="">
                            <h5 className="">Ver Agenda</h5>
                            {/* <p className="">With supporting text below as a natural lead-in to additional content.</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>


            {/* Turnos de hoy */}
            <div className="">
                <div className="">
                    <h5 className="">Turnos de hoy</h5>
                    <p className="">No hay turnos para hoy.</p>
                    <p className="">{appointments.length} (total de turnos de hoy)</p>
                    <ul className="">
                        {
                            appointments.map((appointment) => (
                                <li key={appointment.id} className="">{appointment.patientId} (id del paciente)</li>
                            ))
                        }
                    </ul>
                </div>
            </div>


            {/* Esta semana */}
            <div className="">
                <div className="">
                    Esta semana
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="">
                        <h5 className="">1</h5>
                        <p className="">Total turnos</p>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <h5 className="">1</h5>
                        <p className="">Sesiones realizadas</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard
