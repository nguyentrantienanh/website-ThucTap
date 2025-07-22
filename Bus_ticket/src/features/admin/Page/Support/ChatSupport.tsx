import { useParams } from 'react-router-dom'
import Icon from '../../../../icons/Icon'
import { useState } from 'react'
import { chatData } from '../../Dataset/chat'

export default function ChatSupport() {
  const { id } = useParams<{ id: string }>()
  const [chatdata] = useState(chatData)
  const chat = chatdata.filter((item: any) => item.id === parseInt(id || '0'))
  const messages = chat.length > 0 ? chat[0].messages : []

  return (
    <>
      <div className=' flex flex-col  px-2 w-full py-4  pt-2 '>
        <div className='py-3 flex justify-between px-3 items-center text-center w-full shadow-md bg-[#fff] rounded-lg  '>
          {chat.map((item: any) => {
            const name = item.description
            return (
              <h1 key={item.id} className='text-3xl font-bold text-gray-700'>
                {name}
              </h1>
            )
          })}
        </div>

        <div className=' w-full flex  flex-col rounded-lg p-4 m-1 bg-gray-100 shadow-md  '>
          <div className='  w-full flex  flex-col rounded-lg p-4 m-2 bg-gray-100  overflow-y-auto h-[440px] '>
            {messages.length > 0
              ? messages.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex items-center mb-4 ${item.id === 1 ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        item.id === 1 ? 'bg-green-500 text-[#fff]' : 'bg-gray-300 text-gray-800'
                      }`}
                    >
                      <p className='text-sm'>{item.text}</p>
                    </div>
                    <span className='text-xs items-center text-gray-500 ml-2'>
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))
              : '2'}
          </div>

          <div className=' flex border rounded-lg h-9 w-full px-4  '>
            <input className=' w-full ' type='type' placeholder='Nhập...' />
            <i>
              <Icon name='send' />
            </i>
          </div>
        </div>
      </div>
    </>
  )
}
