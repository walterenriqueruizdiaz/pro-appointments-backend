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


const PatientsPage = lazy(() => import('@/appointments/pages/patients/PatientsPage'))

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppointmentsLayout />,
        children: [
            {
                index: true,
                element: <HomePage appointments={mockAppointments} user={userMock} />
            },
            // {
            //     path: 'heroes/1',
            //     element: <HeroPage />
            // },
            {
                path: 'patients',
                element: <PatientsPage patients={mockPatients} user={userMock} />
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