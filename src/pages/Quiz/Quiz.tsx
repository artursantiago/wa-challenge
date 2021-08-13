/**
 * React & libs
 */
import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'

import { useQuiz } from 'core/hooks'
import { Header, QuizForm, Score } from 'components'

export function Quiz(): JSX.Element {
  const { loading, quiz } = useQuiz()

  return (
    <>
      <Header />
      <Box display="flex" style={{ margin: 100, marginTop: 100 }}>
        {loading && <CircularProgress style={{ margin: '0 auto' }} />}

        {!loading && (quiz.finishedAt ? <Score /> : <QuizForm />)}
      </Box>
    </>
  )
}
