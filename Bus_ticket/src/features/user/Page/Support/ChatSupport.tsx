import { useParams } from 'react-router-dom'
import Icon from '../../../../icons/Icon'
import { useState } from 'react'

export default function ChatSupport() {
  const { id } = useParams<{ id: string }>()

  const chats = JSON.parse(localStorage.getItem('chats') || '[]')
  const chat = chats.filter((item: any) => item.id === parseInt(id || '0'))
  const messages = chat.length > 0 ? chat[0].messages : []

  //  hàm xử lý gửi tin nhắn
  const [message, setMessage] = useState('')
  const handleSendMessage = () => {
    if (!message.trim()) return alert('Vui lòng nhập tin nhắn')
    const newMessage = {
      id: 2,
      sender: 'user',
      text: message,
      timestamp: new Date().toLocaleString()
    }
    const updatedChat = {
      ...chat[0],
      messages: [...chat[0].messages, newMessage],
      lastMessage: message,
      status: 1
    }
    const updatedChats = chats.map((item: any) => (item.id === chat[0].id ? updatedChat : item))
    localStorage.setItem('chats', JSON.stringify(updatedChats))
    setMessage('')
  }

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
                    className={`flex items-center mb-4 ${item.id === 2 ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        item.id === 2 ? 'bg-green-500 text-[#fff]' : 'bg-gray-300 text-gray-800'
                      }`}
                    >
                      <p className='text-sm'>{item.text}</p>
                    </div>
                    <span className='text-xs items-center text-gray-500 ml-2'>{item.timestamp}</span>
                  </div>
                ))
              : '2'}
          </div>

          <div className='flex items-center mt-4'>
            <input
              type='text'
              placeholder='Nhập tin nhắn...'
              className='flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className='ml-2 px-4 py-2 bg-green-500 text-[#fff] rounded-lg hover:bg-green-600'
            >
              <Icon name='send' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
