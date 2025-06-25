import { useState, useEffect, useRef } from 'react'
import { Calendar } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const calendarComponent = () => {
  // hiện ngày có trong local nếu không có thì thành ngày hiện tại
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

  const handleSelect = (date: any) => {
    setCalendar(format(date, 'dd/MM/yyyy'))
    setOpen(false)
  }
  // lưu ngày đã chọn vào localStorage
  useEffect(() => {
    localStorage.setItem('selectedData', calendar)
  }, [calendar])
  // lưu ko mất dữ liệu khi reload trang
  useEffect(() => {
    const savedDate = localStorage.getItem('selectedData')
    if (savedDate) {
      setCalendar(savedDate)
    }
  }, [])

  return (
    <div ref={refCalendar}>
      <input className='focus:outline-none' type='' value={calendar} readOnly onClick={() => setOpen(!open)} />
      <div className={` absolute  w-full h-full z-100 `} ref={refCalendar}>
        {open && (
          <Calendar
            className='border-4 border-gray-300 rounded-lg shadow-xl'
            // date = là ngày click vào
            date={new Date(calendar.split('/').reverse().join('-'))}
            onChange={handleSelect}
          />
        )}
      </div>
    </div>
  )
}
export default calendarComponent
