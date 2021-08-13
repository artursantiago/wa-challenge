declare namespace Question {
  type Props = {
    question: QuizModule.Question
    showCorrection?: boolean
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
