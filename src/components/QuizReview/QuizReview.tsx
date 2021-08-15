/**
 * React & libs
 */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { FieldArray, Form, Formik } from 'formik'
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

export function QuizReview(): JSX.Element {
  const history = useHistory()
  const classes = useStyles()

  const { quiz, resetQuiz, handleSubmitQuiz } = useQuiz()

  const handleCancelQuiz = (): void => {
    resetQuiz()
    history.push('/')
  }

  const handleSubmit: Forms.Submit<Forms.Quiz> = async ({
    questions: submittedQuestions
  }) => {
    handleSubmitQuiz(submittedQuestions)
  }

  return (
    <Formik
      initialValues={{ questions: quiz.questions }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnMount
    >
      {({ values, handleChange, isValid }) => (
        <Form className={classes.form}>
          <FieldArray name="questions">
            {() =>
              values.questions?.length > 0 &&
              values.questions?.map((question, index) => (
                <Question
                  key={question.question}
                  index={index}
                  question={question}
                  handleChange={handleChange}
                  showCorrection={
                    !!quiz.finishedAt || !!question.selectedAnswer
                  }
                />
              ))
            }
          </FieldArray>
          {!quiz.finishedAt && (
            <Box display="flex" style={{ gap: 20 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancelQuiz}
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
          )}
        </Form>
      )}
    </Formik>
  )
}
