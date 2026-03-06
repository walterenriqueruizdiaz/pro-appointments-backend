
// import React from 'react'

import Dashboard from "./appointments/components/Dashboard"
import { mockAppointments } from "./mock-data/appointments.mock"
import CustomFooter from "./shared/components/CustomFooter"
import CustomHeader from "./shared/components/CustomHeader"

const ProAppointments = () => {
    return (
        // Header
        <>
            <CustomHeader />
            <Dashboard appointments={mockAppointments} />
            <CustomFooter />
        </>
    )
}

export default ProAppointments
