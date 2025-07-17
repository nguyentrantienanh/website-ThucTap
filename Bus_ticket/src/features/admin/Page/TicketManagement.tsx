import { useState } from 'react'
import { ticket } from '../../../Data/Ticket'
import Icon from '../../../icons/Icon'
import { useTranslation } from 'react-i18next'

export default function TicketManagement() {
  const [tickets] = useState(ticket)
  const { t } = useTranslation()

  return (
    <div className='p-4  w-full space-y-4'>
      <h2 className='text-2xl font-bold mb-4'>Quản lý vé</h2>
      {tickets.map((item) => {
        const diemdi = t(`Home:${item.diemdi}`)
        const diemden = t(`Home:${item.diemden}`)
        const name = `${item.type} - ${diemdi} - ${diemden}`

        return (
          <div key={item.id} className='rounded-xl bg-[#fff] shadow-md overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center p-5 gap-4'>
              <div className='flex-1 space-y-1'>
                <h1 className='text-lg font-semibold truncate'>{name}</h1>
                <p className='text-sm text-gray-500'>Sơ đồ ghế: {item.seatLayout}</p>
                <p className='text-amber-500 text-sm flex items-center gap-1'>
                  <Icon name='bus' /> {item.type}
                </p>
              </div>

              <div className='flex-1 flex justify-around text-sm text-gray-700'>
                <div>
                  <p>{item.starttime}</p>
                  <p className='text-gray-500'>{t(`Home:${item.startingpoint}`)}</p>
                </div>
                <div className='flex flex-col items-center text-green-600'>
                  <Icon name='arrow-right' />
                  <span className='text-xs text-gray-500'>{item.timetogo}</span>
                </div>
                <div>
                  <p>{item.endtime}</p>
                  <p className='text-gray-500'>{t(`Home:${item.endpoint}`)}</p>
                </div>
              </div>

              <div className='flex flex-col items-end gap-2'>
                <p className='text-xs'>
                  {t('off_day')}:{' '}
                  <span className='ml-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-xl border border-blue-400'>
                    {item.offday}
                  </span>
                </p>
                <div className='flex gap-2'>
                  <button className='bg-yellow-500 text-[#fff] px-3 py-1 rounded-md text-sm hover:bg-yellow-600'>
                    Sửa
                  </button>
                  <button className='bg-red-500 text-[#fff] px-3 py-1 rounded-md text-sm hover:bg-red-600'>Xóa</button>
                </div>
              </div>
            </div>

            <div className='border-t px-5 py-3 flex flex-wrap gap-2 text-sm text-gray-700 bg-gray-50'>
              <p>{t('facilities')}:</p>
              {item.facilities.map((facility, index) => (
                <span key={index} className='bg-gray-200 px-3 py-1 rounded-full'>
                  {facility}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
