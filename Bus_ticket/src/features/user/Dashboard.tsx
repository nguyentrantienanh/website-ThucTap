import Icon from '../../icons/Icon'
import backgruond from '../../assets/background.jpg'
import { useState, useEffect } from 'react'
import { Booking } from './Page/Bookinghistory'
export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('userthongtin') || '{}')

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
  const ve = JSON.parse(localStorage.getItem('vedadat') || '[]')
  // hàm đếm
  const [countBooked, setCountBooked] = useState(0)
  const [countRejected, setCountRejected] = useState(0)
  const [countPending, setCountPending] = useState(0)

  useEffect(() => {
    const Booked = ve.filter((item: any) => item.status === 1).length
    const Rejected = ve.filter((item: any) => item.status === 2).length
    const Pending = ve.filter((item: any) => item.status === 3).length
    setCountBooked(Booked)
    setCountRejected(Rejected)
    setCountPending(Pending)
  })

  return (
    <>
      <div className='  bg-[#ececec]  '>
        <div
          className=' w-full h-50 flex items-center justify-center  '
          style={{ backgroundImage: `url(${backgruond})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='w-full h-full flex items-center justify-center bg-[#00000041]  '>
            <h1 className='text-3xl font-bold mb-4 text-[#fff]  '>Dashboard</h1>
          </div>
        </div>

        <div className=' flex justify-center py-4'>
          <p className='text-[20px] font-bold'>
            Welcome, {user.name ? user.name : userInfo.name ? userInfo.name : '???'}!
          </p>
        </div>
        <div className=' gap-5 flex justify-center py-5 '>
          <div className='flex justify-center  gap-3  '>
            <div className='border-l-4 border-[#6eff34] bg-[#fff] flex items-center p-5 gap-3 rounded-2xl '>
              <div>
                <h1 className='font-bold text-[15px]'>Total Booked Ticket</h1>
                <p className='font-bold text-[22px]'>{countBooked}</p>
              </div>
              <div>
                <i className='text-[40px] px-5 rounded-[20px] bg-[#72ff4b] text-[#ffffff]'>
                  {' '}
                  <Icon name='ticket' />
                </i>
              </div>
            </div>
          </div>
          <div className='flex justify-center  gap-3  '>
            <div className='border-l-4 border-[#ff3434] bg-[#fff] flex items-center p-5 gap-3 rounded-2xl '>
              <div>
                <h1 className='font-bold text-[15px]'>Total Rejected Ticket</h1>
                <p className='font-bold text-[22px]'>{countRejected}</p>
              </div>
              <div>
                <i className='text-[40px] px-5 rounded-[20px] bg-[#ff3434] text-[#ffffff]'>
                  {' '}
                  <Icon name='ticket' />
                </i>
              </div>
            </div>
          </div>
          <div className='flex justify-center  gap-3  '>
            <div className='border-l-4 border-[#efeb00] bg-[#fff] flex items-center p-5 gap-3 rounded-2xl '>
              <div>
                <h1 className='font-bold text-[15px]'>Total Pending Ticket</h1>
                <p className='font-bold text-[22px]'>{countPending}</p>
              </div>
              <div>
                <i className='text-[40px] px-5 rounded-[20px] bg-[#efeb00] text-[#ffffff]'>
                  {' '}
                  <Icon name='ticket' />
                </i>
              </div>
            </div>
          </div>
        </div>

        <Booking />
      </div>
    </>
  )
}
