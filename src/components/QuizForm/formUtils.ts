import * as Yup from 'yup'

type QuizSchema = Yup.SchemaOf<{
  questions: QuizModule.Question[]
}>

export const validationSchema: QuizSchema = Yup.object()
  .shape({
    questions: Yup.array<QuizModule.Question[]>().test(
      'isAllQuestionAnswered',
      'All the questions must be answered',
      (questions?: QuizModule.Question[]) => {
        if (!questions) return false

        const notAnsweredQuestionIndex = questions?.findIndex(
          (question) => !question.selectedAnswer
        )
        return notAnsweredQuestionIndex === -1
      }
    )
  })
  .defined()
