import projectPackage from '../../package.json'

// APP
export const API_URL: string = Object.freeze(
  process.env.REACT_APP_API_URL ?? ''
)

export const PROJECT_NAME: string = Object.freeze(projectPackage.name)
