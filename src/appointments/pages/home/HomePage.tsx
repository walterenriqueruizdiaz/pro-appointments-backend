import StatCard from "@/appointments/components/StatCard";
import type { Appointment } from "../../../mock-data/appointments.mock";
import { CalendarCheck, ClipboardClock, Clock, NotebookIcon, NotebookPen, Plus, UserPlus, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuickAction from "@/appointments/components/QuickAction";
import GreetingUser from "@/appointments/components/GreetingUser";
import type { UserInterface } from "@/interfaces/user.interface";


interface Props {
    appointments: Appointment[];
    user: UserInterface,
}

const HomePage = ({ appointments, user }: Props) => {
    return (
        <main className="p-4 lg:p-8">
            <div className="space-y-8">
                {/* Encabezado */}
                <div>
                    <GreetingUser user={user} />
                    <p className="text-gray-500 mt-1">
                        Aquí tienes un resumen de tu agenda
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard title="Turnos del día" value={appointments.length} subtext="6 de Abril 2026" color="green" icon={CalendarCheck} />
                    <StatCard title="Esta semana" value="0" subtext="Total semanal" color="blue" icon={ClipboardClock} />
                    <StatCard title="Reuniones" value="0" subtext="Pendientes" color="orange" icon={Users} />
                    <StatCard title="Sesiones" value="0" subtext="Sesiones registradas" color="gray" icon={NotebookIcon} />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Listado de próximos turnos */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="tracking-tight text-lg font-semibold">
                                    Próximos Turnos
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center py-8 text-gray-500">
                                <Clock className="w-12 h-12 mb-3 text-gray-300" />
                                <p>No tienes turnos programados</p>
                                {/* lista de los appointments */}
                                <p>Hora - Paciente</p>
                            </CardContent>
                        </Card>

                    </div>
                    {/* Acciones rápidas */}
                    <div className="space-y-6">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 grid grid-cols-2 gap-3">
                                <QuickAction color="green" href="/appointments" label="Ver Agenda" icon={CalendarCheck} subtext="Turnos" />
                                <QuickAction color="blue" href="/newappointment" label="Agendar Turno" icon={Plus} subtext="Nuevo Turno" />
                                <QuickAction color="purple" href="/newPatient" label="Agregar Paciente" icon={UserPlus} subtext="Nuevo Paciente" />
                                <QuickAction color="gray" href="/sessions" label="Nueva Sesión" icon={NotebookPen} subtext="Agregar Sesión" />
                                {/* <QuickAction color="bg-gray-500" href="/configuration" label="Configuración" icon={Settings} subtext="Ajustes" /> */}
                            </CardContent>
                        </Card>

                        <div className="rounded-xl bg-card text-card-foreground border-0 shadow-sm">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div className="tracking-tight text-lg font-semibold">
                                    Actividad Reciente
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <div className="text-center py-8 text-gray-500">
                                    <Clock className="w-12 h-12 mx-auto mb-3 text-gray-300" />
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
        //         <h1>HomePage</h1>
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

export default HomePage
