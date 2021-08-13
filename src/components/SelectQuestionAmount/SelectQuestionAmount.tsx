import React, { useMemo } from 'react'
import { useFormik } from 'formik'
import { Button, FormLabel, TextField, Typography } from '@material-ui/core'

import { validationSchema, initialValues } from './formUtils'

export function SelectQuestionAmount({
  setAmount,
  setStep
}: SelectQuestionAmount.Props): JSX.Element {
  const formik = useFormik({
    onSubmit: ({ amount }) => {
      setAmount(amount)
      setStep(2)
    },
    initialValues,
    validationSchema
  })

  const { values, handleChange, errors, touched, handleSubmit } = formik

  const valid = useMemo((): boolean => {
    return formik.isValid && values.amount >= 1
  }, [formik, values])

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel htmlFor="amount">
        <Typography variant="h6" align="center" style={{ marginBottom: 24 }}>
          How many questions do you want to answer?
        </Typography>
      </FormLabel>
      <TextField
        fullWidth
        type="number"
        id="amount"
        name="amount"
        label="Amount"
        inputProps={{
          min: 1
        }}
        value={values.amount}
        onChange={handleChange}
        error={touched.amount && Boolean(errors.amount)}
        helperText={touched.amount && errors.amount}
      />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        disabled={!valid}
      >
        Submit
      </Button>
    </form>
  )
}
