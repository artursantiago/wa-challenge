import { useContext } from 'react'
import { DrawerContext } from 'core/contexts/DrawerContext'

export function useDrawer(): DrawerContext.Data {
  const context = useContext(DrawerContext)

  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider')
  }

  return context
}
