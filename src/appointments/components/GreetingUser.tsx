import type { UserInterface } from "@/interfaces/user.interface"

interface Props {
    user: UserInterface
}

export const GreetingUser = ({ user }: Props) => {
    return (
        <h1 className="text-md text-gray-900">
            ¡Buenos días, <span className="font-bold">{user.name}</span>! ☀️
        </h1>
    )
}

export default GreetingUser