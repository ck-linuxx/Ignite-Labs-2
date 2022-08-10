import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

type SidebarProps = {
  menu: boolean;
}

export function Sidebar({ menu }: SidebarProps ){
  const { data } = useGetLessonsQuery()

  return (
    <aside className={`md:w-[348px] ${!menu ? "hidden" : "absolute w-full h-full"} md:inline bg-gray-700 p-6 border-l border-gray-600`}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        { data?.lessons.map(lesson => {
          return (
            <Lesson 
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        }) }
      </div>
    </aside>
  ) //1:01:38 aula 2
}