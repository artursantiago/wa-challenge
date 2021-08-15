/**
 * React & libs
 */
import React, { useState, useMemo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { Box, Button, makeStyles } from '@material-ui/core'

/**
 * Config, core, components, utils, assets, styles
 */
import { useQuiz } from 'core/hooks'

import { Question } from 'components/Question'

import { validationSchema } from './formUtils'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginBottom: 20
  }
})

export function QuizForm(): JSX.Element {
  const history = useHistory()
  const classes = useStyles()

  const { quiz, resetQuiz, handleSubmitQuiz, setQuiz } = useQuiz()

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const isLastQuestion = useMemo(() => {
    return currentQuestionIndex === quiz.questions.length - 1
  }, [currentQuestionIndex, quiz.questions.length])

  const handleCancelQuiz = (): void => {
    resetQuiz()
    history.push('/')
  }

  // Formik
  const { values, validateForm, handleChange, handleSubmit } = useFormik({
    initialValues: { questions: quiz.questions },
    validationSchema,
    onSubmit: ({ questions: submittedQuestions }) => {
      handleSubmitQuiz(submittedQuestions)
    }
  })

  useEffect(() => {
    // Validate form on mount
    validateForm()
  }, [validateForm])

  useEffect(() => {
    // Update context data when question is answered
    setQuiz((prev) => ({
      ...prev,
      questions: values.questions || []
    }))

    if (isLastQuestion) handleSubmit()
  }, [handleSubmit, isLastQuestion, setQuiz, values.questions])

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      {values.questions?.length > 0 &&
        values.questions?.map(
          (question, index) =>
            currentQuestionIndex === index && (
              <Box
                key={question.question}
                display="flex"
                flexDirection="column"
                style={{ gap: 20 }}
              >
                <Question
                  index={index}
                  question={question}
                  handleChange={handleChange}
                  showCorrection={!!question.selectedAnswer}
                />
                <Box display="flex" style={{ gap: 20 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCancelQuiz}
                  >
                    CANCEL
                  </Button>
                  {!isLastQuestion && (
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={!question.selectedAnswer}
                      onClick={() =>
                        setCurrentQuestionIndex((prev) => prev + 1)
                      }
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </Box>
            )
        )}
    </form>
  )
}
