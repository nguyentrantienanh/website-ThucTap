import HeaderAdmin from '../admin/Component/HeaderAdmin'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './Page/Administer/Dashboard'

export default function LayoutAdmin() {
  return (
    <div className='flex h-screen'>
      <div className=''>
        <HeaderAdmin />
      </div>

      <Outlet />
    </div>
  )
}
