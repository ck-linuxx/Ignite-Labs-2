import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscribeMutation } from "../graphql/generated";

export function Subscribe() { //aula 5 15:19
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [createSubscriber, { loading }] = useCreateSubscribeMutation()

  async function handleSubscribe(event: FormEvent ) {
    event?.preventDefault()

    await createSubscriber({
      variables: {
        name, 
        email,
      }
    })

    navigate("/event")
  }

  return ( //aula 4 44:58
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full md:max-w-[1100px] md:flex md:justify-between md:items-center mt-10 md:mt-20 mx-auto">
        <div className="sm:max-w-[312px] md:max-w-[640px] flex justify-center items-center flex-col px-6 pb-8">
          <Logo />

          <h1 className="hidden mt-8 md:inline text-[2.5rem] leading-tight">Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong></h1>
          <h1 className="mt-[1.525625rem] inline md:hidden text-[1.875rem] leading-tight">Construa uma <br /> <strong className="text-blue-500">aplicação completa</strong>, <br /> do zero, com <strong className="text-blue-500">React</strong></h1>
          <p className="mt-4 text-gray-200 text-sm leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta 
            demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className=" p-8 bg-gray-700 border border-gray-700" >
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-14 focus:outline-none" 
              type="text" 
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14 focus:outline-none" 
              type="text" 
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <button 
              type="submit" 
              disabled={loading}
              className="bg-green-500 py-4 rounded mt-4 font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              GARANTIR MINHA VAGA
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
    </div>
  )
}