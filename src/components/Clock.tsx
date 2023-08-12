'use client'

import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'

export default function Clock() {
  const [tempoRestante, setTempoRestante] = useState(
    dayjs().endOf('day').diff(dayjs(), 'second'),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTempoRestante(tempoRestante - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [tempoRestante])

  const horas = Math.floor(tempoRestante / 3600)
    .toString()
    .padStart(2, '0')
  const minutos = Math.floor((tempoRestante % 3600) / 60)
    .toString()
    .padStart(2, '0')
  const segundos = (tempoRestante % 60).toString().padStart(2, '0')

  return (
    <div className="flex flex-col items-center ">
      <h2>Próximo quiz em</h2>
      <div className="flex gap-2 bg-gray-700 p-4 rounded">
        <p className="bg-amber-200 text-black text-2xl font-bold p-2">
          {horas}
        </p>
        <p className="bg-amber-200 text-black text-2xl font-bold p-2">
          {minutos}
        </p>
        <p className="bg-amber-200 text-black text-2xl font-bold p-2">
          {segundos}
        </p>
      </div>
    </div>
  )
}
