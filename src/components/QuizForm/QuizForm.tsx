/**
 * React & libs
 */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { FieldArray, Form, Formik } from 'formik'
import { Box, Button } from '@material-ui/core'

/**
 * Config, core, components, utils, assets, styles
 */
import { useQuiz } from 'core/hooks'

import { Question } from 'components/Question'

import { validationSchema } from './formUtils'

export function QuizForm(): JSX.Element {
  const history = useHistory()

  const { questions, handleCancelQuiz, handleSubmitQuiz } = useQuiz()

  const handleCancelAndRedirectQuiz = (): void => {
    handleCancelQuiz()
    history.push('/')
  }

  const handleSubmit: Forms.Submit<Forms.Quiz> = async ({
    questions: submittedQuestions
  }) => {
    handleSubmitQuiz(submittedQuestions)
  }

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        style={{ gap: 20, marginBottom: 20 }}
      >
        <Formik
          initialValues={{ questions }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {({ values, handleChange, isValid }) => (
            <Form>
              <FieldArray name="questions">
                {() =>
                  values.questions.length > 0 &&
                  values.questions.map((question, index) => (
                    <Question
                      key={question.question}
                      index={index}
                      question={question}
                      handleChange={handleChange}
                    />
                  ))
                }
              </FieldArray>
              <Box display="flex" style={{ gap: 20 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleCancelAndRedirectQuiz}
                >
                  CANCEL
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!isValid}
                >
                  SUBMIT
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}
