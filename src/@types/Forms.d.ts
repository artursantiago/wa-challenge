declare namespace Forms {
  type Submit<Values> = (values: Values) => void | Promise<unknown>

  type Amount = {
    amount: number
  }

  type Quiz = {
    questions: QuizModule.Question[]
  }
}
