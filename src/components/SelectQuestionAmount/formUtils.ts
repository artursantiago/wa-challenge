import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  amount: yup.number().required('Amount is required')
})

export const initialValues: Forms.Amount = {
  amount: 1
}
