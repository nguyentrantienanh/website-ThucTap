import Icon from '../icons/Icon'
import '../App.css'
import logo from '../assets/logo/Bus_Ticket_Header.png'
import vietnam from '../assets/languageimg/vietnam.png'
import my from '../assets/languageimg/my.png'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const { t } = useTranslation()
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<'vi' | 'en'>('vi')

  const changeLanguage = (lang: 'vi' | 'en') => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
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
        <select value={language} onChange={() => changeLanguage(language === 'vi' ? 'en' : 'vi')}>
          <option value='vi'>Tiếng việt</option>
          <option value='en'>English</option>
        </select>
      </div>
    )
  }

  const navbar = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('faqs'), path: '/faqs' },
    { name: t('blog'), path: '/blog' },
    { name: t('contact'), path: '/contact' }
  ]

  const location = useLocation()

  const Buytikets = () => {
    return (
      <button className='bg-[#1ba000] text-[#fff] cursor-pointer p-2 rounded-[10px] hover:bg-[#1ba000]/70 transition-all duration-300 '>
        <span>Buy Tickets</span>
      </button>
    )
  }

  return (
    <>
      <header className='flex px-[20%] justify-between items-center h-7 gap-2 bg-gray-200 text-gray-700 text-[14px]'>
        <div className='flex items-center gap-2'>
          <span className='text-[#1ba000]'>
            <Icon name='phone' />
          </span>
          <span>+84 972364028</span>
          <div>|</div>
          <span className='text-[#1ba000]'>
            <Icon name='email' />
          </span>
          <span>nttanh0412@gmail.com</span>
        </div>
        <div className='flex gap-5  '>
          <div>
            <LanguageSwitch />
          </div>
          <div className='flex gap-2'>
            <span className=''>
              <i className='px-2 text-[#1ba000]'>
                <Icon name='signin' />
              </i>
              {t('signin')}
            </span>
            <div className='px-3'>/</div>
            <span>
              <i className='px-2 text-[#1ba000]'>
                <Icon name='signup' />
              </i>
              {t('signup')}
            </span>
          </div>
        </div>
      </header>
      <div className='px-[20%] sticky top-0 z-99 h-20 w-full   flex justify-between items-center bg-[#ffffff] shadow-md'>
        <Link to='/' className='flex items-center gap-2'>
          <img className=' w-50 h-22 pl-10 pt-2 object-cover' src={logo} alt='' />
        </Link>
        <div>
          <nav className='flex gap-5'>
            {navbar.map((item, index) => (
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
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <Buytikets />
        </div>
      </div>
    </>
  )
}
export default Header
