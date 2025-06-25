import backgroundBuyticket from '../../assets/background.jpg'
import { useTranslation } from 'react-i18next'
import Icon from '../../icons/Icon'
import { useState, useEffect } from 'react'
import { ticket } from '../../Data/Ticket'
import { Link } from 'react-router-dom'
import { useLocation } from '../../Data/location'
import CalendarComponent from '../../services/CalendarComponent'

function BuyticketLayout() {
  const { t } = useTranslation('Home')
  const { diemDi, diemDen } = useLocation()
  const Vehicle = [
    { id: 1, name: 'Bus' },
    { id: 2, name: 'Minibus' },
    { id: 3, name: 'AC' }
  ]
  const Routes = [
    { id: 1, diemDi: 'Hà Nội', diemDen: 'Phú Quốc' },
    { id: 2, diemDi: 'Hồ Chí Minh', diemDen: 'Quy Nhơn' },
    { id: 3, diemDi: t('Home_location.Da Lat'), diemDen: t('Home_location.Nha Trang') }
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

  // calendarValue sẽ lưu giá trị ngày tháng năm đã chọn từ CalendarComponent dù click hay nhập vào

  // Hàm xử lý khi người dùng chọn điểm đi và điểm đến

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

  // Lọc ticket dựa trên điểm đi và điểm đến đã chọn
  const filteredTickets = ticket.filter((item) => {
    const idDiemDi = diemDi.find((d) => d.name === selectedDiemDi)?.id || 0
    const idDiemDen = diemDen.find((d) => d.name === selectedDiemDen)?.id || 0
    const diemDiMatch = idDiemDi === 0 || item.diemdi === selectedDiemDi
    const diemDenMatch = idDiemDen === 0 || item.diemden === selectedDiemDen

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
        const itemDiemdi = item.diemdi?.trim().toLowerCase()
        const itemDiemDen = item.diemden?.trim().toLowerCase()
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

    return diemDiMatch && diemDenMatch && vehicleMatch && routeMatch && schedulesMatch
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
                reset
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
                    {selectedDiemDen || t('Home_location.All')}
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
                  <CalendarComponent />
                </div>
              </div>
              <button
                onClick={handleSeach}
                className=' w-full bg-[#1ba000] text-[#fff] cursor-pointer p-2 rounded-[10px] hover:bg-[#1ba000]/70 transition-all duration-300   h-10 justify-self-center  '
              >
                <span>{t('Home_button.FindTicket')}</span>
              </button>
            </div>
          </div>
          {/* Filter */}
          <div className='w-1/4 rounded-[10px] bg-[#fff]   h-full'>
            <div className='flex justify-between border-b-1  p-2'>
              <h1 className='text-[20px] mt-auto font-medium'>Filter</h1>
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
                Reset All
              </p>
            </div>
            <div className='  p-2'>
              <h1 className='text-[15px] font-semibold'>Vehicle Type</h1>
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
              <h1 className='text-[15px] mt-auto font-medium'>Routes</h1>
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
              <h1 className='text-[15px] mt-auto font-medium'>Schedules</h1>
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
                        <label htmlFor={`${shedule.starttime} - ${shedule.endtime}`}>
                          {shedule.starttime} - {shedule.endtime}
                        </label>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          {/* ticket */}
          {filteredTickets.length > 0 ? (
            <div className=' h-full'>
              {filteredTickets.map((item) => {
                const name = `${item.type} - ${item.diemdi} - ${item.diemden}`
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
                          <p>{item.starttime}</p>
                          <p className='text-[10px] text-gray-500'>{item.startingpoint}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2'>
                          <i className='text-[#5af521]'>
                            {' '}
                            <Icon name='arrow-right' />
                          </i>
                          <span className='text-gray-500'>{item.timetogo}</span>
                        </div>
                        <div>
                          <p>{item.endtime}</p>
                          <p className='text-[10px] text-gray-500'>{item.endpoint}</p>
                        </div>
                      </div>
                      <div className='pl-10 items-center ml-auto flex flex-col gap-4'>
                        <p className='text-[10px] flex items-center whitespace-nowrap'>
                          Off day:{' '}
                          <span className='ml-1 bg-blue-200 text-[#1400ac] border-blue-500 border-2 p-1 rounded-[10px]'>
                            {item.offday}
                          </span>
                        </p>
                        <Link to={`/buytickets/${item.id}/${name}`}>
                          <button className='text-[#fff] bg-[#00a108] rounded-[10px] p-2'>
                            <span className='text-[15px] text-nowrap'>Select Seat</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='border-t-1 border-gray-500 text-[12px] items-center gap-2 p-2 flex col-span-3'>
                      <p>Facilities -</p>
                      {item.facilities.map((facility, index) => (
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
              <p className='text-[20px] text-gray-500'>Không có vé.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default BuyticketLayout
