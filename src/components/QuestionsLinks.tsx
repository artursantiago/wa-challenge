/**
 * React & libs
 */
import React from 'react'
import { Box, MenuItem, Select, Typography } from '@material-ui/core'

export function QuestionsLinks(): JSX.Element {
  const steps = new Array(4).fill(true).map((_, index) => index)
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ gap: 10 }}
    >
      <Typography>QUESTION</Typography>
      <Select variant="outlined">
        {steps.map((label) => (
          <MenuItem key={label} value={label}>
            {label + 1}
          </MenuItem>
        ))}
      </Select>
      <Typography> OF {steps.length}</Typography>
    </Box>
  )
}
