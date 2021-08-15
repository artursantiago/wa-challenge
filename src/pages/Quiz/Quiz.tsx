/**
 * React & libs
 */
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, CircularProgress, makeStyles } from '@material-ui/core'

import { useQuiz } from 'core/hooks'
import { Header, Score, QuizForm } from 'components'

const useStyles = makeStyles({
  quizContainer: {
    margin: 100,
    display: 'flex',
    gap: 40
  },
  spinner: {
    margin: '0 auto'
  }
})

export function Quiz(): JSX.Element {
  const history = useHistory()
  const classes = useStyles()
  const { loading, quiz } = useQuiz()

  useEffect(() => {
    if (!quiz.questions.length && !loading) {
      history.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, quiz.questions.length])

  return (
    <>
      <Header />
      <Box className={classes.quizContainer}>
        {loading ? (
          <CircularProgress className={classes.spinner} />
        ) : (
          quiz.questions?.length && (
            <>
              <QuizForm />
              <Score />
            </>
          )
        )}
      </Box>
    </>
  )
}
