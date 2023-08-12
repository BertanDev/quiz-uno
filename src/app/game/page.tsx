'use client'

import { useState } from 'react'
import { questions } from '../questions'
import { Alternative } from '@/components/Alternative'
import Stopwatch from '@/components/Stopwatch'
import { ResultQuestions } from '@/components/ResultQuestions'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import dayjs from 'dayjs'

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [seconds, setSeconds] = useState(30)
  const [correctQuestions, setCorrectQuestions] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ])

  const router = useRouter()

  if (currentQuestion === 10) {
    const trueValues = correctQuestions.filter((value) => value === true)
    const numberOfTrue = trueValues.length.toString()

    const dayOfResponse = dayjs()

    Cookies.set('date_response', String(dayOfResponse))
    Cookies.set('score', numberOfTrue)
    return router.push('/score')
  } else {
    return (
      <main className="flex">
        <div className="flex flex-col w-1/2 h-screen p-4 gap-24">
          <div className="border-green-600 border-2 rounded-md p-3 flex items-center justify-center shadow-[0_0px_8px_rgba(0,255,127,1)] flex-col w-11/12 h-1/4">
            <p className="text-gray-500 text-lg">
              {questions[currentQuestion].question}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {questions[currentQuestion].alternatives.map(
              (alternative, index) => {
                let currentLetter

                switch (index) {
                  case 0:
                    currentLetter = 'A'
                    break
                  case 1:
                    currentLetter = 'B'
                    break
                  case 2:
                    currentLetter = 'C'
                    break
                  case 3:
                    currentLetter = 'D'
                    break
                }

                return (
                  <Alternative
                    key={index}
                    alternative={alternative}
                    correctAlternative={
                      questions[currentQuestion].correctAlternative
                    }
                    currentLetter={currentLetter as string}
                    setCorrectQuestions={setCorrectQuestions}
                    correctQuestions={correctQuestions}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    setSeconds={setSeconds}
                  />
                )
              },
            )}
          </div>
        </div>
        <div className="flex w-1/2 h-screen flex-col justify-center items-center gap-8">
          <Stopwatch
            setCurrentQuestion={setCurrentQuestion}
            currentQuestion={currentQuestion}
            setCorrectQuestions={setCorrectQuestions}
            correctQuestions={correctQuestions}
            setSeconds={setSeconds}
            seconds={seconds}
          />

          <ResultQuestions correctQuestions={correctQuestions} />
        </div>
      </main>
    )
  }
}
