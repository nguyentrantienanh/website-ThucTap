import { useParams } from 'react-router-dom'
import { ticket } from '../../Data/Ticket'
import { useTranslation } from 'react-i18next'
import backgroundBuyticket from '../../Assets/background.jpg'
import { useState, useEffect, useRef } from 'react'
import Icon from '../../icons/Icon'
import { Calendar } from 'react-date-range'
import { format } from 'date-fns'

import Alert from '@mui/material/Alert'

export default function Buyticket() {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation(['Home', 'Buyticket'])

  // dữ liệu vé đã đặt trong localStorage
 
  const UserList = JSON.parse(localStorage.getItem('userList') || '[]')
  const veData = UserList.map((user: any) => user.ticket).flat()

  const GuestUser = JSON.parse(localStorage.getItem('guestUserInfo') || '[]')
  const GuestUserTicket = GuestUser.map((user: any) => user.ticket).flat() 

  // hàm để gộp dữ liệu vé đã đặt của người dùng đã đăng nhập và khách
  const ve =  [...veData, ...GuestUserTicket]
  console.log('veData222', ve)
 
  // State để lưu trữ các ghế đã chọn
  const [selectedSeats, setSelectedSeats] = useState<number[]>([])
  // lưu vào localStorage
  const [ticketId] = useState<number>(parseInt(id || '0')) 
 
  // thông báo đăt vé thành công
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [severity, setSeverity] = useState<'success' | 'warning'>('success')
  const severitys = (type: 'success' | 'warning') => {
    setSeverity(type)
  }
  // hiện Ngày đã chọn trong localStorage calendar
  const [calendar, setCalendar] = useState(() => {
    const savedDate = localStorage.getItem('DayData')
    return savedDate ? savedDate : format(new Date(), 'dd/MM/yyyy')
  })
  const [open, setOpen] = useState(false)
  // Hàm này sẽ được gọi khi người dùng nhấn phím Esc
  const anKhiNhanESC = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false)
    }
  }
  const refCalendar = useRef<HTMLDivElement | null>(null)
  // Ẩn calendar khi click ra ngoài
  const anKhiNhanbenNgoai = (event: any) => {
    if (refCalendar.current && !refCalendar.current.contains(event.target)) {
      setOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', anKhiNhanbenNgoai, true)
    window.addEventListener('keydown', anKhiNhanESC)
  }, [])
  // lưu ngày đã chọn vào localStorage theo dạng chu "dd/MM/yyyy"
  useEffect(() => {
    localStorage.setItem('DayData', calendar)
  }, [calendar])
  // lưu ko mất dữ liệu khi reload trang
  useEffect(() => {
    const savedDate = localStorage.getItem('DayData')
    if (savedDate) {
      setCalendar(savedDate)
    }
  }, [])

  // kiểm tra đã đăng nhập hay chưa
  const isAuthenticated = localStorage.getItem('userInfo') !== null
