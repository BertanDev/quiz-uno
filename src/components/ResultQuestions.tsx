interface ResultQuestionsProps {
  correctQuestions: null[]
}

export function ResultQuestions({ correctQuestions }: ResultQuestionsProps) {
  return (
    <div className="flex gap-2">
      {correctQuestions.map((question, index) => {
        return (
          <div
            key={index}
            className={`w-6 h-6 rounded-t-full  ${
              question === true
                ? 'bg-green-600'
                : question === null
                ? 'bg-gray-500'
                : question === false
                ? 'bg-red-500'
                : ''
            } `}
          ></div>
        )
      })}
    </div>
  )
}
