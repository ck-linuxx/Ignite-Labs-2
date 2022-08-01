import { List } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {

  return (
    <header className="sm:w-full md:py-5 flex items-center md:justify-center bg-gray-700 border-b border-gray-600 px-[1.5625rem] py-[1rem] gap-[4.3125rem]">
      <Logo />
      <div className="sm:inline md:hidden flex justify-center items-center gap-2">
        <p className="text-sm text-gray-100">Aulas</p>
        <button>
          <List className="text-blue-500 w-[2rem] h-[2rem]"/>
        </button>
      </div>
    </header>
  )
}