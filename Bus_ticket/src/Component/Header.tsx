import Icon from '../icons/Icon'
import '../App.css'
import logo from '../assets/logo/Bus_Ticket_Header.png'
import vietnam from '../assets/languageimg/vietnam.png'
import my from '../assets/languageimg/my.png'
import { use, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { googleLogout } from '@react-oauth/google'

function Header() {
  const { t } = useTranslation()
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<'vi' | 'en'>('vi')

  const changeLanguage = (lang: 'vi' | 'en') => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  const [islanguageOpen, setIsLanguageOpen] = useState(false)
  const toggleLanguage = () => {
    setIsLanguageOpen(!islanguageOpen)
  }

  const LanguageSwitch = () => {
    return (
      <div className='flex   gap-2'>
        <div>
          <img
            src={`${language === 'vi' ? vietnam : my}`}
            className='w-5 h-5 rounded-full border border-gray-300'
            alt=''
          />
        </div>
        <div className='relative z-100   '>
          <button
            className=' cursor-pointer flex items-center gap-1 text-gray-700 hover:text-[#1ba000] transition-all duration-300'
            onClick={toggleLanguage}
          >
            {language === 'vi' ? 'Tiếng Việt' : 'English'}
            <Icon name={islanguageOpen ? 'up' : 'dow'} />
          </button>
          {islanguageOpen && (
            <div
              className='cursor-pointer  absolute top-full left-0 min-w-max bg-[#fff] shadow-lg rounded mt-1 '
              onClick={() => setIsLanguageOpen(false)}
            >
              <ul className='p-2  flex flex-col gap-2'>
                <div className='flex gap-2 ' onClick={() => changeLanguage('vi')}>
                  <img src={vietnam} alt='' className=' w-5 h-5 rounded-full border border-gray-300' />

                  <li
                    className='cursor-pointer hover:text-[#1ba000] transition-all duration-300'
                    onClick={() => changeLanguage('vi')}
                  >
                    Tiếng Việt
                  </li>
                </div>
                <div className='flex gap-2' onClick={() => changeLanguage('en')}>
                  <img src={my} alt='' className='w-5 h-5 rounded-full border border-gray-300' />

                  <li
                    className='cursor-pointer hover:text-[#1ba000] transition-all duration-300'
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </li>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
  const navbar = [
    { name: t('Header_NAV.Home'), path: '/', icon: 'home' },
    { name: t('Header_NAV.About'), path: '/about', icon: 'about' },
    { name: t('Header_NAV.Faqs'), path: '/faqs', icon: 'faqs' },
    { name: t('Header_NAV.Blog'), path: '/blog', icon: 'blog' },
    { name: t('Header_NAV.Contact'), path: '/contact', icon: 'contact' }
  ]
  const navbardashboard = [
    { name: 'Dashboard', path: '/user/dashboard', icon: 'home' },
    {
      name: 'Booking',
      path: '/user/buytickets',
      icon: 'ticket',
      sub: [
        { id: '1', name: 'Buy Ticket', path: '/user/buytickets ' },
        { id: '2', name: 'Booking History', path: 'user/booked-ticket/history' }
      ]
    },
    {
      name: 'Support Ticket',
      path: '/user/ticket',
      icon: 'support',
      sub: [
        { id: '1', name: 'Create New', path: '/user/ticket/new' },
        { id: '2', name: 'Tickets', path: '/user/ticket' }
      ]
    },
    {
      name: 'Profile',
      path: '/user/profile/profile-setting',
      icon: 'user',
      sub: [
        { id: '1', name: 'Profile', path: '/user/profile/profile-setting' },
        { id: '2', name: 'Change Password', path: '/user/change-password' }
      ]
    }
  ]

 

  const Buytikets = () => {
    return (
      <Link to='/buytickets' className='flex items-center gap-2'>
        <button className='bg-[#1ba000] text-[#fff] cursor-pointer p-2 rounded-[10px] hover:bg-[#1ba000]/70 transition-all duration-300 '>
          <span className='text-[13px]'>{t('Header_BUTTON.BuyTicket')}</span>
        </button>
      </Link>
    )
  }
  //click menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const [isverticalOpen, setIsverticalOpen] = useState(false)
  const togglevertical = () => {
    setIsverticalOpen(!isverticalOpen)
  }
  // kiểm tra người dùng đã đăng nhập hay chưa
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
  const user = JSON.parse(localStorage.getItem('userthongtin') || '{}')

  const Header = () => {
    return (
      <header className='  max-[1800px]:px-[10%] h-8 flex  px-[20%] max-[900px]:px-[1%] max-[900px]:w-full max-[900px]:justify-start max-[430px]:flex-col max-[350px]:items-start items-center  justify-between   p-2 gap-2 text-gray-700 text-[14px]'>
        <div className='flex      gap-3 max-[350px]:flex-col'>
          <div className='flex   gap-2'>
            <span className='text-[#1ba000]'>
              <Icon name='phone' />
            </span>
            <span>+84 972364028</span>
          </div>

          <div className='max-[350px]:hidden'>|</div>
          <div className='flex   gap-2'>
            <span className='text-[#1ba000]'>
              <Icon name='email' />
            </span>
            <span>nttanh0412@gmail.com</span>
          </div>
        </div>
        <div className='flex gap-5 max-[350px]:gap-3  max-[350px]:flex-col '>
          <div>
            <LanguageSwitch />
          </div>
          {userInfo && userInfo.email ? (
            <div className=' flex  '>
              <div className=' border-x-2  border-gray-400 px-3'>
                <span>xin chao: {user.name ? user.name : userInfo.name ? userInfo.name : '???'}</span>
              </div>
              <div className=' border-r-2 px-3 border-gray-400'>
                {location.pathname.startsWith('/user/') ? (
                  <Link to={'/'}>
                    <span>Home</span>
                  </Link>
                ) : (
                  <Link to={'/user/dashboard'}>
                    <span>Dashboard</span>
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className='flex gap-2'>
              <Link to={'/signin'}>
                <span className=''>
                  <i className='px-2 max-[350px]:px-0  text-[#1ba000]'>
                    <Icon name='signin' />
                  </i>
                  {t('Header_LOGIN.SingIn')}
                </span>
              </Link>

              <div className='px-3'>/</div>
              <Link to={'/signup'}>
                <span>
                  <i className='px-2 text-[#1ba000]'>
                    <Icon name='signup' />
                  </i>
                  {t('Header_LOGIN.SignUp')}
                </span>
              </Link>
            </div>
          )}
        </div>
      </header>
    )
  }

  const Nav = () => {
    return (
      <nav className='flex gap-5'>
        {userInfo && userInfo.email && location.pathname.startsWith('/user/')
          ? navbardashboard.map((item, index) => (
              <div key={index} className='relative group'>
                <Link
                  to={item.path}
                  className={`text-[16px] font-semibold hover:text-[#1ba000] transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-[#1ba000]'
                      : location.pathname.startsWith(item.path)
                        ? 'text-[#1ba000]'
                        : 'text-gray-700'
                  }`}
                >
                  <div className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded w-full'>
                    <span className='text-[#1ba000]'>
                      <Icon name={item.icon} />
                    </span>
                    <span>{item.name}</span>
                  </div>
                </Link>
                {item.sub && item.sub.length > 0 && (
                  <div className='absolute left-0 top-full  bg-[#ffffff] shadow-lg rounded mt-1   invisible  opacity-0 group-hover:opacity-100 transition duration-300 group-hover:visible '>
                    <ul className='  divide-y-1 divide-gray-300 flex flex-col gap-2 '>
                      {item.sub.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.path}
                            className={` min-w-max block  px-4 py-2 text-sm hover:bg-gray-100   ${
                              location.pathname === subItem.path ? 'text-[#1ba000]' : 'text-gray-700'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
          : navbar.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-[16px] font-semibold hover:text-[#1ba000] transition-all duration-300 ${
                  item.path === '/'
                    ? location.pathname === '/'
                      ? 'text-[#1ba000]'
                      : 'text-gray-700'
                    : location.pathname.startsWith(item.path)
                      ? 'text-[#1ba000]'
                      : 'text-gray-700'
                }`}
              >
                <div className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded w-full'>
                  <span className='text-[#1ba000]'>
                    <Icon name={item.icon} />
                  </span>
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
      </nav>
    )
  }

  return (
    <>
      <div className='max-[900px]:hidden bg-gray-200'>
        <Header />
      </div>

      <div className=' max-[1800px]:px-[5%]   max-[450px]:pr-10  px-[20%] sticky top-0 z-80 h-20 w-full   flex justify-between items-center bg-[#ffffff] shadow-md'>
        <Link to='/' className='flex  gap-2'>
          <img className=' max-[450px]:pl-0 max-[450px]:w-30 w-40 h-22 pl-10 pt-2 object-cover' src={logo} alt='' />
        </Link>
        <div className='max-[900px]:hidden '>
          <Nav />
        </div>
        <div className='flex gap-5 '>
          <div className='max-[450px]:hidden'>
            <Buytikets />
          </div>
          <div className='max-[900px]:flex hidden gap-2  '>
            <div className='   text-[24px] text-[#1ba000] cursor-pointer' onClick={toggleMenu}>
              <i>{isMenuOpen ? <Icon name='close' /> : <Icon name='menu' />}</i>
            </div>
            <div className='  text-[24px] text-[#1ba000] cursor-pointer' onClick={togglevertical}>
              <i>{isverticalOpen ? <Icon name='vertical' /> : <Icon name='vertical' />}</i>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div>
          <div
            className='fixed bg-black opacity-30 z-90 top-0 w-full h-full '
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className=' min-[900px]:hidden  fixed  top-0  items-start  w-full z-90 flex mt-1  '>
            <div
              className='relative flex bg-[#fff] shadow-lg  w-full  justify-between p-6 animate-slideDown'
              style={{ animation: 'slideDown 0.3s ease' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {navbar.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={` text-[16px]  font-semibold hover:text-[#1ba000] transition-all duration-300 ${
                      item.path === '/'
                        ? location.pathname === '/'
                          ? 'text-[#1ba000]'
                          : 'text-gray-700'
                        : location.pathname.startsWith(item.path)
                          ? 'text-[#1ba000]'
                          : 'text-gray-700'
                    }`}
                  >
                    <div className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded w-full'>
                      <span className='text-[#1ba000]'>
                        <Icon name={item.icon} />
                      </span>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <style>
              {`
              @keyframes slideDown {
                0% { transform: translateY(-100%); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
              }
            `}
            </style>
          </div>
        </div>
      )}

      {isverticalOpen && (
        <div>
          <div
            className='fixed  bg-black opacity-30 z-90 top-0 w-full h-full '
            onClick={() => setIsverticalOpen(false)}
          ></div>
          <div className=' min-[900px]:hidden  fixed  top-0  items-start  w-full z-90 flex mt-1  '>
            <div
              className='relative  flex bg-[#fff] shadow-lg  w-full  p-6  max-[430px]:pt-2 max-[430px]:pb-7 animate-slideDown'
              style={{ animation: 'slideDown 0.3s ease' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Header />
            </div>
            <style>
              {`
              @keyframes slideDown {
                0% { transform: translateY(-100%); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
              }
            `}
            </style>
          </div>
        </div>
      )}
    </>
  )
}
export default Header
