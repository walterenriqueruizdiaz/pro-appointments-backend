import { mockAppointments } from "@/mock-data/appointments.mock";

import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import AppointmentsLayout from "@/appointments/layout/AppointmentsLayout";
import HomePage from "@/appointments/pages/home/HomePage";
import AppointmentsPage from "@/appointments/pages/apppointments/AppointmentsPage";
import SessionsPage from "@/appointments/pages/sessions/SessionsPage";
import AdministrationPage from "@/appointments/pages/administration/AdministrationPage";


const PatientsPage = lazy(() => import('@/appointments/pages/patients/PatientsPage'))

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppointmentsLayout />,
        children: [
            {
                index: true,
                element: <HomePage appointments={mockAppointments} />
            },
            // {
            //     path: 'heroes/1',
            //     element: <HeroPage />
            // },
            {
                path: 'patients',
                element: <PatientsPage />
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