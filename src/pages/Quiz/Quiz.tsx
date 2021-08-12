/**
 * React & libs
 */
import React, { useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import { Box, Button, CircularProgress } from '@material-ui/core'

import { useQuiz } from 'core/hooks'
import { Header, Question } from 'components'

export function Quiz(): JSX.Element {
  const history = useHistory()

  const { questions, loading, handleCancelQuiz, handleSubmitQuiz } = useQuiz()

  const isAllAnsweredQuestion = useMemo(() => {
    return (
      questions.reduce((answeredQuestion, question) => {
        return question.selectedAnswer ? answeredQuestion + 1 : answeredQuestion
      }, 0) === questions.length
    )
  }, [questions])

  const handleCancelAndRedirectQuiz = (): void => {
    handleCancelQuiz()
    history.push('/')
  }

  return (
    <>
      <Header />
      <Box display="flex" style={{ margin: 100, marginTop: 100 }}>
        {loading ? (
          <CircularProgress style={{ margin: '0 auto' }} />
        ) : (
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              style={{ gap: 20, marginBottom: 20 }}
            >
              {questions.map((question) => (
                <Question key={question.question} question={question} />
              ))}
            </Box>
            <Box display="flex" style={{ gap: 20 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancelAndRedirectQuiz}
              >
                CANCEL
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={!isAllAnsweredQuestion}
                onClick={handleSubmitQuiz}
              >
                SUBMIT
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  )
}
