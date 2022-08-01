import { DiscordLogo, Lightning } from "phosphor-react";

interface IButtonProps {
  type: string;
}

export function Button(props: IButtonProps) {
  return (
    <>
      {
        props.type === "discord" &&
          <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold upercase gap-2 justify-center hover:bg-green-700 transition-colors">
            <DiscordLogo size={24} />
            Comunidade do Discord
          </a>
      }

      {
        props.type === "challange" &&
          <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold upercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors ">
            <Lightning size={24} />
            Acesse o desafio
          </a>
      }
    </>
  )
}