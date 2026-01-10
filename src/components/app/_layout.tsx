import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import { Header } from '../shared/header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster />
    </div>
  )
}
