import '../globals.css'
import { Header, Footer, Sidebar } from '@/components/Layout'

export const metadata = {
  description: 'Dashboard',
  title: 'Dashboard',
}

export default function DashboardRootLayout({ children }) {
  return (
    <>
      <Sidebar children={children}></Sidebar>
    </>
  )
}
