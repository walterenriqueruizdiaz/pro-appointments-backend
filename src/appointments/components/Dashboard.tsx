import type { Appointment } from "../../mock-data/appointments.mock";
import NoticeFreeTrial from "../../shared/components/NoticeFreeTrial";

// import React from 'react'
interface Props {
    appointments: Appointment[];
}

const Dashboard = ({ appointments }: Props) => {
    return (
        <main className="p-4 lg:p-8">
            <NoticeFreeTrial />
            <div className="space-y-8">
                {/* Encabezado */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        ¡Buenos días, Herramientas! ☀️
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Aquí tienes un resumen de tu agenda
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="rounded-xl text-card-foreground p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-gray-500">
                                    Reuniones Este Mes
                                </p>
                                <p className="text-3xl font-bold text-gray-900">
                                    0</p>
                                <p className="text-sm text-gray-500">abril 2026</p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-check w-6 h-6 text-blue-600">
                                    <path d="M8 2v4"></path><path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl text-card-foreground p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-gray-500">
                                    Próximas Reuniones
                                </p>
                                <p className="text-3xl font-bold text-gray-900">
                                    0
                                </p>
                                <p className="text-sm text-gray-500">
                                    Pendientes
                                </p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-6 h-6 text-blue-600">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl text-card-foreground p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-gray-500">Tipos de Evento</p>
                                <p className="text-3xl font-bold text-gray-900">0</p>
                                <p className="text-sm text-gray-500">Activos</p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users w-6 h-6 text-blue-600">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl text-card-foreground p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-gray-500">Horas Este Mes</p>
                                <p className="text-3xl font-bold text-gray-900">0</p>
                                <p className="text-sm text-gray-500">0 minutos</p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up w-6 h-6 text-blue-600">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="rounded-xl bg-card text-card-foreground border-0 shadow-sm">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div className="tracking-tight text-lg font-semibold">
                                    Próximas Reuniones
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <div className="text-center py-8 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-12 h-12 mx-auto mb-3 text-gray-300">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    <p>No tienes reuniones programadas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="rounded-xl bg-card text-card-foreground border-0 shadow-sm">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div className="tracking-tight text-lg font-semibold">
                                    Acciones Rápidas
                                </div>
                            </div>
                            <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                                <a href="/eventtypes">
                                    <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500 hover:bg-blue-600 flex items-center justify-center mb-3 transition-transform group-hover:scale-105">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus w-5 h-5 text-white">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5v14"></path>
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-900">
                                            Crear Evento
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Nuevo tipo de evento
                                        </p>
                                    </div>
                                </a>
                                <a href="/availability">
                                    <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group">
                                        <div className="w-10 h-10 rounded-lg bg-green-500 hover:bg-green-600 flex items-center justify-center mb-3 transition-transform group-hover:scale-105">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-5 h-5 text-white">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-900">
                                            Disponibilidad
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Configurar horarios
                                        </p>
                                    </div>
                                </a>
                                <a href="/share">
                                    <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group">
                                        <div className="w-10 h-10 rounded-lg bg-purple-500 hover:bg-purple-600 flex items-center justify-center mb-3 transition-transform group-hover:scale-105">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 w-5 h-5 text-white">
                                                <circle cx="18" cy="5" r="3"></circle>
                                                <circle cx="6" cy="12" r="3"></circle>
                                                <circle cx="18" cy="19" r="3"></circle>
                                                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-900">
                                            Compartir
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Compartir tu link
                                        </p>
                                    </div>
                                </a>
                                <a href="/settings">
                                    <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group">
                                        <div className="w-10 h-10 rounded-lg bg-gray-500 hover:bg-gray-600 flex items-center justify-center mb-3 transition-transform group-hover:scale-105">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings w-5 h-5 text-white">
                                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                        <p className="font-medium text-gray-900">Configuración</p>
                                        <p className="text-sm text-gray-500">Ajustes de cuenta</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="rounded-xl bg-card text-card-foreground border-0 shadow-sm">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div className="tracking-tight text-lg font-semibold">
                                    Actividad Reciente
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <div className="text-center py-8 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-12 h-12 mx-auto mb-3 text-gray-300">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <p>
                                        No hay actividad reciente
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        // <main className="grow p-2">
        //     <div className="text-xl">
        //         <h1>Dashboard</h1>
        //     </div>
        //     <div className="">
        //         <div className="">
        //             <div className="">
        //                 <div className="">
        //                     <h5 className="">Crear Paciente</h5>
        //                     {/* <p className="">With supporting text below as a natural lead-in to additional content.</p> */}
        //                     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="">
        //             <div className="">
        //                 <div className="">
        //                     <h5 className="">Ver Agenda</h5>
        //                     {/* <p className="">With supporting text below as a natural lead-in to additional content.</p> */}
        //                     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>


        //     {/* Turnos de hoy */}
        //     <div className="">
        //         <div className="">
        //             <h5 className="">Turnos de hoy</h5>
        //             <p className="">No hay turnos para hoy.</p>
        //             <p className="">{appointments.length} (total de turnos de hoy)</p>
        //             <ul className="">
        //                 {
        //                     appointments.map((appointment) => (
        //                         <li key={appointment.id} className="">{appointment.patientId} (id del paciente)</li>
        //                     ))
        //                 }
        //             </ul>
        //         </div>
        //     </div>


        //     {/* Esta semana */}
        //     <div className="">
        //         <div className="">
        //             Esta semana
        //         </div>
        //     </div>
        //     <div className="">
        //         <div className="">
        //             <div className="">
        //                 <h5 className="">1</h5>
        //                 <p className="">Total turnos</p>
        //             </div>
        //         </div>
        //         <div className="">
        //             <div className="">
        //                 <h5 className="">1</h5>
        //                 <p className="">Sesiones realizadas</p>
        //             </div>
        //         </div>
        //     </div>
        // </main>
    )
}

export default Dashboard
