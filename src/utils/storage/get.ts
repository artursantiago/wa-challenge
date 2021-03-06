import { PROJECT_NAME } from 'config'

export const getFromStorage = <T>(
  key: string,
  storage?: StorageModule.Type
): T | null => {
  if (!storage) {
    return getFromStorage(key, 'Local') ?? getFromStorage(key, 'Session')
  }

  const store: Storage = storage === 'Local' ? localStorage : sessionStorage
  let item: unknown = null

  try {
    item = JSON.parse(store.getItem(`@${PROJECT_NAME}:${key}`) ?? 'null')
  } catch (e) {
    console.log(e)
  }

  return item as T
}
