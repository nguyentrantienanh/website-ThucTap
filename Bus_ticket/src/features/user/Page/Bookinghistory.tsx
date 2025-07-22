import Icon from '../../../icons/Icon'
import backgruond from '../../../assets/background.jpg'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
export function Booking() {
  const ve = JSON.parse(localStorage.getItem('vedadat') || '[]')
  const { t } = useTranslation('Home')

  const seats = ve
    .map((item: any) => item.seats)
    .map((item: any) => {
      return item.map((seat: any) => seat.name)
    })
  // hàm xử lý trạng thái ghế Total Booked Ticket, Total Rejected Ticket, Total Pending Ticket
  const Status = [
    { id: 1, name: 'Confirmed', colors: '#00d40e', bg: '#00ff2636' },
    { id: 2, name: 'Rejected', colors: '#f00', bg: '#ff000036' },
    { id: 3, name: 'Pending', colors: '#eeea00', bg: '#d5fb2b2d' }
  ]
  // click thông tin vé
  const [informationticket, setinformationticket] = useState(false)
  const isclick = () => {
    setinformationticket(!informationticket)
  }

  // thongtinve
  const thongtinve = JSON.parse(localStorage.getItem('thongtinve') || '{}')

  return (
    <>
      <div className='bg-[#fff] px-2 sm:px-4 md:px-10 py-6'>
        <div className='overflow-x-auto'>
          <table className='min-w-full text-sm md:text-[13px]'>
            <thead>
              <tr className='bg-[#1ba000] text-[#fff] text-nowrap'>
                <th className='py-2 px-2 text-left w-[60px]  '>ID</th>
                <th className='py-2 px-2 text-left hidden md:table-cell'>AC / Non-AC</th>
                <th className='py-2 px-2 text-left w-[120px]'>Start</th>
                <th className='py-2 px-2 text-left w-[120px]'>Drop</th>
                <th className='py-2 px-2 text-left w-[100px]'>Date</th>
                <th className='py-2 px-2 text-left w-[80px]'>Time</th>
                <th className='py-2 px-2 text-left w-[120px]'>Seats</th>
                <th className='py-2 px-2 text-left w-[100px]'>Status</th>
                <th className='py-2 px-2 text-left w-[100px] hidden md:table-cell'>Fare</th>
                <th className='py-2 px-2 text-center'>Info</th>
              </tr>
            </thead>

            <tbody>
              {ve.length > 0 ? (
                ve.map((item: any, index: number) => (
                  <tr key={index} className='bg-[#fff] text-gray-800 border-b text-nowrap'>
                    <td className='py-2 px-2 text-gray-500   '>{item.id}</td>
                    <td className='py-2 px-2 text-[#a7a7a7] hidden md:table-cell'>{item.type}</td>
                    <td className='py-2 px-2 text-[#04b925]'>{t(`${item.diemDen}`)}</td>
                    <td className='py-2 px-2 text-[#04b925]'>{t(`${item.diemDi}`)}</td>
                    <td className='py-2 px-2 text-[#4c4c4c] font-medium'>{item.dateStart}</td>
                    <td className='py-2 px-2 text-[#7337ff] font-mono'>{item.starttime}</td>
                    <td className='py-2 px-2 text-[#04b925] '>{seats[index].join(', ')} </td>
                    <td className='py-2 px-2'>
                      {Status.map(
                        (status) =>
                          item.status === status.id && (
                            <span
                              key={status.id}
                              className={`px-2 py-1 rounded-full text-[${status.colors}] bg-[${status.bg}] border text-xs`}
                            >
                              {status.name}
                            </span>
                          )
                      )}
                    </td>
                    <td className='py-2 px-2 text-[#1645ff] hidden md:table-cell'>
                      ${item.price} <span className='text-xs'>USD</span>
                    </td>
                    <td className='py-2 px-2 text-center'>
                      <button
                        onClick={() => {
                          setinformationticket(true)
                          localStorage.setItem('thongtinve', JSON.stringify([ve[index]]))
                        }}
                        className='bg-[#2800c91b] py-1 px-3 rounded'
                      >
                        <span className='text-[#0000006c]'>
                          <Icon name='about' />
                        </span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={11} className='text-center text-gray-500 bg-[#fff] py-4'>
                    No tickets booked yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {informationticket && (
        <div>
          <div className='bg-black fixed top-0 z-90 opacity-30 h-full w-full ' onClick={isclick}></div>

          <div
            className={` fixed top-1/9   left-1/2 transform -translate-x-1/2  rounded z-900
          
          
          `}
            style={{
              animation: informationticket ? 'slideDown 0.3s ease' : 'slideUp 0.3s ease'
            }}
          >
            {thongtinve.map((item: any) => (
              <div className='bg-[#fff] w-150 rounded-3xl py-4 flex flex-col gap-5 divide-y-2 divide-gray-200'>
                <div className='flex justify-between px-4 py-2  border-b-2  '>
                  <h1 className='font-extrabold text-gray-600 text-[17px]'>Ticket Booking History</h1>
                  <span onClick={isclick}>
                    <i className=' cursor-pointer'>
                      <Icon name='close' />
                    </i>
                  </span>
                </div>
                <div className='flex justify-between px-4'>
                  <h1 className='font-extrabold text-gray-400 text-[17px]'>Ngày: </h1>
                  <p className='font-mono text-gray-600 text-[17px] '>{item.dateStart}</p>
                </div>
                <div className='flex justify-between px-4'>
                  <h1 className='font-extrabold text-gray-400 text-[17px]'>mã vé</h1>
                  <p className='font-mono text-gray-600 text-[17px] '>{item.ticketId}</p>
                </div>
                <div className='flex justify-between px-4'>
                  <h1 className='font-extrabold text-gray-400 text-[17px]'>Tuyến đường</h1>
                  <p className='font-mono text-gray-600 text-[17px] '>
                    {' '}
                    {t(`Home:${item.diemDi}`)} - {t(`Home:${item.diemDen}`)}
                  </p>
                </div>
                <div className='flex justify-between px-4'>
                  <h1 className='font-extrabold text-gray-400 text-[17px]'>Giá</h1>
                  <p className='font-mono text-gray-600 text-[17px] '>{item.price} USD</p>
                </div>
                <div className='flex justify-between px-4'>
                  <h1 className='font-extrabold text-gray-400 text-[17px]'>Trạng thái</h1>
                  <p className='font-mono text-gray-600 text-[17px] '>
                    <td className='py-2 px-4 '>
                      {Status.map((status) => {
                        if (item.status === status.id) {
                          return (
                            <span
                              key={status.id}
                              className={`px-3 py-1 rounded-full text-[${status.colors}] bg-[${status.bg}] border-2`}
                            >
                              {status.name}
                            </span>
                          )
                        }
                        return
                      })}
                    </td>
                  </p>
                </div>

                <div className='pr-4'>
                  <button onClick={isclick} className='  float-end bg-red-500 px-8 py-4 rounded-2xl'>
                    {' '}
                    xóa
                  </button>
                </div>
              </div>
            ))}
          </div>
          <style>
            {`  
              @keyframes slideDown{
              0% {
              top: 0;
                transform: traslateY(-100%); opacity: 0; 
              }
                100% {
                  transform: traslateY(-100%); opacity: 1; 
                }
              }
                @keyframes slideUp{
                0% {
                  top: 0;
                  transform: translateY(0); opacity: 1; 
                }
                100% {
                  transform: translateY(-100%); opacity: 0;
              }
            `}
          </style>
        </div>
      )}
    </>
  )
}

export default function Bookinghistory() {
  return (
    <>
      <div
        className=' w-full h-50 flex items-center justify-center  '
        style={{ backgroundImage: `url(${backgruond})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000041]  '>
          <h1 className='text-4xl font-bold mb-4 text-[#fff]  '> Booking History</h1>
        </div>
      </div>
      <Booking />
    </>
  )
}
