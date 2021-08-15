/**
 * React & libs
 */
import React from 'react'
import { Box, CircularProgress, makeStyles } from '@material-ui/core'

/**
 * Config, core, components, utils, assets, styles
 */
import { useQuiz } from 'core/hooks'
import { Header, Score, QuizForm } from 'components'

const useStyles = makeStyles({
  quizContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 100,
    gap: 40
  },
  quiz: {
    flex: 1
  },
  score: {
    flexBasis: 320,
    margin: '0 auto'
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
          !!quiz.questions.length && (
            <>
              <Box className={classes.quiz}>
                <QuizForm />
              </Box>
              <Box className={classes.score}>
                <Score />
              </Box>
            </>
          )
        )}
      </Box>
    </>
  )
}
