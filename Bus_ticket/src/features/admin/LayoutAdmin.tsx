import HeaderAdmin from '../admin/Component/HeaderAdmin'
import { Outlet, useLocation } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'

export default function LayoutAdmin() {
  const SollowHide = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    if (SollowHide.current) {
      SollowHide.current.scrollTop = 0
    }
  }, [location.pathname])
  const [isclick, setIsClick] = useState(false)

  return (
    <div className='flex h-screen'>
      <div>
        <HeaderAdmin />
      </div>

      <div
        ref={SollowHide}
        className={`overflow-y-auto w-full  ${isclick ? ' max-sm:opacity-0  ' : ' max-sm:opacity-100 '} transition-all duration-300 ease-in-out`}
      >
        <Outlet />
      </div>
    </div>
  )
}
