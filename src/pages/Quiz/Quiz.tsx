/**
 * React & libs
 */
import React from 'react'
import { Box } from '@material-ui/core'

import { useQuiz } from 'core/hooks'
import { Header, Question } from 'components'

export function Quiz(): JSX.Element {
  const { questions } = useQuiz()

  return (
    <>
      <Header />
      <div style={{ margin: 100, marginTop: 100 }}>
        <Box display="flex" flexDirection="column" style={{ gap: 20 }}>
          {questions.map((question) => (
            <Question key={question.question} question={question} />
          ))}
        </Box>
      </div>
    </>
  )
}
