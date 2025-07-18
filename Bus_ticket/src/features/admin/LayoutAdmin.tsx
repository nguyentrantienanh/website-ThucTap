import HeaderAdmin from '../admin/Component/HeaderAdmin'
import { Outlet, useLocation } from 'react-router-dom'
import { useRef, useEffect, use } from 'react'

export default function LayoutAdmin() {
  const SollowHide = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    if (SollowHide.current) {
      SollowHide.current.scrollTop = 0
    }
  }, [location.pathname])

  return (
    <div className='flex h-screen'>
      <div>
        <HeaderAdmin />
      </div>

      <div ref={SollowHide} className='overflow-y-auto w-full'>
        <Outlet />
      </div>
    </div>
  )
}
