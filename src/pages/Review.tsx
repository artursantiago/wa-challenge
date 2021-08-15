/**
 * React & libs
 */
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Box, CircularProgress, makeStyles } from '@material-ui/core'

/**
 * Config, core, components, utils, assets, styles
 */
import { RouteParams } from 'config/routes'
import { useQuiz } from 'core/hooks'

import { Header, Score, QuizReview } from 'components'

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

export function Review(): JSX.Element {
  const history = useHistory()
  const { id } = useParams<RouteParams>()

  const classes = useStyles()
  const { loading, quiz, getQuizFromStorage } = useQuiz()

  useEffect(() => {
    if (!id) {
      history.replace('/')
      return
    }
    getQuizFromStorage(id)
  }, [getQuizFromStorage, history, id])

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
                <QuizReview />
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
