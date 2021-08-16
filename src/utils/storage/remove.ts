import { PROJECT_NAME } from 'config'

export const removeFromStorage = (
  key: string,
  storage?: StorageModule.Type
): void => {
  if (!storage) {
    removeFromStorage(key, 'Local')
    removeFromStorage(key, 'Session')
    return
  }

  const store: Storage = storage === 'Local' ? localStorage : sessionStorage
  store.removeItem(`@${PROJECT_NAME}:${key}`)
}
