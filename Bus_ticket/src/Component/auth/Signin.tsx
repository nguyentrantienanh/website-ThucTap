import logo from '../../assets/logo/Bus_Ticket_Header.png'
import background from '../../assets/auth/background-login.jpg'
import Icon from '../../icons/Icon'
import { useGoogleLogin } from '@react-oauth/google'
import { useState, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import FacebookLoginButton from '../../services/FacebookLoginButton'
import axios from 'axios'

type UserInfo = {
  email: string
  firstname: string
  lastname: string
  googleId: string
  imageUrl: string
  name: string
}

export default function Signin() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  // Hàm xử lý đăng nhập thành công với Google
  const handleGoogleLogin = async (response: any) => {
    console.log('Google Login Success:', response)
    try {
      // Gọi API để lấy thông tin người dùng từ Google
      const userData = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`
      )
      const user: UserInfo = {
        email: userData.data.email,
        firstname: userData.data.family_name,
        lastname: userData.data.given_name,
        googleId: userData.data.sub,
        imageUrl: userData.data.picture,
        name: userData.data.name
      }
      setUserInfo(user)
      window.location.href = '/user/dashboard'
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  // Hàm xử lý đăng nhập thất bại với Google
  const handleGoogleLoginError = () => {
    console.error('Google Login Failed')
  }
  // Sử dụng hook useGoogleLogin để đăng nhập với Google
  const login = useGoogleLogin({
    onSuccess: handleGoogleLogin,
    onError: handleGoogleLoginError
  })

  // Hàm xử lý captcha
  const [captchaValue, setCaptchaValue] = useState(false)
  const handleCaptchaChange = (value: string | null) => {
    console.log('Captcha value:', value)
    setCaptchaValue(!!value) // Chuyển đổi giá trị thành boolean
  }

  const handleFacebookLogin = (user: any) => {
    console.log('Facebook Login Success:', user)
  }

  // luu thông tin người dùng vào localStorage
  useEffect(() => {
    if (userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  }, [userInfo])
  // lưu thông tin người dùng từ localStorage khi component được mount
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo')
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo))
    }
  }, [])

  return (
    <div className=' flex  w-full  bg-[#fff] '>
      <div className='w-2/4   '>
        <img src={background} alt='Background' className='  items-start object-cover object-left w-full h-full  ' />
      </div>

      <div className='flex flex-col w-2/4   mx-10  bg-[#fff]  '>
        <img src={logo} alt='Bus Ticket Logo' className='w-48   mx-auto  ' />
        {/* hiệu email người đăng nhập */}

        <div>
          <div className='gap-4 flex flex-col  '>
            <div
              onClick={() => login()}
              className='cursor-pointer flex items-center justify-center p-1 rounded-[10px] gap-2 border border-[#8b8b8b] w-full'
            >
              <i>
                <Icon name='google' />
              </i>
              <span className='text-[12px]'>Login With Google</span>
            </div>
            <FacebookLoginButton onLogin={handleFacebookLogin} />
            <div className='flex items-center justify-center p-1 rounded-[10px] gap-2 border-1 border-[#8b8b8b] w-full  '>
              <i>
                <Icon name='linkedin' />
              </i>
              <span className='text-[12px]'> Login With Google</span>
            </div>
          </div>
          <div className='flex items-center justify-center my-4'>
            <div className='flex-grow border-t border-dashed border-gray-400'></div>
            <span className='mx-2 text-gray-500 text-sm'>OR</span>
            <div className='flex-grow border-t border-dashed border-gray-400'></div>
          </div>
          <div>
            <form className='flex flex-col gap-4'>
              <div>
                <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                  Username<sup className='text-red-600'>*</sup>
                </label>
                <input
                  type='username'
                  id='username'
                  className='mt-1   w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500 sm:text-sm'
                  placeholder='Enter Your username'
                />
              </div>
              <div>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                  Password<sup className='text-red-600'>*</sup>
                </label>
                <input
                  type='password'
                  id='password'
                  className='mt-1   w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500 sm:text-sm'
                  placeholder='Enter Your password'
                />
              </div>
              <div className=' flex  '>
                <ReCAPTCHA
                  sitekey='6LfaJl8rAAAAAJJD6pV-vSh9tV8gvUeEFU6B6B5k' // Thay bằng site key của bạn
                  onChange={handleCaptchaChange}
                />
              </div>
              <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                  <input type='checkbox' id='rememberme' />
                  <label htmlFor='rememberme' className='ml-2 text-sm text-gray-700'>
                    Remember me
                  </label>
                </div>
                <div>
                  <p>Forgot Password?</p>
                </div>
              </div>

              <button
                className={`bg-[#23ff52] h-10 w-full mt-2 ${captchaValue ? 'hover:bg-[#00ff37] cursor-pointer' : 'opacity-50 cursor-not-allowed'} text-black font-semibold rounded`}
                disabled={!captchaValue}
              >
                Đăng nhập
              </button>

              <div>
                <p className='text-sm text-gray-500 mt-2 mb-20'>
                  Don't have an account?{' '}
                  <a href='/signup' className='text-blue-500 hover:underline'>
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
