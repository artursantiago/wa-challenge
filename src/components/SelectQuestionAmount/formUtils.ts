import * as Yup from 'yup'

type SelectQuestionAmountSchema = Yup.SchemaOf<Forms.Amount>

export const validationSchema: SelectQuestionAmountSchema = Yup.object().shape({
  amount: Yup.number()
    .required('Amount is required')
    .test(
      'greaterThanZero',
      'Amount must be greater than 0',
      (amount?: number) => !!amount && amount > 0
    )
})

export const initialValues: Forms.Amount = {
  amount: 1
}
