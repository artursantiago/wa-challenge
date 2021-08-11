/**
 * React & libs
 */
import React from 'react'
import { Box, Button } from '@material-ui/core'

import { QuestionsLinks, Question } from 'components'

export function Quiz(): JSX.Element {
  return (
    <div style={{ margin: 100, marginTop: 100 }}>
      <Box display="flex" justifyContent="center" style={{ gap: 20 }}>
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Start
        </Button>
      </Box>

      <QuestionsLinks />
      <Question
        question={{
          category: 'Animals',
          type: 'boolean',
          difficulty: 'hard',
          question: 'Which species of Brown Bear is not extinct?',
          correctAnswer: 'True',
          incorrectAnswers: ['False']
        }}
      />
    </div>
  )
}
