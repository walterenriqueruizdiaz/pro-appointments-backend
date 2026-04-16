import { Sparkles } from "lucide-react"

const NoticeFreeTrial = () => {
    return (
        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-2 px-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Sparkles width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 animate-pulse" />
                    <span className="text-sm font-medium">6 días restantes de tu trial gratuito</span>
                </div>
                <a className="text-sm font-semibold underline hover:no-underline whitespace-nowrap" href="/billing">Suscribirme por $6.99/mes →</a>
            </div>
        </div>
    )
}

export default NoticeFreeTrial
