import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/logo/Bus_Ticket_Header.png'
import Icon from '../../../icons/Icon'
import { useState } from 'react'

const adminNav = [
  {
    id: 1,
    name: 'Quản trị',
    path: '/admin/dashboard',
    icon: 'dashboard',
    sub: [{ id: '1', name: 'Thống kê', path: '/admin/statistics' }]
  },
  { id: 2, name: 'Quản lý vé', path: '/admin/manage-tickets', icon: 'ticket' },
  {
    id: 3,
    name: 'Vé đã đặt',
    path: '/admin/booked-tickets',
    icon: 'check',
    sub: [
      { id: '1', name: 'Chờ duyệt', path: '/admin/booked-tickets/pending' },
      { id: '2', name: 'Đã duyệt', path: '/admin/booked-tickets/confirmed' },
      { id: '3', name: 'Bị từ chối', path: '/admin/booked-tickets/rejected' }
    ]
  },
  {
    id: 4,
    name: 'Tài khoản user',
    path: '/admin/users',
    icon: 'user',
    sub: [
      { id: '1', name: 'Hoạt động', path: '/admin/users/account-active' },
      { id: '2', name: 'Bị khóa', path: '/admin/users/account-locked' }
    ]
  },
  { id: 5, name: 'Hỗ trợ khách hàng', path: '/admin/support', icon: 'support' }
]

function HeaderAdmin() {
  const location = useLocation()
  const [openshow, setopenshow] = useState<number | null>(null)
  const [collapsed, setCollapsed] = useState(false)

  const handleToggle = (id: number) => {
    setopenshow(openshow === id ? null : id)
  }
  const handleTogglecollapsed = () => {
    setCollapsed(!collapsed)
    setopenshow(null)
  }

  return (
    <aside
      className={` h-screen top-0 left-0 bg-gray-100 flex flex-col justify-between  transition-all duration-300 ${collapsed ? 'w-20' : 'w-70'}`}
    >
      {/* Logo & Title */}
      <div>
        <div className='flex items-center justify-between p-4 border-b cursor-pointer'>
          <div className='flex items-center gap-2' onClick={() => setCollapsed(false)}>
            <img src={logo} alt='Logo' className='h-10 object-contain' />

            <span
              className={`transition-all duration-300 text-nowrap text-[#1ba000] text-xl font-bold overflow-hidden text-ellipsis inline-block ${
                collapsed ? 'max-w-[0px]' : 'max-w-[100px]'
              }`}
            >
              ADMIN
            </span>
          </div>
          {/* Nút mũi tên - click sẽ toggle thu gọn / mở rộng */}
          <button onClick={handleTogglecollapsed} className='text-gray-500 hover:text-gray-700'>
            <i className=' cursor-pointer'>{collapsed ? <Icon name='circle-right' /> : <Icon name='circle-left' />}</i>
          </button>
        </div>

        {/* Navigation */}
        <nav className='flex flex-col p-4 gap-1'>
          {adminNav.map((item) => (
            <div
              key={item.id}
              className='relative group'
              onClick={() => {
                handleToggle(item.id)
                setCollapsed(false)
              }}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-green-100 transition-all ${
                  location.pathname.startsWith(item.path) ? 'bg-green-200 text-[#1ba000]' : 'text-gray-700'
                }`}
              >
                <Icon name={item.icon} />
                <span
                  className={`transition-all duration-300 text-nowrap overflow-hidden text-ellipsis inline-block ${
                    collapsed ? 'max-w-[0px]' : 'max-w-full'
                  }`}
                >
                  {item.name}
                </span>

                <div className='  my-2 ml-auto'>
                  {!collapsed && item.sub && item.sub.length > 0 && (
                    <button
                      key={item.id}
                      className='  cursor-pointer text-gray-500 hover:text-gray-700'
                      onClick={() => handleToggle(item.id)}
                    >
                      <i className='  flex items-center justify-center w-6 h-6'>
                        {openshow === item.id ? (
                          <i className='pr-2'>
                            <Icon name='dow' />
                          </i>
                        ) : (
                          <i className='pr-2'>
                            <Icon name='up' />
                          </i>
                        )}
                      </i>
                    </button>
                  )}
                </div>
              </Link>

              {/* Submenu */}
              {item.sub && item.sub.length > 0 && (
                <div className=' '>
                  <div
                    className={` divide-dashed  divide-y-1 divide-gray-300 overflow-hidden transition-all duration-500 ease-in-outleft-0 w-full bg-[#fff] shadow-sm shadow-emerald-300 rounded mt-1  ${
                      openshow === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    {item.sub.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.path}
                        className={`block px-4 py-2 text-gray-700 hover:bg-green-100  ${
                          location.pathname === subItem.path ? 'bg-green-200 text-[#1ba000]' : ''
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className='p-4 border-t'>
        <Link
          to='/signin'
          className='flex items-center gap-2  text-red-500 hover:text-red-600'
          onClick={() => {
            localStorage.removeItem('adminInfo')
          }}
        >
          <Icon name='logout' />

          <span
            className={`transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis inline-block ${
              collapsed ? 'max-w-[0px]' : 'max-w-[100px]'
            }`}
          >
            Đăng xuất
          </span>
        </Link>
      </div>
    </aside>
  )
}

export default HeaderAdmin
