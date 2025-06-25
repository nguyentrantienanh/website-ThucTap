import Icon from '../../icons/Icon'
import backgruond from '../../assets/background.jpg'
import { useState, useEffect } from 'react'
export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('userthongtin') || '{}')

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')

  const ve = JSON.parse(localStorage.getItem('veDaDat') || '[]')
  console.log('ve', ve)

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
  //hàm xử lý trạng thái ghế id Status nếu status = 1 hoặc 2 hoạc 3
  const [status,setstatus] = useState( )
  const statusId = Status.filter((Status) => Status.id === status)
  useEffect(() => {
    if (ve.length > 0) {
      setstatus(ve[4].status) // Giả sử bạn muốn lấy trạng thái của vé đầu tiên
    }
  }, [ve])
 

  
  // click thông tin vé
  const [informationticket, setinformationticket] = useState(false)

  // thongtinve
  const thongtinve = JSON.parse(localStorage.getItem('thongtinve') || '{}')
  console.log(thongtinve)

  return (
    <>
      <div className='dashboard bg-[#ececec]'>
        <div
          className=' w-full h-50 flex items-center justify-center  '
          style={{ backgroundImage: `url(${backgruond})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='w-full h-full flex items-center justify-center bg-[#00000041]  '>
            <h1 className='text-4xl font-bold mb-4 text-[#fff]  '>Dashboard</h1>
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
                <h1 className='font-bold text-[20px]'>Total Booked Ticket</h1>
                <p className='font-bold text-[30px]'>0</p>
              </div>
              <div>
                <i className='text-[50px] px-5 rounded-[20px] bg-[#72ff4b] text-[#ffffff]'>
                  {' '}
                  <Icon name='ticket' />
                </i>
              </div>
            </div>
          </div>
          <div className='flex justify-center  gap-3  '>
            <div className='border-l-4 border-[#ff3434] bg-[#fff] flex items-center p-5 gap-3 rounded-2xl '>
              <div>
                <h1 className='font-bold text-[20px]'>Total Booked Ticket</h1>
                <p className='font-bold text-[30px]'>0</p>
              </div>
              <div>
                <i className='text-[50px] px-5 rounded-[20px] bg-[#ff3434] text-[#ffffff]'>
                  {' '}
                  <Icon name='ticket' />
                </i>
              </div>
            </div>
          </div>
          <div className='flex justify-center  gap-3  '>
            <div className='border-l-4 border-[#efeb00] bg-[#fff] flex items-center p-5 gap-3 rounded-2xl '>
              <div>
                <h1 className='font-bold text-[20px]'>Total Booked Ticket</h1>
                <p className='font-bold text-[30px]'>0</p>
              </div>
              <div>
                <i className='text-[50px] px-5 rounded-[20px] bg-[#efeb00] text-[#ffffff]'>
                  {' '}
                  <Icon name='ticket' />
                </i>
              </div>
            </div>
          </div>
        </div>

        <div className=' mx-20 py-10 '>
          <table className='min-w-full     bg-[#13c000]  rounded-t-2xl  '>
            <thead>
              <tr className='  text-[#fff] '>
                <th className='py-2 px-4   '>PNR Number</th>
                <th className='py-2 px-4  '>AC / Non-Ac</th>
                <th className='py-2 px-4 '>Starting Point</th>
                <th className='py-2 px-4 '>Dropping Point</th>
                <th className='py-2 px-4 '>Journey Date</th>
                <th className='py-2 px-4 '>Pickup Time</th>
                <th className='py-2 px-4 '>Booked Seats</th>
                <th className='py-2 px-4 '>Status</th>
                <th className='py-2 px-4 '>Fare</th>
                <th className='py-2 px-4 '>Action</th>
              </tr>
            </thead>

            <tbody>
              {ve.length >= 0 ? (
                ve.map((item: any, index: number) => (
                  <tr key={index} className='text-[#000] bg-[#fff]'>
                    <td className='py-2 px-4 text-[#4447ff]'>{item.ticketId}</td>
                    <td className='py-2 px-4 text-[#a7a7a7]'>{item.type}</td>
                    <td className='py-2 px-4 text-[#04b925]'>{item.diemDi}</td>
                    <td className='py-2 px-4 text-[#04b925]'>{item.diemDen}</td>
                    <td className='py-2 px-4 text-[#4c4c4c] font-medium'>{item.dateSart}</td>
                    <td className='py-2 px-4 text-[#7337ff] font-mono'>{item.status}</td>
                    <td className='py-2 px-4 text-[#04b925]'>{seats[index].join(',')}</td>

                    {statusId.map((Status) => (
                      <td className='py-2 px-4 '>
                        <span
                          className={`border-1 p-1 bg-[${Status.bg}] rounded-2xl text-[${Status.colors}] font-bold text-[10px]  `}
                        >
                          {Status.name} 
                        </span>{' '}
                      </td>
                    ))}

                    <td className='py-2 px-4 text-[#1645ff] text-nowrap'>
                      ${item.price} <span className=''>USD</span>
                    </td>
                    {/* thông tin vé */}
                     
                    <td className='py-2 px-4'>
                      <button
                        onClick={() => {
                          setinformationticket(true)
                          // lưu thông tin vé đã click + trạng thái hiện tại của vé vào thotinve
                          localStorage.setItem('thongtinve', JSON.stringify([ve[index]]))                     
                        }}
                        className=' cursor-pointer  bg-[#2800c91b] py-1 px-3 rounded'
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
                  <td colSpan={10} className='text-center py-4'>
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
          <div
            className='bg-black fixed top-0 z-90 opacity-30 h-full w-full '
            onClick={() => {
              setinformationticket(false)
            }}
          ></div>

          {/* hien khi click vaf thong tin ve */}
          
          <div className='fixed top-1/5  left-1/2 transform -translate-x-1/2   rounded  z-900'>
            {thongtinve.map((item: any) => 
           <div className='bg-[#fff] w-150 rounded-3xl py-4 flex flex-col gap-5 divide-y-2 divide-gray-200'>
              <div className='flex justify-between px-4 py-2  border-b-2  '>
                <h1>tiêu đề</h1>
                <span
                  onClick={() => {
                    setinformationticket(false)
                  }}
                >
                  {' '}
                  nút tắt{' '}
                </span>
              </div>
              <div className='flex justify-between px-4'>
                <h1 className='font-extrabold text-gray-700 text-[17px]'>Ngày: </h1>
                <p className='font-mono text-gray-600 text-[17px] '>{item.dateSart}</p>
              </div>
              <div className='flex justify-between px-4'>
                <h1 className='font-extrabold text-gray-700 text-[17px]'>mã vé</h1>
                <p className='font-mono text-gray-600 text-[17px] '>{item.ticketId}</p>
              </div>
              <div className='flex justify-between px-4'>
                <h1 className='font-extrabold text-gray-700 text-[17px]'>Tuyến đường</h1>
                <p className='font-mono text-gray-600 text-[17px] '>
                  {' '}
                  {item.diemDi} - {item.diemDen}
                </p>
              </div>
              <div className='flex justify-between px-4'>
                <h1 className='font-extrabold text-gray-700 text-[17px]'>Giá</h1>
                <p className='font-mono text-gray-600 text-[17px] '>{item.price} USD</p>
              </div>
              <div className='flex justify-between px-4'>
                <h1 className='font-extrabold text-gray-700 text-[17px]'>Trạng thái</h1>
                <p className='font-mono text-gray-600 text-[17px] '>
                  {statusId.map((Status) => (
                    <td className='py-2 px-4 '>
                      <span
                        className={`border-1 p-1 bg-[${Status.bg}] rounded-2xl text-[${Status.colors}] font-bold text-[10px]  `}
                      >
                        {Status.name} 
                      </span>{' '}
                    </td>
                  ))}
                </p>
              </div>

              <div className='pr-4'>
                <button
                  onClick={() => {
                    setinformationticket(false)
                  }}
                  className='  float-end bg-red-500 px-8 py-4 rounded-2xl'
                >
                  {' '}
                  xóa
                </button>
              </div>
            </div>
            )}
          </div>
        </div>
      )}
 
    </>
  )
}
