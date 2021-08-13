declare namespace StorageModule {
  type Type = 'Local' | 'Session'

  type GetFromStorage = <T>(key: string, storage?: Type) => T | null
  type RemoveFromStorage = (key: string, storage?: StorageModule.Type) => void
  type SaveToStorage = <T>(key: string, value: T, storage?: Type) => void

  type State = {
    get: GetFromStorage
    remove: RemoveFromStorage
    save: SaveToStorage
  }
}
