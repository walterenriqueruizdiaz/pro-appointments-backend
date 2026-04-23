import { Link, useNavigate } from "react-router";

import GreetingUser from "@/appointments/components/GreetingUser";
import QuickAction from "@/appointments/components/QuickAction";
// import TableAction from "@/appointments/components/TableAction";
import { Button } from "@/components/ui/button";
import type { UserInterface } from "@/interfaces/user.interface";
import type { Patient } from "@/mock-data/patients.mock";
import { Plus, Trash2, User, UserPlus, Users, } from "lucide-react";

// import React from 'react'
interface Props {
    patients: Patient[],
    user: UserInterface
}

export const PatientsPage = ({ patients, user }: Props) => {

    const navigate = useNavigate();

    const handleDelete = async (e: any, id: string) => {
        e.preventDefault(); // Prevent navigating to detail
        e.stopPropagation();

        if (!window.confirm("¿Está seguro de que desea eliminar este paciente?")) return;

        try {
            console.log(id);
            // await api.delete(`/patients/${id}`);
            // setPatients(patients.filter(p => p.id !== id));
        } catch (err) {
            console.error("Error deleting patient", err);
            // const msg = err.response?.data?.message || "Error al eliminar el paciente";
            // alert(msg);
        }
    };

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

            {/* Lista de pacientes */}
            <div className="bg-white shadow overflow-hidden rounded-md">
                <ul className="divide-y divide-gray-200">
                    {patients.map(patient => (
                        <li key={patient.id} className="hover:bg-gray-50">
                            <div
                                onClick={() => navigate(`/patient/${patient.id}`)}
                                className="block p-4 sm:px-6 cursor-pointer"
                            >
                                {/* Fila principal: avatar + info del paciente */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center min-w-0">
                                        <div className="shrink-0 bg-indigo-100 rounded-full p-2">
                                            <User className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div className="ml-3 min-w-0">
                                            <div className="text-sm font-medium text-indigo-600 truncate">
                                                {patient.firstName} {patient.lastName}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                DNI: {patient.dni}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Botones visibles en pantallas medianas y grandes */}
                                    <div className="hidden sm:flex items-center gap-4 shrink-0 ml-4">
                                        <div className="text-sm text-gray-500">
                                            {patient.mobilePhone}
                                        </div>
                                        <Link
                                            to={`/patients/${patient.id}/contacts`}
                                            className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                            title="Ver Contactos"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Users className="w-5 h-5" />
                                        </Link>
                                        <button
                                            onClick={(e) => handleDelete(e, patient.id)}
                                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Eliminar Paciente"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                                {/* Segunda fila: teléfono y botones solo en móvil */}
                                <div className="flex sm:hidden items-center justify-between mt-2 pl-11">
                                    <span className="text-sm text-gray-500">{patient.mobilePhone}</span>
                                    <div className="flex items-center gap-2">
                                        <Link
                                            to={`/patients/${patient.id}/contacts`}
                                            className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                            title="Ver Contactos"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Users className="w-5 h-5" />
                                        </Link>
                                        <button
                                            onClick={(e) => handleDelete(e, patient.id)}
                                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Eliminar Paciente"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    {patients.length === 0 && (
                        <li className="p-4 text-center text-gray-500">No se encontraron pacientes.</li>
                    )}
                </ul>
            </div>

        </main>

    )
}

export default PatientsPage