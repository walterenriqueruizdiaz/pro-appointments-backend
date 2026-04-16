import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react";

interface Props {
    title: string;
    value: string | number; // Opcional
    subtext: string;
    color: 'blue' | 'green' | 'orange' | 'purple' | 'gray'; // Tipado estricto para evitar errores
    icon: LucideIcon;
}

const StatCard = ({ title, value, subtext, color, icon: Icon }: Props) => {
    // Diccionario de clases completas para que Tailwind las reconozca
    const colorVariants = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-green-50 text-green-600",
        orange: "bg-orange-50 text-orange-600",
        purple: "bg-purple-50 text-purple-600",
        gray: "bg-gray-50 text-gray-600",
    };

    // Obtenemos las clases basadas en la prop 'color'
    const activeClasses = colorVariants[color] || colorVariants.blue;

    return (
        // <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
        <Card className="rounded-xl text-card-foreground p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6 flex items-start justify-between">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="text-3xl font-bold text-gray-900">{value}</p>
                    <p className="text-sm text-gray-500">{subtext}</p>
                </div>
                <div className={`p-3 ${activeClasses.split(' ')[0]} rounded-xl`}>
                    <Icon className={`w-6 h-6 ${activeClasses.split(' ')[1]}`} />
                </div>
            </CardContent>

        </Card>
    )
}

export default StatCard
