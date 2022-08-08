import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<string>()
  const [menu, setMenu] = useState(false)

  return ( //aula 05 07:07
    <div className="flex flex-col min-h-screen ">
      <Header setMenu={setMenu}  menu={menu}/>
      <main className="flex md:flex-1">
        { slug 
         ? <Video lessonSlug={slug}/> 
          : <div className="flex-1" /> }
        <Sidebar menu={menu} />
      </main>
    </div>
  )
}