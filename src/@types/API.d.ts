declare namespace API {
  type QuestionResponse = {
    category: string
    type: QuizModule.Type
    difficulty: QuizModule.Difficulty
    question: string

    // When type equal to boolean, correctAnswer will be 'False' or 'True
    correct_answer: string
    incorrect_answers: string[]
  }

  type FetchQuestionsResponse = {
    response_code: number
    results: QuestionResponse[]
  }

  type FetchQuestionsProps = {
    amount: number
  }

  type FetchQuestions = (
    props: FetchQuestionsProps
  ) => Promise<FetchQuestionsResponse>
}
