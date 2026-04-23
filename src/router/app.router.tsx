import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import { mockAppointments } from "@/mock-data/appointments.mock";
import { mockPatients } from "@/mock-data/patients.mock";

import AppointmentsLayout from "@/appointments/layout/AppointmentsLayout";
import HomePage from "@/appointments/pages/home/HomePage";
import AppointmentsPage from "@/appointments/pages/apppointments/AppointmentsPage";
import SessionsPage from "@/appointments/pages/sessions/SessionsPage";
import AdministrationPage from "@/appointments/pages/administration/AdministrationPage";
import { userMock } from "@/mock-data/user.mock";
import LoginPage from "@/appointments/pages/login/LoginPage";
import PatientPage from "@/appointments/pages/patients/PatientPage";


const PatientsListPage = lazy(() => import('@/appointments/pages/patients/PatientsListPage'))

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppointmentsLayout />,
        children: [
            {
                index: true,
                element: <HomePage appointments={mockAppointments} user={userMock} />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'patients',
                element: <PatientsListPage patients={mockPatients} user={userMock} />
            },
            {
                path: 'patient/:idPatient',
                element: <PatientPage />
            },
            {
                path: 'appointments',
                element: <AppointmentsPage />
            },
            {
                path: 'sessions',
                element: <SessionsPage />
            },
            {
                path: 'administration',
                element: <AdministrationPage />
            },
        ]
    },
    // {
    //     path: '/admin',
    //     element: <AdminLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <AdminPage />,
    //         }
    //     ]

    // }
])