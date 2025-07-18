import logo from '../../assets/logo/Bus_Ticket_Header.png'
import background from '../../assets/auth/background-login.jpg'
import Icon from '../../icons/Icon'
import { useGoogleLogin } from '@react-oauth/google'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import FacebookLoginButton from '../../services/FacebookLoginButton'

export default function Signin() {
  const handleGoogleLogin = async () => {}

  const handleGoogleLoginError = () => {}

  const login = useGoogleLogin({
    onSuccess: handleGoogleLogin,
    onError: handleGoogleLoginError
  })

  // Hàm xử lý captcha
  const [captchaValue, setCaptchaValue] = useState(false)
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(!!value) // Chuyển đổi giá trị thành boolean
  }

  const handleFacebookLogin = (user: any) => {
    // Xử lý đăng nhập với Facebook
  }

  return (
    <div className=' flex   w-full  bg-[#fff] '>
      <div className='w-2/4   '>
        <img src={background} alt='Background' className='  items-start object-cover object-left w-full h-full  ' />
      </div>
      <div className='flex flex-col w-2/4 mx-10 gap-4 bg-[#fff]  '>
        <img src={logo} alt='Bus Ticket Logo' className='w-48 my-[-10px]  mx-auto  ' />
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
        <div className='flex items-center justify-center my-1'>
          <div className='flex-grow border-t border-dashed border-gray-400'></div>
          <span className='mx-2 text-gray-500 text-sm'>OR</span>
          <div className='flex-grow border-t border-dashed border-gray-400'></div>
        </div>
        <div>
          <form className='grid grid-cols-2 gap-4 my-4'>
            <div>
              <label htmlFor='firstname' className='block text-sm font-medium text-gray-700'>
                First Name<sup className='text-red-600'>*</sup>
              </label>
              <input
                type='firstname'
                id='firstname'
                className='mt-1   w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500 sm:text-sm'
              />
            </div>

            <div>
              <label htmlFor='lastname' className='block text-sm font-medium text-gray-700'>
                Last Name<sup className='text-red-600'>*</sup>
              </label>
              <input
                type='lastname'
                id='lastname'
                className='mt-1   w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500 sm:text-sm'
              />
            </div>

            <div className='col-span-2'>
              <label htmlFor='e-mailaddress' className='block text-sm font-medium text-gray-700'>
                E-Mail Address<sup className='text-red-600'>*</sup>
              </label>
              <input
                type='e-mailaddress'
                id='e-mailaddress'
                className='mt-1   w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500 sm:text-sm'
              />
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password<sup className='text-red-600'>*</sup>
              </label>
              <input
                type='password'
                id='password'
                className='mt-1   w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:shadow-green-300  focus:border-green-500 sm:text-sm'
              />
            </div>
            <div>
              <label htmlFor='confirmpassword' className='block text-sm font-medium text-gray-700'>
                Confirm Password<sup className='text-red-600'>*</sup>
              </label>
              <input
                type='confirmpassword'
                id='confirmpassword'
                className='mt-1   w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500 sm:text-sm'
              />
            </div>
          </form>

          <div className=' flex  '>
            <ReCAPTCHA
              sitekey='6LfaJl8rAAAAAJJD6pV-vSh9tV8gvUeEFU6B6B5k' // Thay bằng site key của bạn
              onChange={handleCaptchaChange}
            />
          </div>

          <div className='flex items-center mt-2'>
            <input type='checkbox' id='I agree with' />
            <label htmlFor='I agree with' className='ml-2 text-sm text-gray-700'>
              I agree with{' '}
              <a href='/viserbus/policy/privacy-policy' className='text-green-600 hover:underline'>
                privacy policy
              </a>
              ,{' '}
              <a href='viserbus/policy/terms-of-service' className='text-green-600 hover:underline'>
                Terms of Service
              </a>
              ,{' '}
              <a href='viserbus/policy/ticket-policy' className='text-green-600 hover:underline'>
                Ticket Policy
              </a>
              ,{' '}
              <a href='viserbus/policy/refund-policy' className='text-green-600 hover:underline'>
                Refund Policy
              </a>
            </label>
          </div>

          <button
            className={`bg-[#23ff52] h-10 w-full mt-2 ${captchaValue ? 'hover:bg-[#00ff37] cursor-pointer' : 'opacity-50 cursor-not-allowed'} text-black font-semibold rounded`}
            disabled={!captchaValue}
          >
            Đăng ký
          </button>
          <div>
            <p className='text-sm text-gray-500 mt-2 mb-20'>
              Don't have an account?{' '}
              <a href='/signin' className='text-blue-500 hover:underline'>
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
