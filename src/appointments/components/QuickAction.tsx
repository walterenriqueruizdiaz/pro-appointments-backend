import type { LucideIcon } from "lucide-react";

interface Props {
    href: string;
    label: string;
    subtext: string;
    icon: LucideIcon;
    color: string;
}



const QuickAction = ({ href, label, subtext, icon: Icon, color }: Props) => {
    return (
        <a href={href}>
            <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group">
                {/* Contenedor del Icono con color dinámico */}
                <div className={`w-10 h-10 rounded-lg ${color}  hover:bg-blue-600 flex items-center justify-center mb-3 transition-transform group-hover:scale-105`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-medium text-gray-900">
                    {label}
                </p>
                <p className="text-sm text-gray-500">
                    {subtext}
                </p>
            </div>
        </a >
    )
}



export default QuickAction
