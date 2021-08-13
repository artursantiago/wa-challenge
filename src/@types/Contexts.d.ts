declare namespace ThemeContext {
  type Theme = 'dark' | 'light'
  type Data = {
    theme: Theme
    setTheme: (theme: Theme) => void
  }
  type Props = {
    children: React.ReactNode
  }
}
declare namespace QuizContext {
  type Data = {
    quiz: QuizModule.Quiz
    loading: boolean
    handleStartQuiz: (amount: number) => void
    handleSubmitQuiz: (submittedQuestions: QuizModule.Question[]) => void
    resetQuiz: () => void
  }

  type Props = {
    children: React.ReactNode
  }
}
