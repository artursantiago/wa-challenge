import { PROJECT_NAME } from 'config'

export const saveToStorage = <T>(
  key: string,
  value: T,
  storage?: StorageModule.Type
): void => {
  if (!storage) {
    saveToStorage(key, value, 'Local')
    return
  }

  const store: Storage = storage === 'Local' ? localStorage : sessionStorage

  store.setItem(`@${PROJECT_NAME}:${key}`, JSON.stringify(value))
}
