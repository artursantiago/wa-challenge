declare namespace Question {
  type Props = {
    index: number
    question: QuizModule.Question
    showCorrection?: boolean
    handleChange: (
      event: React.ChangeEvent<HTMLInputElement>,
      value: string
    ) => void
  }
}
declare namespace SelectQuestionAmount {
  type Props = {
    setAmount: React.Dispatch<React.SetStateAction<number>>
    setStep: React.Dispatch<React.SetStateAction<number>>
  }
}

declare namespace StartQuiz {
  type Props = {
    amount: number
    setAmount: React.Dispatch<React.SetStateAction<number>>
    setStep: React.Dispatch<React.SetStateAction<number>>
  }
}

declare namespace QuizCard {
  type Props = {
    quiz: QuizModule.Quiz
    index: number
  }
}
