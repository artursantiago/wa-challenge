/**
 * React & libs
 */
import React, { useRef } from 'react'
import { Drawer, Typography } from '@material-ui/core'

/**
 * Config, core, components, utils, assets, styles
 */
import { useDrawer, useOutsideClick } from 'core/hooks'

import { QuizCard } from 'components'

export function QuizzesDrawer(): JSX.Element {
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
          width: 520,
          padding: 20
        }
      }}
    >
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        Previous Quizzes
      </Typography>

      {!previousQuizzes.length && (
        <Typography variant="subtitle1" style={{ textAlign: 'center' }}>
          You haven&apos;t completed any quiz
        </Typography>
      )}

      {previousQuizzes.map((quiz, index) => (
        <QuizCard key={quiz.id} quiz={quiz} index={index} />
      ))}
    </Drawer>
  )
}
