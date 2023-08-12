interface AlternativeProps {
  alternative: string
  correctAlternative: string
  currentLetter: string
  correctQuestions: null[]
  currentQuestion: number

  setCorrectQuestions: any
  setCurrentQuestion: any
  setSeconds: any
}

export function Alternative({
  alternative,
  correctAlternative,
  currentLetter,
  setCorrectQuestions,
  correctQuestions,
  currentQuestion,
  setCurrentQuestion,
}: AlternativeProps) {
  async function handleChoseAlternative() {
    if (alternative === correctAlternative) {
      setCorrectQuestions(
        correctQuestions.map((item, index) => {
          if (index === currentQuestion) {
            return true
          }

          return item
        }),
      )
    }

    if (alternative !== correctAlternative) {
      setCorrectQuestions(
        correctQuestions.map((item, index) => {
          if (index === currentQuestion) {
            return false
          }

          return item
        }),
      )
    }

    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <div
      onClick={handleChoseAlternative}
      className={`bg-green-600 hover:bg-green-400 w-11/12 rounded-2xl cursor-pointer p-5 flex items-center gap-4`}
    >
      <div className="py-2 px-3.5 border rounded-full">{currentLetter}</div>
      <div>{alternative}</div>
    </div>
  )
}
