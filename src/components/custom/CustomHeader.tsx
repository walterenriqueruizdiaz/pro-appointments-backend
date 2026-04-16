// import React from 'react'
import CustomMenu from "./CustomMenu"


const CustomHeader = () => {

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a className="flex flex-col leading-none group" href="/">
                    <span className="text-orange-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-0.5">Pro</span>
                    <span className="text-white font-black text-lg sm:text-xl tracking-tighter">Appointments</span>
                </a>

                <CustomMenu />

                {/* <div className="hidden sm:block">
                    <span className="text-amber-200 text-[10px] sm:text-xs">Walter Enrique Ruiz Diaz</span>
                </div> */}
            </div>
        </nav>
    )
}

export default CustomHeader
