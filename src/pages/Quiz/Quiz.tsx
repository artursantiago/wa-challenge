/**
 * React & libs
 */
import React from 'react'
import { Box, CircularProgress, makeStyles } from '@material-ui/core'

import { useQuiz } from 'core/hooks'
import { Header, QuizForm, Score } from 'components'

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
  const classes = useStyles()
  const { loading, quiz } = useQuiz()

  return (
    <>
      <Header />
      <Box className={classes.quizContainer}>
        {loading ? (
          <CircularProgress className={classes.spinner} />
        ) : (
          <>
            <QuizForm />
            {quiz.finishedAt && <Score />}
          </>
        )}
      </Box>
    </>
  )
}
