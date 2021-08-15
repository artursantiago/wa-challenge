/**
 * React & libs
 */
import React, { useRef } from 'react'
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core'
import { Close } from '@material-ui/icons'

/**
 * Config, core, components, utils, assets, styles
 */
import { useDrawer, useOutsideClick } from 'core/hooks'

import { QuizCard } from 'components'

const useStyles = makeStyles({
  header: {
    padding: 32
  },
  scrollContainer: {
    flex: '1 1',
    padding: '0 32px 32px 32px',
    overflowY: 'auto'
  }
})

export function QuizzesDrawer(): JSX.Element {
  const classes = useStyles()
  const { isOpen, setIsOpen, previousQuizzes } = useDrawer()

  const ref = useRef(null)

  const handleClickOutside = (): void => setIsOpen(false)
  useOutsideClick(ref, handleClickOutside)

  return (
    <Drawer
      variant="temporary"
      open={isOpen}
      anchor="right"
      PaperProps={{
        ref,
        style: {
          width: 520
        }
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setIsOpen((prev) => !prev)}
        className={classes.header}
      >
        <Typography variant="h4">Previous Quizzes</Typography>
        <IconButton>
          <Close />
        </IconButton>
      </Box>

      <Box className={classes.scrollContainer}>
        {!previousQuizzes.length && (
          <Typography variant="subtitle2" align="center">
            You haven&apos;t completed any quiz
          </Typography>
        )}

        {previousQuizzes.map((quiz, index) => (
          <QuizCard key={quiz.id} quiz={quiz} index={index} />
        ))}
      </Box>
    </Drawer>
  )
}
