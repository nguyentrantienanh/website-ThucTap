import { useState } from 'react'
import backgruond from '../../../../assets/background.jpg'
import Icon from '../../../../icons/Icon'

export default function SupportTicket() {
  return (
    <>
      <div
        className=' w-full h-50 flex items-center justify-center  '
        style={{ backgroundImage: `url(${backgruond})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000041]  '>
          <h1 className='text-4xl font-bold mb-4 text-[#fff]  '>Support Ticket</h1>
        </div>
      </div>
      <div className=' bg-[#ececec]  '>
        <div className=' mx-20 py-10 '>
          <table className='min-w-full bg-[#1ba000]  rounded-t-2xl  '>
            <thead>
              <tr className='  text-[#fff] '>
                <th className='py-2 px-4   text-start '>Subject</th>
                <th className='py-2 px-2   '>Status</th>
                <th className='py-2 px-4  '>Priority</th>
                <th className='py-2 px-4  '>Last Reply</th>
                <th className='py-2 px-4  text-end'>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className='text-[#000] bg-[#fff] text-nowrap '>
                <td className='py-2 px-4 text-start'>[Ticket#660696] </td>
                <td className='py-2 px-4 text-center  '>
                  <span className='border-1 bg-[#2e2e2e27] px-2 py-1 rounded-[10px] text-[12px] font-bold'>
                    {' '}
                    no responded
                  </span>
                </td>
                <td className='py-2 px-4 text-center'>
                  <span className='border-1 bg-[#2e2e2e27] px-2 py-1 rounded-[10px] text-[12px] font-bold '>high</span>
                </td>
                <td className='py-2 px-4 text-center font-medium text-gray-500'>6 hours ago</td>
                <td className='py-2 px-5 text-end  cursor-pointer'>
                  <i className='bg-[#1ba000] text-[15px] py-2 px-3 rounded-[10px] text-[#fff]'>
                    <Icon name='computer' />
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
