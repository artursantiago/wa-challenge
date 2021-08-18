/**
 * React & libs
 */
import React from 'react'
import {
  Box,
  Card,
  CardActionArea,
  makeStyles,
  Typography
} from '@material-ui/core'

/**
 * Config, core, components, utils, assets, styles
 */
import { useDrawer } from 'core/hooks'

import { percentage } from 'utils/masks'

const useStyles = makeStyles({
  root: {
    marginBottom: 20,
    height: 64
  },
  actionArea: {
    padding: 20
  }
})

export function QuizCard({ quiz, index }: QuizCard.Props): JSX.Element {
  const classes = useStyles()
  const { handleSelectQuiz } = useDrawer()

  return (
    <Card data-testid="quiz-card" className={classes.root}>
      <CardActionArea
        data-testid="quiz-card-action-area"
        className={classes.actionArea}
        onClick={() => handleSelectQuiz(quiz)}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography>Quiz {index + 1}</Typography>
          <Typography>Score: {percentage(quiz.score.percentage)}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  )
}
