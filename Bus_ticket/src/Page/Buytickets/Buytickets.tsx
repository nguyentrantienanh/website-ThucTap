import backgroundBuyticket from '../../assets/background.jpg'
import { useTranslation } from 'react-i18next'
import Icon from '../../icons/Icon'
import { useState, useEffect, useRef } from 'react'
import { ticket } from '../../Data/Ticket'
import { Link } from 'react-router-dom'
import { useLocation } from '../../Data/Location'
import vi from 'date-fns/locale/vi'
import { format } from 'date-fns'
import { parse, isAfter } from 'date-fns'
import { Calendar } from 'react-date-range'

function BuyticketLayout() {
  const dateFormat = format(new Date(), 'hh:mm aa')
  console.log(dateFormat)

  // Ví dụ sử dụng

  const { t } = useTranslation(['Buyticket', 'Home'])
  const { diemDi, diemDen } = useLocation()
  const Vehicle = [
    { id: 1, name: 'Bus' },
    { id: 2, name: 'Minibus' },
    { id: 3, name: 'AC' }
  ]
  const Routes = [
    { id: 1, diemDi: t('Home:Home_location.Ha Noi'), diemDen: t('Home:Home_location.Phu Quoc') },
    { id: 2, diemDi: t('Home:Home_location.Ha Noi'), diemDen: t('Home:Home_location.Da Nang') },
    { id: 3, diemDi: t('Home:Home_location.Da Lat'), diemDen: t('Home:Home_location.Nha Trang') }
  ]

  const Schedules = [
    { id: 1, starttime: '08:00 AM', endtime: '04:30 PM' },
    { id: 2, starttime: '09:00 AM', endtime: '05:30 PM' },
    { id: 3, starttime: '10:00 AM', endtime: '06:30 PM' }
  ]

  const [selectedDiemDen, setSelectedDiemDen] = useState('')
  const [selectedDiemDi, setSelectedDiemDi] = useState('')
  const [showDiemDenDropdown, setShowDiemDenDropdown] = useState(false)
  const [showDiemDiDropdown, setShowDiemDiDropdown] = useState(false)

  const handleSeach = (e: any) => {
    e.preventDefault()
    // lưu điểm đi và điểm đến vào localStorage và calendar c
    const searchData = {
      diemDi: selectedDiemDi,
      diemDen: selectedDiemDen,
      idDiemDi: diemDi.find((item) => item.name === selectedDiemDi)?.id,
      idDiemDen: diemDen.find((item) => item.name === selectedDiemDen)?.id
    }
    localStorage.setItem('searchData', JSON.stringify(searchData))
  }

  // hiện thị diem Di và diemDen từ localStorage thế vào selectDiemDi và selectDiemDen
  useEffect(() => {
    const searchData = JSON.parse(localStorage.getItem('searchData') || '{}')
    if (searchData.diemDi) {
      setSelectedDiemDi(searchData.diemDi)
    }
    if (searchData.diemDen) {
      setSelectedDiemDen(searchData.diemDen)
    }
  }, [])
  const [filterData, setFilterData] = useState<{ [key: string]: boolean }>({})
  //checkbox filter và lưu vào localStorage
  const handleChange = (event: any) => {
    const { name, checked } = event.target
    const filterData = JSON.parse(localStorage.getItem('filterData') || '{}')
    if (checked) {
      filterData[name] = true
    } else {
      delete filterData[name]
    }
    localStorage.setItem('filterData', JSON.stringify(filterData))
    setFilterData(filterData)
  }

  useEffect(() => {
    // Lấy dữ liệu từ localStorage khi component được mount
    const filterData = JSON.parse(localStorage.getItem('filterData') || '{}')

    // Set trạng thái checkbox dựa trên dữ liệu từ localStorage
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox: any) => {
      checkbox.checked = filterData[checkbox.name] || false
    })
  }, [])

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

  // Lọc ticket dựa trên điểm đi và điểm đến đã chọn
  const filteredTickets = ticket().filter((item: any) => {
    const idDiemDi = diemDi.find((d) => d.name === selectedDiemDi)?.id || 0
    const idDiemDen = diemDen.find((d) => d.name === selectedDiemDen)?.id || 0
    const diemDiMatch = idDiemDi === 0 || t(`Home:${item.diemdi}`) === selectedDiemDi
    const diemDenMatch = idDiemDen === 0 || t(`Home:${item.diemden}`) === selectedDiemDen

    // lọc theo filter Vehicle xét name của item.type với localStorage
    const filterData: { [key: string]: boolean } = JSON.parse(localStorage.getItem('filterData') || '{}')

    // lọc vehicle
    const hasVehicleFilter = Object.keys(filterData).some((key) => !key.includes(' - '))
    const vehicleMatch = hasVehicleFilter ? filterData[item.type] : true
    // lọc route

    const routeKeys = Object.keys(filterData).filter((key) => key.includes('route_'))
    const routeMatch =
      routeKeys.length === 0 ||
      routeKeys.some((key) => {
        const route = key.replace('route_', '')
        const [filterDiemdi, filterDiemDen] = route.split(' - ').map((s) => s.trim().toLowerCase())
        const itemDiemdi = t(`Home:${item.diemdi}`)?.trim().toLowerCase()
        const itemDiemDen = t(`Home:${item.diemden}`)?.trim().toLowerCase()

        console.log('tesst', itemDiemdi, itemDiemDen)
        console.log(filterDiemdi, filterDiemDen)
        return itemDiemdi === filterDiemdi && itemDiemDen === filterDiemDen
      })
    // lọc Schedules
    const schedulesKeys = Object.keys(filterData).filter((key) => key.includes('schedule_'))
    const schedulesMatch =
      schedulesKeys.length === 0 ||
      schedulesKeys.some((key) => {
        const timeRange = key.replace('schedule_', '')
        const [startTime, endTime] = timeRange.split(' - ').map((s) => s.trim().toLowerCase())
        const itemStartTime = item.starttime?.trim().toLowerCase()
        const itemEndTime = item.endtime?.trim().toLowerCase()
        return itemStartTime === startTime && itemEndTime === endTime
      })

    const compareTimeWithDate = (starttime: string, selectedDate: string): boolean => {
      const selected = parse(selectedDate, 'dd/MM/yyyy', new Date())
      const today = new Date()

      // Nếu ngày trong quá khứ thì ẩn vé
      if (selected < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
        return false
      }

      // Nếu là ngày hôm nay thì so sánh giờ
      const isToday =
        selected.getDate() === today.getDate() &&
        selected.getMonth() === today.getMonth() &&
        selected.getFullYear() === today.getFullYear()

      // hiện thị vé nếu giờ hiện tại nhỏ hơn giờ bắt đầu của vé
      if (isToday) {
        // nuế isToday là true thì so sánh giờ
        const now = new Date()
        const timeToCompare = parse(starttime, 'hh:mm a', new Date())
        timeToCompare.setFullYear(today.getFullYear())
        timeToCompare.setMonth(today.getMonth())
        timeToCompare.setDate(today.getDate())

        return isAfter(timeToCompare, now)
      }

      // Nếu ngày trong tương lai thì luôn hiển thị
      return true
    }

    return (
      diemDiMatch &&
      diemDenMatch &&
      vehicleMatch &&
      routeMatch &&
      schedulesMatch &&
      compareTimeWithDate(item.starttime, calendar)
    )
  })

  return (
    <>
      <div className='bg-[#dedede]'>
        <div className='relative'>
          <div
            className=' w-full h-50 flex items-center justify-center'
            style={{
              backgroundImage: `url(${backgroundBuyticket})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className='w-full h-full flex items-center justify-center bg-[#00000068]'></div>
          </div>
        </div>

        <div className='flex  h-full gap-[2%]  content-start px-[10%] py-5 '>
          <div className='  w-250 absolute mt-[-170px] rounded-t-[20px] border-b-1  bg-[#fff]  h-37'>
            {/* nút reset */}
            <div className='absolute  p-2 pl-2  flex items-center gap-2 cursor-pointer hover:text-[#1ba000] transition-all duration-300'>
              <button
                onClick={() => {
                  setSelectedDiemDi('')
                  setSelectedDiemDen('')
                  setShowDiemDiDropdown(false)
                  setShowDiemDenDropdown(false)
                  localStorage.removeItem('searchData')
                }}
                className=' cursor-pointer text-[12px] text-[#5c5b5b]'
              >
                {t('Buyticket:reset')}
              </button>
            </div>

            <div className=' py-10 item-  my-2 px-2 grid grid-cols-4 gap-4 max-[450px]:flex-col  '>
              <div
                onClick={() => setShowDiemDiDropdown(!showDiemDiDropdown)}
                className='  w-full border-1 border-[#8aff73] rounded-[10px] px-2 py-1 flex items-center gap-2'
              >
                <i className='text-[#70ff53]'>
                  <Icon name='directionarrow' />
                </i>
                <div className=' flex  justify-between relative w-full'>
                  <div
                    className='cursor-pointer text-[13px] px-2 py-1 bg-[#fff] rounded'
                    onClick={() => setShowDiemDiDropdown(!showDiemDiDropdown)}
                  >
                    {selectedDiemDi || t('Home:Home_location.All')}
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

              <div
                onClick={() => setShowDiemDenDropdown(!showDiemDenDropdown)}
                className=' border-1 border-[#8aff73] rounded-[10px] px-2 py-1 flex items-center gap-2 relative'
              >
                <i className='text-[#66ff47]'>
                  <Icon name='location' />
                </i>

                <div className='relative w-full flex justify-between'>
                  <div
                    className=' text-[13px]  cursor-pointer px-2 py-1 bg-[#fff] rounded'
                    onClick={() => setShowDiemDenDropdown(!showDiemDenDropdown)}
                  >
                    {selectedDiemDen || t('Home:Home_location.All')}
                  </div>
                  {showDiemDenDropdown && (
                    <div className='absolute left-0 top-full mt-1 bg-[#fff] border rounded shadow z-10 divide-y-1 divide-gray-500  w-full'>
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
              <div className='border-1 text-[13px] border-[#8aff73] rounded-[10px] px-2 py-1 flex items-center gap-2'>
                <i className='text-[#66ff47]'>
                  <Icon name='calendar' />
                </i>
                <div className='relative w-full'>
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
              <button
                onClick={handleSeach}
                className=' w-full bg-[#1ba000] text-[#fff] cursor-pointer p-2 rounded-[10px] hover:bg-[#1ba000]/70 transition-all duration-300   h-10 justify-self-center  '
              >
                <span>{t('find_ticket')}</span>
              </button>
            </div>
          </div>
          {/* Filter */}
          <div className='w-1/4 rounded-[10px] bg-[#fff] sticky z-10  top-23   h-full'>
            <div className='flex justify-between border-b-1  p-2'>
              <h1 className='text-[20px] mt-auto font-medium'>{t('Buyticket:filter')}</h1>
              <p
                className='text-[12px]  mt-auto text-[#5c5b5b] cursor-pointer hover:text-[#1ba000] transition-all duration-300'
                onClick={() => {
                  setFilterData({})
                  localStorage.removeItem('filterData')
                  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox: any) => {
                    checkbox.checked = false
                  })
                }}
              >
                {t('filter_reset_all')}
              </p>
            </div>
            <div className='  p-2'>
              <h1 className='text-[15px] font-semibold'>{t('Buyticket:filter_vehicle')}</h1>
              <div className='flex flex-col gap-3 p-2'>
                {Vehicle.map((vehicle) => (
                  <div className='flex items-center text-[12px]' key={vehicle.id}>
                    <input type='checkbox' onChange={handleChange} name={vehicle.name} />
                    <div className='bg-[#f7f7f7] px-2 py-1 rounded-[10px] flex items-center gap-2'>
                      <i>
                        <Icon name='bus' />
                      </i>
                      <label className='' htmlFor={vehicle.name}>
                        {vehicle.name}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='p-2'>
              <h1 className='text-[15px] mt-auto font-medium'>{t('Buyticket:filter_routes')}</h1>
              <div className='flex flex-col gap-3 p-2'>
                {Routes.map((route) => {
                  const routeKey = `route_${route.diemDi} - ${route.diemDen}`
                  return (
                    <div className='flex items-center text-[12px]' key={route.id}>
                      <input
                        type='checkbox'
                        onChange={handleChange}
                        name={routeKey}
                        checked={filterData[routeKey] || false}
                      />

                      <div className='bg-[#f7f7f7] px-2 py-1 rounded-[10px] flex items-center gap-2'>
                        <i>
                          <Icon name='road' />
                        </i>
                        <label htmlFor={`${route.diemDi} - ${route.diemDen}`}>
                          {route.diemDi} - {route.diemDen}
                        </label>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='p-2'>
              <h1 className='text-[15px] mt-auto font-medium'>{t('Buyticket:filter_schedules')}</h1>
              <div className='flex flex-col gap-3 p-2'>
                {Schedules.map((shedule) => {
                  const scheduleKey = `schedule_${shedule.starttime} - ${shedule.endtime}`
                  return (
                    <div className='flex items-center text-[12px]' key={shedule.id}>
                      <input
                        type='checkbox'
                        onChange={handleChange}
                        name={scheduleKey}
                        checked={filterData[scheduleKey] || false}
                      />
                      <div className='bg-[#f7f7f7] px-2 py-1 rounded-[10px] flex items-center gap-2'>
                        <i>
                          <Icon name='clock' />
                        </i>
                        <label className='text-nowrap' htmlFor={`${shedule.starttime} - ${shedule.endtime}`}>
                          {shedule.starttime} - {shedule.endtime}
                        </label>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div></div>
          </div>
          {/* ticket */}
          {filteredTickets.length > 0 ? (
            <div className=' h-full'>
              {filteredTickets.map((item: any) => {
                const diemdi = t(`Home:${item.diemdi}`)
                const diemden = t(`Home:${item.diemden}`)
                const name = `${item.type} -  ${diemdi} - ${diemden}`
                return (
                  <div key={item.id} className='mb-4 rounded-t-[10px] bg-[#fff]'>
                    <div className='flex items-center py-5 px-2'>
                      <div className='rounded-t-3xl gap-2 pr-10 flex flex-col w-90 justify-center items-start'>
                        <h1 className='text-[20px] font-semibold line-clamp-1 text-ellipsis'>{name}</h1>
                        <p className='text-[10px] text-gray-500'>Seat Layout - {item.seatLayout}</p>
                        <p className='text-amber-300 text-[15px] flex items-center gap-2'>
                          <Icon name='bus' /> <span>{item.type}</span>
                        </p>
                      </div>
                      <div className='text-[15px] px-5 flex items-center justify-center gap-5'>
                        <div>
                          <p className='text-nowrap'>{item.starttime}</p>
                          <p className='text-[10px] text-gray-500'>{t(`Home:${item.startingpoint}`)}</p>
                        </div>
                        <div className='flex   flex-col items-center justify-center gap-2'>
                          <i className='text-[#5af521]'>
                            <Icon name='arrow-right' />
                          </i>
                          <span className='text-gray-500 text-nowrap'>{item.timetogo}</span>
                        </div>
                        <div>
                          <p className='text-nowrap'>{item.endtime}</p>
                          <p className='text-[10px] text-gray-500'>{t(`Home:${item.endpoint}`)}</p>
                        </div>
                      </div>
                      <div className='pl-10 items-center ml-auto flex flex-col gap-4'>
                        <p className='text-[10px] flex items-center whitespace-nowrap'>
                          {t('off_day')}:{' '}
                          <span className='ml-1 bg-blue-200 text-[#1400ac] border-blue-500 border-2 p-1 rounded-[10px]'>
                            {item.offday}
                          </span>
                        </p>
                        <Link to={`/buytickets/${item.id}/${name}`}>
                          <button className='text-[#fff] bg-[#00a108] rounded-[10px] p-2'>
                            <span className='text-[15px] text-nowrap'>{t('Buyticket:select_seat')}</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='border-t-1 border-gray-500 text-[12px] items-center gap-2 p-2 flex col-span-3'>
                      <p>{t('facilities')} -</p>
                      {item.facilities.map((facility: any, index: any) => (
                        <span className='bg-gray-200 p-2 rounded-2xl text-gray-800' key={index}>
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className='h-full flex items-center justify-center'>
              <p className='text-[20px] text-gray-500'>{t('Buyticket:no_ticket')}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default BuyticketLayout
