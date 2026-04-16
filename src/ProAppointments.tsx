

// import Dashboard from "./appointments/pages/home/HomePage"
// import { mockAppointments } from "./mock-data/appointments.mock"
// import CustomFooter from "./components/custom/CustomFooter"
// import CustomHeader from "./shared/components/CustomHeader"

import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"

const ProAppointments = () => {
    return (
        <>
            <RouterProvider router={appRouter} />
            {/* <CustomHeader />
            <Dashboard appointments={mockAppointments} />
            <CustomFooter /> */}
        </>
    )
}

export default ProAppointments
