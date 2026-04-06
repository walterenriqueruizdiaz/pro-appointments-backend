// import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom"
import { Laptop, Users, ClipboardClock, NotebookPen, UserCog, LogOut } from "lucide-react";

const menuItems = [
    { 'label': 'Dashboard', 'href': '/dashboard', 'icon': Laptop, 'key': 'dashboard', roles: ['admin', 'user'] },
    { 'label': 'Pacientes', 'href': '/patients', 'icon': Users, 'key': 'patients', roles: ['admin', 'user'] },
    { 'label': 'Agenda', 'href': '/appointments', 'icon': ClipboardClock, 'key': 'appointments', roles: ['admin', 'user'] },
    { 'label': 'Sesiones', 'href': '/sessions', 'icon': NotebookPen, 'key': 'sessions', roles: ['admin', 'user'] },
    { 'label': 'Administración', 'href': '/admin', 'icon': UserCog, 'key': 'admin', roles: ['admin'] },
];

const CustomMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => { setIsOpen(!isOpen); }

    return (
        <>
            <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="navbarNavAltMarkup"
                className="md:hidden text-white focus:outline-none"
                onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <div
                className={`${isOpen ? 'flex' : 'hidden'}  md:flex flex-col md:flex-row md:space-x-4 absolute md:relative top-16 
                md:top-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 text-sm items-center space-y-4 md:space-y-0`}
                id="navbarNavAltMarkup">

                {menuItems.map((item) => (
                    <NavLink
                        to={item.href}
                        key={item.key}
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                            `relative flex items-center gap-x-2 p-2.5 rounded-lg transition-colors group 
                            ${isActive
                                ? "bg-slate-800 text-white font-bold"
                                : "text-slate-200 hover:bg-slate-800"}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <span className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r"></span>
                                )}

                                <item.icon
                                    className={`h-5 w-5 shrink-0 ${isActive ? "text-blue-400" : "text-slate-400 group-hover:text-blue-400"
                                        }`}
                                />

                                <span className="font-medium">{item.label}</span>
                            </>
                        )}
                        {/* {item.icon && (
                            <item.icon className="h-5 w-5 text-slate-400 group-hover:text-blue-400 shrink-0" />
                        )}
                        <span className={`font-medium ${!item.icon ? "pl-8" : ""}`}>{item.label}</span> */}
                    </NavLink>
                ))}


                <button className="flex items-center gap-x-2 p-2.5 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors group" onClick={toggleMenu}>
                    <LogOut className="h-5 w-5 text-slate-400 group-hover:text-blue-400 shrink-0" />
                    Salir
                </button>
            </div>

        </>
    )
}

export default CustomMenu
