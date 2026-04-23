import GreetingUser from "@/appointments/components/GreetingUser";
import QuickAction from "@/appointments/components/QuickAction";
import TableAction from "@/appointments/components/TableAction";
import { Button } from "@/components/ui/button";
import type { UserInterface } from "@/interfaces/user.interface";
import type { Patient } from "@/mock-data/patients.mock";
import { Plus, Trash, UserPlus, UserRoundPen, View } from "lucide-react";

// import React from 'react'
interface Props {
    patients: Patient[],
    user: UserInterface
}

export const PatientsPage = ({ patients, user }: Props) => {
    return (
        <main className="p-4 lg:p-8">
            {/* <div className="d-flex justify-content-between align-items-center mb-4"> */}
            <div className="space-y-8">
                {/* Encabezado */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <GreetingUser user={user} />
                        <p className="text-gray-500 mt-1">
                            Aquí tienes la lista de tus <span className="text-xl font-bold text-gray-900">Pacientes</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                        <QuickAction color="purple" href="/newPatient" label="Agregar Paciente" icon={UserPlus} subtext="Nuevo Paciente" />
                        <QuickAction color="blue" href="/newappointment" label="Agendar Turno" icon={Plus} subtext="Nuevo Turno" />
                    </div>
                </div>
            </div>

            <div className="card mb-4">
                <div className="flex items-center bg-gray-300 w-full p-2 rounded-md gap-2">
                    <input type="text" name="q" className="flex-1 bg-white p-2 rounded-sm border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" placeholder="Buscar por nombre o DNI" />
                    <Button className="px-6">Buscar</Button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="w-full table-auto md:table-fixed border-collapse md:border-separate border border-gray-400 text-sm md:text-base">
                    <thead>
                        <tr>
                            <th className="border border-gray-300">Nombre</th>
                            <th className="border border-gray-300">DNI</th>
                            <th className="border border-gray-300">Celular</th>
                            <th className="border border-gray-300"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.length > 0 ? (
                            patients.map((patient) => (
                                <tr key={patient.id}>
                                    <td className="border border-gray-300 text-center">{patient.firstName}, {patient.lastName}</td>
                                    <td className="border border-gray-300 text-center">{patient.dni}</td>
                                    <td className="border border-gray-300 text-center">{patient.mobilePhone}</td>
                                    {/* <td>{ patient.medical_coverage }</td> */}
                                    <td className="border border-gray-300">
                                        <div className="flex items-center justify-center gap-1 md:gap-2">
                                            <TableAction href={`/patient/${patient.id}`} label="Ver" icon={View} color="blue" />
                                            <TableAction href={`/patient/update/${patient.id}`} label="Editar" icon={UserRoundPen} color="green" />
                                            <TableAction href={`/patient/delete/${patient.id}`} label="Borrar" icon={Trash} color="red" />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                {/* <td colspan="5" className="text-center text-muted">No patients found.</td> */}
                                <td className="border border-gray-300 text-center text-muted">No patients found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>

    )
}

export default PatientsPage