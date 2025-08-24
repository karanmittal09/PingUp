import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { dummyUserData } from '../assets/assets'
import Loading from '../components/Loading'

const Layout = () => {
  const user = dummyUserData
  const [sidebarOpen, setSidebarOpen] = React.useState(true)

  if (!user) {
    // Loader always full screen centered
    return <Loading />
  }

  return (
    <div className="w-full flex h-screen relative">
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {sidebarOpen ? (
        <X
          className="absolute top-3 right-3 p-2 z-50 bg-white rounded-md shadow
          w-10 h-10 text-gray-600"
          onClick={() => setSidebarOpen(false)}
        />
      ) : (
        <Menu
          className="absolute top-3 right-3 p-2 z-50 bg-white rounded-md shadow
          w-10 h-10 text-gray-600 sm:hidden"
          onClick={() => setSidebarOpen(true)}
        />
      )}
    </div>
  )
}

export default Layout
