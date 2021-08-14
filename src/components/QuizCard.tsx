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
    marginBottom: 20
  },
  actionArea: {
    padding: 20
  }
})

export function QuizCard({ quiz, index }: QuizCard.Props): JSX.Element {
  const { handleSelectQuiz } = useDrawer()

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea
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
