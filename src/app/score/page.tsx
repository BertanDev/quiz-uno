import Clock from '@/components/Clock'
import { cookies } from 'next/headers'

export default function Score() {
  const score = Number(cookies().get('score')?.value)

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-8">
      <div
        className={`flex w-1/2  ${
          score < 7 ? 'border-red-600' : 'border-green-600'
        } border-2 rounded-md p-3 items-center justify-center ${
          score < 7
            ? 'shadow-[0_0px_8px_#c23838]'
            : 'shadow-[0_0px_8px_rgba(0,255,127,1)]'
        }  flex-col  h-1/4`}
      >
        <span className="text-xl">Última pontuação: {score}</span>
        <span className="mt-3 text-2xl">
          {score < 7
            ? 'Volte amanhã e melhore isso'
            : score < 9
            ? 'Foi bom, mas pode melhorar'
            : 'Parabéns, nenhum erro'}
        </span>
      </div>

      <Clock />
    </div>
  )
}
