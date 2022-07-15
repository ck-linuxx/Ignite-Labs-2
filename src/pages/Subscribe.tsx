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
      <div className="w-full max-w-[1100px] flex justify-between items-center mt-20 mx-auto">
        <div className="max-w-[640px]" >
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong></h1>
          <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta 
            demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-700" >
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