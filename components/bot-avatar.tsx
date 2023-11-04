import { Avatar, AvatarImage } from "@/components/ui/avatar"


export const BotAvatar = () => {
    return(
        <Avatar>
            <AvatarImage
            className="p-1"
            src="/images/logo.png"
            />
        </Avatar>
    )
}