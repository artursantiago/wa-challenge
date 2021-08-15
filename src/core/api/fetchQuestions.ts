import { apiInstance } from 'core/api/config'

export const fetchQuestions: API.FetchQuestions = async ({ amount }) => {
  const endpoint = `api.php?amount=${amount}`

  try {
    const response = await apiInstance
      .get<API.FetchQuestionsResponse>(endpoint)
      .then(({ data }) => {
        return data
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    return response
  } catch (error) {
    return { data: null }
  }
}
