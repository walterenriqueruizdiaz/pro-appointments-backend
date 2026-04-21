import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

interface Props {
    href: string;
    label: string;
    // subtext: string;
    icon: LucideIcon;
    color: keyof typeof colorMap;
}

const colorMap = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    orange: "bg-orange-500 hover:bg-orange-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    gray: "bg-gray-500 hover:bg-gray-600",
    red: "bg-red-500 hover:bg-red-600",
};

const TableAction = ({ href, label, icon: Icon, color }: Props) => {

    const colorClass = colorMap[color] || colorMap.blue;

    return (
        <Link to={href} className="inline-block">
            <div className="p-1 rounded-lg border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer relative group flex items-center justify-center">
                {/* Contenedor del Icono con color dinámico */}
                <div className={`w-8 h-8 rounded-md ${colorClass} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <Icon className="w-4 h-4 text-white" aria-label={label} />
                    {/* Tooltip */}
                    <div className={`absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 hidden group-hover:block px-2 py-1 ${colorClass} text-white text-xs rounded shadow-lg z-10`}>
                        {label}
                    </div>
                </div>
            </div>
        </Link >
    )
}



export default TableAction
