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

  store.setItem(`@wachallenge:${key}`, JSON.stringify(value))
}
