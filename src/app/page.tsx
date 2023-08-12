import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen w-full flex justify-center items-center flex-col">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="drop-shadow-[0_3px_3px_rgba(0,255,127,1)] text-green-600 text-6xl">
          Ziuq
        </h1>
        <h2 className="text-2xl text-gray-300">Seu quiz diário</h2>
      </div>

      <div className="border-green-600 border-2 rounded-md mt-10 p-3 flex items-center justify-center shadow-[0_0px_8px_rgba(0,255,127,1)] flex-col w-48">
        <div className="flex justify-center text-gray-200 text-center p-5 italic">
          Responda 10 perguntas todos os dias e aprimore seus conhecimentos
        </div>
        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <Link
            href="/game"
            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            Iniciar quiz
          </Link>
        </button>
      </div>
    </main>
  )
}
