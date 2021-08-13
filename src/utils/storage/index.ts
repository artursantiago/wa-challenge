import { getFromStorage } from './get'
import { saveToStorage } from './save'
import { removeFromStorage } from './remove'

export const storage: StorageModule.State = {
  get: getFromStorage,
  save: saveToStorage,
  remove: removeFromStorage
}