const handleBooking = () => {
  if (selectedSeats.length === 0) {
    setSuccessMessage(t('Buyticket:please_select_seat'))
    severitys('warning')
    return
  }

  // Tạo danh sách ghế
  const seats = selectedSeats.map((seatId) => {
    const seat = ticket()
      .find((item) => item.id === ticketId)
      ?.seat?.find((s) => s.id === seatId)

    return {
      id: seatId,
      name: seat?.name,
      price: Number(seat?.price) || 0
    }
  })

  // Tạo vé
  const newId = Date.now()
  const bookingDetails = {
    id: newId,
    ticketId: ticketId,
    type: ticket().find((item) => item.id === ticketId)?.type,
    dateStart: calendar,
    diemDi: ticket().find((item) => item.id === ticketId)?.diemdi,
    diemDen: ticket().find((item) => item.id === ticketId)?.diemden,
    starttime: ticket().find((item) => item.id === ticketId)?.starttime,
    seats: seats,
    price: tongtien,
    status: 3,
    timestamp: new Date().toISOString()
  }

  // Thông báo
  setSuccessMessage(t('Buyticket:booking_success'))
  severitys('success')
  setSelectedSeats([])
  setTimeout(() => {
    setSuccessMessage(null)
  }, 5000)

  // ===============================
  // 🔐 XỬ LÝ KHI USER ĐÃ ĐĂNG NHẬP
  // ===============================
  const userInfoRaw = localStorage.getItem('userInfo')
  const userListRaw = localStorage.getItem('userList')

  if (userInfoRaw && userListRaw) {
    try {
      const userInfo = JSON.parse(userInfoRaw)
      const userList: any[] = JSON.parse(userListRaw)

      // ⚠️ Kiểm tra tồn tại user theo tên
      const userIndex = userList.findIndex(
        (user) => user.name?.toLowerCase() === userInfo.name?.toLowerCase()
      )

      if (userIndex !== -1) {
        if (!Array.isArray(userList[userIndex].ticket)) {
          userList[userIndex].ticket = []
        }

        userList[userIndex].ticket.push(bookingDetails)

        // Lưu lại localStorage
        localStorage.setItem('userList', JSON.stringify(userList))

        // ✅ Điều hướng đến trang thanh toán
        window.location.href = `/user/payment/${newId}`
        return
      } else {
        console.warn('🔍 Không tìm thấy người dùng tương ứng trong userList.')
      }
    } catch (error) {
      console.error('❌ Lỗi xử lý userList/userInfo:', error)
    }
  } else {
    console.warn('❌ userInfo hoặc userList không tồn tại trong localStorage.')
  }


  // ====================================
  // 🚫 NẾU KHÔNG ĐĂNG NHẬP (GUEST USER)
  // ====================================
  
const guestRaw = localStorage.getItem('guestUserInfo')
let guestList = []

if (guestRaw) {
  guestList = JSON.parse(guestRaw)
}
// Tạo ID tự động: id lớn nhất + 1, nếu chưa có ai thì là 1
const guestListnewId = guestList.length > 0
  ? Math.max(...guestList.map((guest: any) => guest.id || 0)) + 1
  : 1

// Tạo khách mới với vé hiện tại
const newGuest = {
  id: guestListnewId,
  fullName: '',
  phone: '',
  email: '',
  cccd: '',
  birthday: '',
  ticket: [bookingDetails] // mỗi người chỉ có 1 vé riêng biệt
}

// Thêm vào danh sách
guestList.push(newGuest)

// Cập nhật lại vào localStorage
localStorage.setItem('guestUserInfo', JSON.stringify(guestList))

// Điều hướng đến trang nhập thông tin của người vừa tạo
window.location.href = `/user/information-guest-user/${newId}/${guestListnewId}`
  }


  // Tính toán giá vé dựa trên id
  // const tien = ticket.find((item) => item.id === parseInt(id || ''))?.price || 0
  // const tongtien = Number(tien)
  // const totalPrice = selectedSeats.length * tongtien
  // Tính tổng tiền vé dựa trên số ghế đã chọn lấy price từng ghế + lại
  const tongtien = selectedSeats.reduce((sum, seatId) => {
    const seat = ticket()
      .find((item) => item.id === parseInt(id || '0'))
      ?.seat?.find((s) => s.id === seatId)
    const tienve = seat?.price || 0
    const tien = Number(tienve)
    return sum + tien // cộng dồn tiền vé của từng ghế
  }, 0)

  // Hàm xử lý khi người dùng click vào ghế
  const handleSeatClick = (seatId: number) => {
    setSelectedSeats((prev) => (prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]))
  }
  // Component hiển thị ghế ngồi
  const SeatSummary = () => {
    // Lấy thông tin chuyến đi dựa trên id
    const trip = ticket().find((item) => item.id === parseInt(id || '0'))

    const totalSeats = trip ? trip.seat?.length || 0 : 0
    // Tạo mảng ghế ngồi
    const seats = []
    // Lặp qua từng nhóm ghế (4 ghế một nhóm)
    for (let i = 1; i <= totalSeats; i += 4) {
      const group = trip?.seat?.slice(i - 1, i + 3) || []
      seats.push(
        <div key={i} className='justify-between items-center mb-2 px-2'>
          <div className='flex justify-between  py-1  items-center'>
            {group.map((seat) => {
              let isBooked = false
              if (ve ) {
                // kiểm tra nếu có dữ liệu vé đã đặt và isBooked sẽ là true nếu ghế đã được đặt
                isBooked =
                  ve.filter(
                    (booking: any) => booking.seats.some((s: any) => s.id === seat.id) && booking.dateStart === calendar
                  ).length > 0
              }

              return (
                <div
                  key={seat?.id}
                  onClick={() => {
                    if (!isBooked) handleSeatClick(seat.id) // Không cho click nếu đã đặt
                  }}
                  className={`  w-8 h-10 flex flex-col items-center justify-center  border-1 p-1 rounded  
                   ${
                     isBooked
                       ? 'bg-[#767676] text-[#fff]  cursor-no-drop'
                       : selectedSeats.includes(seat.id)
                         ? 'bg-[#009d05] text-[#fff] cursor-pointer'
                         : ' cursor-pointer bg-[#fff] text-[#000]'
                   }
                 
                   `}
                >
                  <span className='text-[14px]'>{seat?.name}</span>

                  <div className='bg-[#fff]  border-1  border-gray-500 h-1 w-6 rounded-full'></div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
    return <div>{seats}</div>
  }

  return (
    <>
      <div
        className='  w-full h-40 flex items-center justify-center mb-10 '
        style={{
          backgroundImage: `url(${backgroundBuyticket})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000068]  '>
          {ticket()
            .filter((item) => item.id === parseInt(id || '0'))
            .map((item: any) => {
              const diemdi = t(item.diemdi)
              const diemden = t(item.diemden)
              const name = `${item.type} - ${diemdi} - ${diemden}`
              return (
                <h1
                  key={item.id}
                  className='  font-bold mb-4 text-[#fff] text-center  text-[20px] sm:text-2xl lg:text-4xl'
                >
                  {name}
                </h1>
              )
            })}
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-5 px-5 py-5 bg-[#f9f9f9] xl:px-[20%]'>
        <div
          className={` w-full ${isAuthenticated ? 'md:w-4/5' : 'w-full'} ${isAuthenticated ? 'md:pr-4' : ''}  border-1 rounded-[10px] border-gray-400 h-full md:sticky z-10  top-20 bg-[#fff] px-5 py-5  flex flex-col gap-5`}
        >
          <div className='flex flex-col gap-3'>
            <div className='text-[12px] '>
              <h1 className='text-gray-400 font-medium'>{t('Buyticket:journey_date')}</h1>
              <div className='border-1  text-[13px] bg-[#fff]  border-[#8aff73] rounded-[10px] px-3 py-2 flex items-center gap-2'>
                <div ref={refCalendar}>
                  <input
                    className='focus:outline-none'
                    type=''
                    value={calendar}
                    readOnly
                    onClick={() => setOpen(!open)}
                  />

                  {open ? (
                    <div className={` absolute   w-full h-full z-100 `} ref={refCalendar}>
                      <Calendar
                        className='border-4  border-gray-300 rounded-lg shadow-xl'
                        // date = là ngày click vào
                        date={new Date(calendar.split('/').reverse().join('-'))}
                        minDate={new Date()}
                        maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
                        // không cần click mà chỉ cần chuyển ngày là được cập nhật
                        onChange={(date) => {
                          const formattedDate = format(date, 'dd/MM/yyyy')
                          setCalendar(formattedDate)
                          localStorage.setItem('DayData', formattedDate)
                        }}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>

            {ticket()
              .filter((item) => item.id === parseInt(id || '0'))
              .map((item: any) => {
                const diemdi = t(item.diemdi)
                return (
                  <div className='text-[12px] '>
                    <h1 className=' text-gray-400 font-medium '>{t('Buyticket:pickup_point')}</h1>
                    <div className=' bg-[#fff] w-full border-1 border-[#8aff73] rounded-[10px] px-2 py-1 flex items-center  '>
                      <div className=' flex  justify-between relative w-full'>
                        <div className='   cursor-pointer text-[13px] px-2 py-1 bg-[#fff] rounded'>{diemdi}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            {ticket()
              .filter((item) => item.id === parseInt(id || '0'))
              .map((item: any) => {
                const diemden = t(item.diemden)

                return (
                  <div className='text-[12px] '>
                    <h1 className=' text-gray-400 font-medium '>{t('Buyticket:dropoff_point')}</h1>
                    <div className=' bg-[#fff] w-full border-1 border-[#8aff73] rounded-[10px] px-2 py-1 flex items-center  '>
                      <div className=' flex  justify-between relative w-full'>
                        <div className='   cursor-pointer text-[13px] px-2 py-1 bg-[#fff] rounded'>{diemden}</div>
                      </div>
                    </div>
                  </div>
                )
              })}

            {selectedSeats.length > 0 && (
              <>
                <h1 className='text-[14px] text-gray-400 font-semibold'>{t('Buyticket:selected_seats')}</h1>
                <div>
                  <div className='flex  text-[#fff] justify-between items-center bg-[#16a34a] border-1 border-[#16a34a] rounded-t-[6px] px-3 py-2'>
                    <p className='  font-semibold text-[12px]'> {t('Buyticket:seat_details')}</p>
                    <p className='  font-semibold text-[12px]'>{t('Buyticket:price')}</p>
                  </div>

                  {/* Danh sách ghế đã chọn */}
                  <div className='bg-[#fff]  '>
                    {selectedSeats.map((seatId) => {
                      const seat = ticket()
                        .find((item) => item.id === parseInt(id || '0'))
                        ?.seat?.find((s) => s.id === seatId)
                      const tien = seat?.price || 0

                      return (
                        <>
                          <div className=' cursor-pointer flex justify-between border-t-1 border-x-1 border-gray-300 px-3 py-2 text-[14px]'>
                            <p className='text-[13px] font-semibold'>{seat?.name}</p>
                            <p className='text-[12px]'>{tien} USD</p>
                          </div>
                        </>
                      )
                    })}
                  </div>
                  <div className='flex justify-between bg-[#fff] border-1 border-gray-300 px-3 py-2 font-semibold'>
                    <p className='text-[15px]'>{t('Buyticket:total')}</p>
                    <p className='text-[13px]'>{tongtien} USD</p>
                  </div>
                </div>
              </>
            )}

            <div>
              <button
                onClick={handleBooking}
                className='cursor-pointer text-[#fff] bg-[#00a108] rounded-[7px] px-8 py-2 flex items-center  '
              >
                <span className='text-[13px] font-medium'>{t('Buyticket:book_ticket')}</span>
              </button>
            </div>
          </div>
        </div>
        <div className='grow h-full w-full gap-3 px-10'>
          <div>
            <h1 className='text-[15px] text-gray-500 font-medium'> {t('Buyticket:click_seat_guide')}</h1>
            {ticket()
              .filter((item) => item.id === parseInt(id || '0'))
              .map((item) => (
                <div key={item.id} className=' text-[14px] pb-5 pt-2'>
                  <p className='text-gray-600 text-[10px]'>
                    Off Days:
                    <span className='border-1 p-1 ml-1  rounded-[5px]  bg-[#5af52146] text-[#5af521]'>
                      {item.offday}
                    </span>
                  </p>
                </div>
              ))}
          </div>

          <div className='  border-1 border-gray-500 rounded-[10px] p-2'>
            <div className='flex justify-center mt-[-18px] items-center gap-2'>
              <p className=' bg-gray-300 px-5   text-[12px] text-gray-500 '>{t('Buyticket:front')}</p>
            </div>
            <div>
              <div className='flex text-[16px] text-gray-600 justify-between items-center gap-2 px-5'>
                <h1 className=' font-medium'>{t('Buyticket:seat')}</h1>
                <i className=''>
                  {' '}
                  <Icon name='seat' />
                </i>
              </div>
              <div className='  py-5 '>
                <SeatSummary />
              </div>
            </div>
            <div className='flex justify-center mb-[-17px] items-center gap-2'>
              <p className=' bg-gray-300 px-5 text-[12px] text-gray-500 '>{t('Buyticket:rear')}</p>
            </div>
          </div>

          {/* Hiển thị hướng dẫn ghế ngồi */}
          <div className='  h-full py-10'>
            <div className='grid grid-cols-2   gap-x-20 gap-y-5 '>
              <div className=' cursor-pointer flex w-full items-center gap-2'>
                <div className=' bg-[#fff] border-1 rounded-[3px]  h-5 w-15 p-1'>
                  <div className='md:border-1 border-gray-500 md:h-full md:w-1 rounded-3xl ml-auto'></div>
                </div>
                <p className='text-[12px] text-gray-500 whitespace-nowrap '>{t('Buyticket:available_seats')}</p>
              </div>
              <div className='cursor-pointer  flex w-full items-center gap-2'>
                <div className=' bg-[#008428]  rounded-[3px] h-5 w-15 p-1'>
                  <div className='bg-[#fff]  md:h-full md:w-2 rounded-3xl ml-auto'></div>
                </div>
                <p className='text-[12px] text-gray-500 whitespace-nowrap '>{t('Buyticket:selected_by_you')}</p>
              </div>

              <div className='cursor-pointer flex w-full items-center gap-2'>
                <div className=' bg-[#767676] rounded-[3px] h-5 w-15 p-1'>
                  <div className='bg-[#fff]  md:h-full md:w-1 rounded-3xl ml-auto'></div>
                </div>
                <p className='text-[12px] text-gray-500 whitespace-nowrap '>{t('Buyticket:booked_by_others')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* thông báo đặt vé thành công */}
      {successMessage && (
        <div className='fixed top-5  left-1/2 transform -translate-x-1/2   rounded  z-900'>
          <Alert severity={severity}>{successMessage}</Alert>
        </div>
      )}
    </>
  )
}
