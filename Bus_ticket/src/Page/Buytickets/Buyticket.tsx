import { useParams } from 'react-router-dom'
import { ticket } from '../../Data/Ticket'
import { useLocation } from '../../Data/location'
import { useTranslation } from 'react-i18next'
import backgroundBuyticket from '../../Assets/background.jpg'
import { useState } from 'react'
import Icon from '../../icons/Icon'

import Alert from '@mui/material/Alert'

export default function Buyticket() {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('Home')
  const { diemDi, diemDen } = useLocation()

  // State để lưu trữ điểm đến và điểm đi đã chọn
  const [selectedDiemDen, setSelectedDiemDen] = useState('')
  const [selectedDiemDi, setSelectedDiemDi] = useState('')
  const [showDiemDenDropdown, setShowDiemDenDropdown] = useState(false)
  const [showDiemDiDropdown, setShowDiemDiDropdown] = useState(false)

  // State để lưu trữ giới tính đã chọn
  const [selectGender, setSelectGender] = useState<string | null>(null)
  const handleGenderChange = (gender: string) => {
    setSelectGender((prev) => (prev === gender ? null : gender))
  }

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

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      setSuccessMessage('Vui lòng chọn ít nhất một ghế để đặt vé.')
      severitys('warning')
      return
    }
    const seats = selectedSeats.map((seatId) => {
      const seat = ticket.find((item) => item.id === ticketId)?.seat?.find((s) => s.id === seatId)
      return {
        id: seatId,
        name: seat?.name,
        price: Number(seat?.price) || 0
      }
    })
    // lưu thông tin đặt vé
    const bookingDetails = {
      ticketId: ticketId,
      type: ticket.find((item) => item.id === ticketId)?.type,
      dateSart: new Date().toLocaleDateString(), // Ngày đặt vé
      diemDi: ticket.find((item) => item.id === ticketId)?.diemdi,
      diemDen: ticket.find((item) => item.id === ticketId)?.diemden,
      starttime: ticket.find((item) => item.id === ticketId)?.starttime,
      seats: seats,
      price: tongtien,
      status: 3
    }
    // Kiểm tra nếu ghế đã được đặt trước
    const stored = localStorage.getItem('veDaDat')
    let existing = []

    try {
      const parsed = stored ? JSON.parse(stored) : []
      existing = Array.isArray(parsed) ? parsed : []
    } catch (e) {
      console.error('Lỗi parse dữ liệu localStorage:', e)
      existing = []
    }
    // thêm vé mới vào danh sách đã đặt
    const updatedBookingDetails = [...existing, bookingDetails]

    // Lưu vào localStorage
    localStorage.setItem('veDaDat', JSON.stringify(updatedBookingDetails))

    // Hiển thị thông báo đặt vé thành công
    setSuccessMessage('Đặt vé thành công! Cảm ơn bạn đã đặt vé với chúng tôi.')
    severitys('success')

    setSelectedSeats([]) // Reset các ghế đã chọn

    setTimeout(() => {
      setSuccessMessage(null)
    }, 5000)
  }
  // Tính toán giá vé dựa trên id
  // const tien = ticket.find((item) => item.id === parseInt(id || ''))?.price || 0
  // const tongtien = Number(tien)
  // const totalPrice = selectedSeats.length * tongtien
  // Tính tổng tiền vé dựa trên số ghế đã chọn lấy price từng ghế + lại
  const tongtien = selectedSeats.reduce((sum, seatId) => {
    const seat = ticket.find((item) => item.id === parseInt(id || '0'))?.seat?.find((s) => s.id === seatId)
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
    const trip = ticket.find((item) => item.id === parseInt(id || '0'))

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
              // Kiểm tra xem ghế đã được đặt hay chưa
              const ticketData = localStorage.getItem('veDaDat')
              let isBooked = false
              if (ticketData) {
                try {
                  const bookings = JSON.parse(ticketData)
                  // Kiểm tra xem ghế có trong danh sách đặt vé không
                  isBooked = bookings.some((booking: any) =>
                    booking.seats.some((s: any) => s.id === seat.id && booking.ticketId === parseInt(id || '0'))
                  )
                } catch (error) {
                  console.error('Lỗi đọc dữ liệu ghế:', error)
                }
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
                   } `}
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
          {ticket
            .filter((item) => item.id === parseInt(id || '0'))
            .map((item) => {
              const name = `${item.type} - ${item.diemdi} - ${item.diemden}`
              return (
                <h1 key={item.id} className='text-4xl font-bold mb-4 text-[#fff]'>
                  {name}
                </h1>
              )
            })}
        </div>
      </div>
      <div className='flex gap-[2%]    px-[15%]'>
        <div className='w-4/7 border-1 rounded-[10px] border-gray-400 h-full sticky z-10  top-20 bg-[#fff] px-5 py-5  flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <div className='text-[12px] '>
              <h1 className='text-gray-400 font-medium'>Journey Date</h1>
              <div className='border-1  text-[13px] bg-[#fff]  border-[#8aff73] rounded-[10px] px-3 py-2 flex items-center gap-2'>
                <input type='date' className='w-full outline-none' />
              </div>
            </div>

            <div className='text-[12px] '>
              <h1 className=' text-gray-400 font-medium '>Pickup Point</h1>{' '}
              <div
                onClick={() => setShowDiemDiDropdown(!showDiemDiDropdown)}
                className=' bg-[#fff] w-full border-1 border-[#8aff73] rounded-[10px] px-2 py-1 flex items-center  '
              >
                <div className=' flex  justify-between relative w-full'>
                  <div
                    className='   cursor-pointer text-[13px] px-2 py-1 bg-[#fff] rounded'
                    onClick={() => setShowDiemDiDropdown(!showDiemDiDropdown)}
                  >
                    {selectedDiemDi || t('Home_location.All')}
                  </div>
                  {showDiemDiDropdown && (
                    <div className='absolute left-0 top-full mt-1 bg-[#fff] border rounded shadow z-10 divide-y-1 divide-gray-500 w-full'>
                      {diemDi.map((item) => (
                        <div
                          key={item.id}
                          className='px-3 py-1 hover:bg-[#e6ffe6]  cursor-pointer text-[14px]'
                          onClick={() => {
                            setSelectedDiemDi(item.name)
                            setShowDiemDiDropdown(false)
                          }}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  )}
                  <i className='text-[14px] text-gray-600' onClick={() => setShowDiemDiDropdown(!showDiemDiDropdown)}>
                    <Icon name={showDiemDiDropdown ? 'up' : 'dow'} />
                  </i>
                </div>
              </div>
            </div>

            <div className='text-[12px] '>
              <h1 className='text-gray-400 font-medium '>Dropping Point</h1>{' '}
              <div
                onClick={() => setShowDiemDenDropdown(!showDiemDenDropdown)}
                className='   bg-[#fff] w-full border-1 border-[#8aff73] rounded-[10px] px-2 py-1 flex items-center gap-2 '
              >
                <div className=' flex  justify-between relative w-full'>
                  <div
                    className='  cursor-pointer text-[13px] px-2 py-1 rounded'
                    onClick={() => setShowDiemDenDropdown(!showDiemDenDropdown)}
                  >
                    {selectedDiemDen || t('Home_location.All')}
                  </div>
                  {showDiemDenDropdown && (
                    <div className='absolute left-0 top-full mt-1 bg-[#fff] border rounded shadow z-10 divide-y-1 divide-gray-500 w-full'>
                      {diemDen.map((item) => (
                        <div
                          key={item.id}
                          className='px-3 py-1 hover:bg-[#e6ffe6]  cursor-pointer text-[14px]'
                          onClick={() => {
                            setSelectedDiemDen(item.name)
                            setShowDiemDenDropdown(false)
                          }}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  )}
                  <i className='text-[14px] text-gray-600' onClick={() => setShowDiemDenDropdown(!showDiemDenDropdown)}>
                    <Icon name={showDiemDenDropdown ? 'up' : 'dow'} />
                  </i>
                </div>
              </div>
            </div>

            <div className='text-[12px] text-gray-400 '>
              <h1 className='font-medium'>Select Gender</h1>
              <div className='flex py-3 justify-between'>
                {['Male', 'Female', 'Other'].map((gender) => (
                  <div key={gender} className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      id={gender}
                      checked={selectGender === gender}
                      onChange={() => handleGenderChange(gender)}
                    />
                    <label htmlFor={gender}>{gender}</label>
                  </div>
                ))}
              </div>
            </div>

            {selectedSeats.length > 0 && (
              <>
                <h1 className='text-[14px] text-gray-400 font-semibold'>Selected Seats:</h1>
                <div>
                  <div className='flex  text-[#fff] justify-between items-center bg-[#16a34a] border-1 border-[#16a34a] rounded-t-[6px] px-3 py-2'>
                    <p className='  font-semibold text-[12px]'>Seat Details</p>
                    <p className='  font-semibold text-[12px]'>Price</p>
                  </div>

                  {/* Danh sách ghế đã chọn */}
                  <div className='bg-[#fff]  '>
                    {selectedSeats.map((seatId) => {
                      const seat = ticket
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
                    <p className='text-[15px]'>Total</p>
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
                <span className='text-[13px] font-medium'>Đặt vé</span>
              </button>
            </div>
          </div>
        </div>
        <div className='grow h-full w-full gap-3 px-10'>
          <div>
            <h1 className='text-[15px] text-gray-500 font-medium'>Click on Seat to select or deselect</h1>
            {ticket
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
              <p className=' bg-gray-300 px-5   text-[12px] text-gray-500 '>Front</p>
            </div>
            <div>
              <div className='flex text-[16px] text-gray-600 justify-between items-center gap-2 px-5'>
                <h1 className=' font-medium'> seat</h1>
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
              <p className=' bg-gray-300 px-5 text-[12px] text-gray-500 '>Rear</p>
            </div>
          </div>

          {/* Hiển thị hướng dẫn ghế ngồi */}
          <div className='  h-full py-10'>
            <div className='grid grid-cols-2   gap-x-20 gap-y-5 '>
              <div className=' cursor-pointer flex w-full items-center gap-2'>
                <div className=' bg-[#fff] border-1 rounded-[3px]  h-5 w-15 p-1'>
                  <div className='border-1 border-gray-500 h-full w-1 rounded-3xl ml-auto'></div>
                </div>
                <p className='text-[12px] text-gray-500 whitespace-nowrap '>Available Seats</p>
              </div>
              <div className='cursor-pointer  flex w-full items-center gap-2'>
                <div className=' bg-[#008428]  rounded-[3px] h-5 w-15 p-1'>
                  <div className='bg-[#fff]  h-full w-1 rounded-3xl ml-auto'></div>
                </div>
                <p className='text-[12px] text-gray-500 whitespace-nowrap '>Selected by You</p>
              </div>

              <div className='cursor-pointer flex w-full items-center gap-2'>
                <div className=' bg-[#767676] rounded-[3px] h-5 w-15 p-1'>
                  <div className='bg-[#fff]  h-full w-1 rounded-3xl ml-auto'></div>
                </div>
                <p className='text-[12px] text-gray-500 whitespace-nowrap '>Booked by Others</p>
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
