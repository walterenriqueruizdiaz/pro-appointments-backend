import CustomHeader from "@/components/custom/CustomHeader"
import { Outlet } from "react-router"


export const AppointmentsLayout = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto p-6">
                <CustomHeader />
                <Outlet />
            </div>
        </div>
    )
}

export default AppointmentsLayout
