/**
 * React & libs
 */
import React from 'react'
import {
  Button,
  FormGroup,
  FormLabel,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'

export function Home(): JSX.Element {
  return (
    <Paper style={{ margin: 100, marginTop: 100 }}>
      <FormGroup style={{ padding: 24 }}>
        <FormLabel htmlFor="amount">
          <Typography variant="h6" align="center" style={{ marginBottom: 24 }}>
            How many questions do you want to answer?
          </Typography>
        </FormLabel>
        <TextField
          id="amount"
          variant="filled"
          type="number"
          placeholder="Amount"
        />
        <Button variant="contained" type="submit" color="primary">
          Submit
        </Button>
      </FormGroup>
    </Paper>
  )
}
