import Background from '../../../assets/background.jpg'
import { useState } from 'react'

export default function Changepassword() {
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')

  const valuepassword = (e: any) => {
    setpassword(e.target.value)
  }
  const valueconfirmpassword = (e: any) => {
    setconfirmpassword(e.target.value)
  }

  const text = () => {
    return (
      password.trim() !== '' && confirmpassword.trim() !== ' ' && password.length >= 10 && password == confirmpassword
    )
  }

  return (
    <>
      <div
        className=' w-full h-50 flex items-center justify-center  '
        style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000068]  '>
          <h1 className='text-4xl font-bold mb-4 text-[#fff]  '>Change Password</h1>
        </div>
      </div>

      <div className='mx-100 my-10  '>
        <form action='' className=' rounded-2xl shadow-[0_5px_25px_rgba(0,0,0,0.25)] p-3 flex flex-col gap-8'>
          <div className='flex flex-col'>
            <label htmlFor=''>
              Current Password <sup className='text-red-600'>*</sup>
            </label>
            <input
              type='text'
              className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor=''>
              Password <sup className='text-red-600'>*</sup>
            </label>
            <input
              value={password}
              onChange={valuepassword}
              type='text'
              className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor=''>
              Confirm Password <sup className='text-red-600'>*</sup>
            </label>
            <input
              value={confirmpassword}
              onChange={valueconfirmpassword}
              type='text'
              className='p-2 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
            />
          </div>
          <button
            className={`bg-[#23ff52] h-10 w-full  text-black font-semibold rounded ${text() ? '' : 'opacity-50 cursor-not-allowed'} `}
          >
            {' '}
            xác nhận
          </button>
        </form>
      </div>
    </>
  )
}
