import * as Yup from 'yup'

type SelectQuestionAmountSchema = Yup.SchemaOf<Forms.Amount>

export const validationSchema: SelectQuestionAmountSchema = Yup.object().shape({
  amount: Yup.number().required('Amount is required')
})

export const initialValues: Forms.Amount = {
  amount: 1
}
