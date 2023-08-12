'use client'

import { useEffect, useState } from 'react'

interface StopwatchProps {
  setCurrentQuestion: any
  currentQuestion: number
  setCorrectQuestions: any
  correctQuestions: null[]
  setSeconds: any
  seconds: number
}

export default function Stopwatch({
  currentQuestion,
  setCurrentQuestion,
  setCorrectQuestions,
  correctQuestions,
  setSeconds,
  seconds,
}: StopwatchProps) {
  const [isNewQuestion, setIsNewQuestion] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(seconds - 1)
    }, 1000)

    if (seconds === 0) {
      setCorrectQuestions(
        correctQuestions.map((item, index) => {
          if (index === currentQuestion) {
            return false
          }

          return item
        }),
      )
      setCurrentQuestion(currentQuestion + 1)
      clearTimeout(timer)
      setSeconds(30)
      setIsNewQuestion(currentQuestion)
    }

    console.log(isNewQuestion, currentQuestion)

    if (isNewQuestion !== currentQuestion) {
      setIsNewQuestion(currentQuestion)
      setSeconds(30)
      clearTimeout(timer)
    }
  }, [seconds, isNewQuestion])

  return (
    <div
      className={`p-5  border rounded-full  w-20 h-20 justify-center items-center flex animate-pulse-1s ${
        seconds < 15 && seconds >= 7
          ? 'shadow-[0_0px_8px_#cecc5c] border-yellow-400'
          : seconds < 7
          ? 'shadow-[0_0px_8px_#a13b3b] border-red-500'
          : seconds >= 15
          ? 'shadow-[0_0px_8px_rgba(0,255,127,1)] border-green-600'
          : ''
      } `}
    >
      <span className="text-2xl">{seconds}</span>
    </div>
  )
}
